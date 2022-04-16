import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicineUserRepository } from '@shared/repositories/medicineUser.repository';
import { CreateMedicineUserController } from './contexts/create/create.controller';
import { CreateMedicineUserService } from './contexts/create/create.service';
import { DeleteMedicineUserController } from './contexts/delete/delete.controller';
import { DeleteMedicineUserService } from './contexts/delete/delete.service';
import { GetAllMedicineUserController } from './contexts/getAll/getAll.controller';
import { GetAllMedicineUserService } from './contexts/getAll/getAll.service';
import { GetOneMedicineUserController } from './contexts/getOne/getOne.controller';
import { GetOneMedicineUserService } from './contexts/getOne/getOne.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicineUserRepository])],
  providers: [
    CreateMedicineUserService,
    DeleteMedicineUserService,
    GetAllMedicineUserService,
    GetOneMedicineUserService,
  ],
  controllers: [
    CreateMedicineUserController,
    DeleteMedicineUserController,
    GetAllMedicineUserController,
    GetOneMedicineUserController,
  ],
})
export class MedicineUserModule {}
