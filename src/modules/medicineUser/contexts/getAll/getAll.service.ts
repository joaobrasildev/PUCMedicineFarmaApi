import { Injectable } from '@nestjs/common';
import { MedicineUserRepository } from '@shared/repositories/medicineUser.repository';

@Injectable()
export class GetAllMedicineUserService {
  constructor(private repository: MedicineUserRepository) {}

  async execute() {
    return this.repository.findAllMedicineUser();
  }
}
