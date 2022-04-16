import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists } from '@shared/utils/errors';
import { CreateMedicineRequestBodyDTO } from '@shared/dtos/medicine/createMedicineRequestBody.dto';
import { MedicineRepository } from '@shared/repositories/medicine.repository';

@Injectable()
export class CreateMedicineService {
  constructor(
    @InjectRepository(MedicineRepository)
    private repository: MedicineRepository,
  ) {}

  async execute(dto: CreateMedicineRequestBodyDTO) {
    const findedMedicine = await this.repository.findByMedicineAndUnitMeasure(dto.name, dto.unitMeasure);
    if (findedMedicine.length > 0) {
      throw new ConflictException(alreadyExists('medicine-with-unitMeasure'));
    }
    const medicine = await this.repository.createMedicine(dto);

    return medicine;
  }
}
