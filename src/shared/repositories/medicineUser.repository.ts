import { MedicineUser } from '@shared/database/entities/medicineUser.entity';
import { CreateMedicineUserDTO } from '@shared/dtos/medicineUser/createMedicineUser.dto';
import { unitMeasure } from '@shared/utils/types';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MedicineUser)
export class MedicineUserRepository extends Repository<MedicineUser> {
  async createMedicineUser(dto: CreateMedicineUserDTO): Promise<MedicineUser> {
    const medicineUser = await this.create(dto);

    return this.save(medicineUser);
  }

  async findOneMedicineUser(id: string): Promise<MedicineUser | undefined> {
    return this.findOne({ id });
  }

  async findAllMedicineUser(): Promise<MedicineUser[]> {
    return await this.find();
  }

  async deleteMedicineUser(id: string): Promise<void> {
    this.delete(id);
  }
}
