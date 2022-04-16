import { unitMeasure } from "@shared/utils/types";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MedicineUser } from "./medicineUser.entity";

@Entity('medicines')
export class Medicine {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  name: string;

  @Column({ type: 'varchar'})
  unitMeasure: unitMeasure;

  @Column()
  milligram: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @OneToMany(() => MedicineUser, (medicineUser) => medicineUser.medicine)
  public medicineUsers?: MedicineUser[];

}