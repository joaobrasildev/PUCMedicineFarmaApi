import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMedicineUserRequestBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public medicine_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public user_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public amount: number;
}