import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllMedicineResponseDTO } from '@shared/dtos/medicine/getAllMedicineResponse.dto';
import { GetAllMedicineService } from './getAll.service';
import { apiTags } from '@shared/utils/apiTags';

@ApiTags(apiTags.MEDICINE)
@Controller('medicines')
export class GetAllMedicineController {
  constructor(private getAllMedicineService: GetAllMedicineService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: GetAllMedicineResponseDTO,
  })
  public async getAll() {
    const medicines = await this.getAllMedicineService.execute();

    return instanceToInstance(medicines);
  }
}
