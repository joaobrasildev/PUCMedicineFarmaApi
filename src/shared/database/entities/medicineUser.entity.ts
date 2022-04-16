import { unitMeasure } from "@shared/utils/types";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Medicine } from "./medicine.entity";

@Entity('medicines_user')
export class MedicineUser {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar'})
  user_id: string;

  @Column({ type: 'varchar'})
  medicine_id: string;  

  @Column({ type: 'varchar'})
  amount: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @ManyToOne(() => Medicine, (medicine) => medicine.medicineUsers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'medicine_id' })
  public medicine?: Medicine;
}