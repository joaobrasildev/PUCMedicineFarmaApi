import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { MedicineRepository } from '@shared/repositories/medicine.repository';

@Injectable()
export class DeleteMedicineService {
  constructor(private repository: MedicineRepository) {}

  async execute(id: string) {
    const findedMedicine = await this.repository.findOne(id);

    if(!findedMedicine) {
      throw new NotFoundException(notFound('medicine')); 
    } else {  
      this.repository.deleteMedicine(id);
    }
  }
}
