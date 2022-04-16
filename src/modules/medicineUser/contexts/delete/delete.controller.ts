import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { apiTags } from '@shared/utils/apiTags';
import { DeleteMedicineUserService } from './delete.service';

@ApiTags(apiTags.MEDICINE_USERS)
@Controller('medicineUsers')
export class DeleteMedicineUserController {
  constructor(private deleteMedicineUserService: DeleteMedicineUserService) {}
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async active(@Param('id') id: string) {
    return await this.deleteMedicineUserService.execute(id);
  }
}
