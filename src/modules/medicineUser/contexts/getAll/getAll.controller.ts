import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllMedicineUserResponseDTO } from '@shared/dtos/medicineUser/getAllMedicineUserResponse.dto';
import { GetAllMedicineUserService } from './getAll.service';
import { apiTags } from '@shared/utils/apiTags';

@ApiTags(apiTags.MEDICINE_USERS)
@Controller('medicineUsers')
export class GetAllMedicineUserController {
  constructor(private getAllMedicineUserService: GetAllMedicineUserService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: GetAllMedicineUserResponseDTO,
  })
  public async getAll() {
    const medicineUsers = await this.getAllMedicineUserService.execute();

    return instanceToInstance(medicineUsers);
  }
}
