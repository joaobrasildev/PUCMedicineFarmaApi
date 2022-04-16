import { Injectable } from '@nestjs/common';
import { MedicineRepository } from '@shared/repositories/medicine.repository';

@Injectable()
export class GetOneMedicineService {
  constructor(private repository: MedicineRepository) {}

  async execute(id: string) {
    return this.repository.findOneMedicine(id);
  }
}
