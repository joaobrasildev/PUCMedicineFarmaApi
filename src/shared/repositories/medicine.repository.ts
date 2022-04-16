import { Medicine } from '@shared/database/entities/medicine.entity';
import { CreateMedicineDTO } from '@shared/dtos/medicine/createMedicine.dto';
import { unitMeasure } from '@shared/utils/types';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Medicine)
export class MedicineRepository extends Repository<Medicine> {
  async createMedicine(dto: CreateMedicineDTO): Promise<Medicine> {
    const medicine = await this.create(dto);

    return this.save(medicine);
  }

  async findByMedicineAndUnitMeasure(name: string, unitMeasure: unitMeasure): Promise<Medicine[] | undefined> {
    return this.find( { where: { name, unitMeasure } });
  }

  async findOneMedicine(id: string): Promise<Medicine | undefined> {
    return this.findOne({ id }, { relations: ['medicineUsers'] });
  }

  async findAllMedicine(): Promise<Medicine[]> {
    return await this.find({ relations: ['medicineUsers'] });
  }

  async deleteMedicine(id: string): Promise<void> {
    this.delete(id);
  }
}
