import { Injectable } from '@nestjs/common';
import { MedicineUserRepository } from '@shared/repositories/medicineUser.repository';

@Injectable()
export class GetOneMedicineUserService {
  constructor(private repository: MedicineUserRepository) {}

  async execute(id: string) {
    return this.repository.findOneMedicineUser(id);
  }
}
