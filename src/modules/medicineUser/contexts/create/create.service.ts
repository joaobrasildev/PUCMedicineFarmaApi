import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists } from '@shared/utils/errors';
import { CreateMedicineUserRequestBodyDTO } from '@shared/dtos/medicineUser/createMedicineUserRequestBody.dto';
import { MedicineUserRepository } from '@shared/repositories/medicineUser.repository';

@Injectable()
export class CreateMedicineUserService {
  constructor(
    @InjectRepository(MedicineUserRepository)
    private repository: MedicineUserRepository,
  ) {}

  async execute(dto: CreateMedicineUserRequestBodyDTO) {
    return this.repository.createMedicineUser(dto);
  }
}
