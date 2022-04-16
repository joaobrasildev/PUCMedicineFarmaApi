import { ApiProperty } from "@nestjs/swagger";
import { unitMeasure } from "@shared/utils/types";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMedicineRequestBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public unitMeasure: unitMeasure;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public milligram: string;
}