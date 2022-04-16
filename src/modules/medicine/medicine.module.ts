import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicineRepository } from '@shared/repositories/medicine.repository';
import { CreateMedicineController } from './contexts/create/create.controller';
import { CreateMedicineService } from './contexts/create/create.service';
import { DeleteMedicineController } from './contexts/delete/delete.controller';
import { DeleteMedicineService } from './contexts/delete/delete.service';
import { GetAllMedicineController } from './contexts/getAll/getAll.controller';
import { GetAllMedicineService } from './contexts/getAll/getAll.service';
import { GetOneMedicineController } from './contexts/getOne/getOne.controller';
import { GetOneMedicineService } from './contexts/getOne/getOne.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicineRepository])],
  providers: [
    CreateMedicineService,
    DeleteMedicineService,
    GetAllMedicineService,
    GetOneMedicineService,
  ],
  controllers: [
    CreateMedicineController,
    DeleteMedicineController,
    GetAllMedicineController,
    GetOneMedicineController,
  ],
})
export class MedicineModule {}
