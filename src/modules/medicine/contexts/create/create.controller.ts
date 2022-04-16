import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateMedicineRequestBodyDTO } from '@shared/dtos/medicine/createMedicineRequestBody.dto';
import { CreateMedicineService } from './create.service';
import { apiTags } from '@shared/utils/apiTags';

@ApiTags(apiTags.MEDICINE)
@Controller('medicines')
export class CreateMedicineController {
  constructor(private createMedicineService: CreateMedicineService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: CreateMedicineRequestBodyDTO,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() createMedicineRequestBodyDTO: CreateMedicineRequestBodyDTO,
  ) {
    const medicine = await this.createMedicineService.execute(createMedicineRequestBodyDTO);

    return instanceToInstance(medicine);
  }
}
