import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { apiTags } from '@shared/utils/apiTags';
import { DeleteMedicineService } from './delete.service';

@ApiTags(apiTags.MEDICINE)
@Controller('medicines')
export class DeleteMedicineController {
  constructor(private deleteMedicineService: DeleteMedicineService) {}
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async active(@Param('id') id: string) {
    return await this.deleteMedicineService.execute(id);
  }
}
