import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllMedicineUserResponseDTO } from '@shared/dtos/medicineUser/getAllMedicineUserResponse.dto';
import { GetOneMedicineUserService } from './getOne.service';
import { apiTags } from '@shared/utils/apiTags';

@ApiTags(apiTags.MEDICINE_USERS)
@Controller('medicineUsers')
export class GetOneMedicineUserController {
  constructor(private getOneMedicineUserService: GetOneMedicineUserService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: GetAllMedicineUserResponseDTO,
  })
  async getOne(@Param('id') id: string) {
    const medicineUser = await this.getOneMedicineUserService.execute(id);

    return instanceToInstance(medicineUser);
  }
}
