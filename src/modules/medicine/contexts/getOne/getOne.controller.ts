import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllMedicineResponseDTO } from '@shared/dtos/medicine/getAllMedicineResponse.dto';
import { GetOneMedicineService } from './getOne.service';
import { apiTags } from '@shared/utils/apiTags';

@ApiTags(apiTags.MEDICINE)
@Controller('medicines')
export class GetOneMedicineController {
  constructor(private getOneMedicineService: GetOneMedicineService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: GetAllMedicineResponseDTO,
  })
  async getOne(@Param('id') id: string) {
    const medicine = await this.getOneMedicineService.execute(id);

    return instanceToInstance(medicine);
  }
}
