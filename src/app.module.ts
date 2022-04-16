import { MedicineModule } from '@modules/medicine/medicine.module';
import { MedicineUserModule } from '@modules/medicineUser/medicineUser.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import envConfig from './config/env';
import { getDatabaseConfigConnection } from './config/env/connection';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    MedicineModule,
    MedicineUserModule
  ],
})
export class AppModule {}
