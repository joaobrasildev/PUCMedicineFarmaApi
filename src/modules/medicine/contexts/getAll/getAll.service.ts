import { Injectable } from '@nestjs/common';
import { MedicineRepository } from '@shared/repositories/medicine.repository';

@Injectable()
export class GetAllMedicineService {
  constructor(private repository: MedicineRepository) {}

  async execute() {
    return this.repository.findAllMedicine();
  }
}
