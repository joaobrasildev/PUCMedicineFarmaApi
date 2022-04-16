import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { MedicineUserRepository } from '@shared/repositories/medicineUser.repository';

@Injectable()
export class DeleteMedicineUserService {
  constructor(private repository: MedicineUserRepository) {}

  async execute(id: string) {
    const findedMedicineUser = await this.repository.findOne(id);

    if(!findedMedicineUser) {
      throw new NotFoundException(notFound('medicine-user')); 
    } else {  
      this.repository.deleteMedicineUser(id);
    }
  }
}
