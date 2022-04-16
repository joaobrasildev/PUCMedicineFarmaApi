import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateMedicineUserRequestBodyDTO } from '@shared/dtos/medicineUser/createMedicineUserRequestBody.dto';
import { CreateMedicineUserService } from './create.service';
import { apiTags } from '@shared/utils/apiTags';

@ApiTags(apiTags.MEDICINE_USERS)
@Controller('medicineUsers')
export class CreateMedicineUserController {
  constructor(private createMedicineUserService: CreateMedicineUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: CreateMedicineUserRequestBodyDTO,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() createMedicineUserRequestBodyDTO: CreateMedicineUserRequestBodyDTO,
  ) {
    const medicineUser = await this.createMedicineUserService.execute(createMedicineUserRequestBodyDTO);

    return instanceToInstance(medicineUser);
  }
}
