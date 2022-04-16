import { ApiProperty } from "@nestjs/swagger";
import { unitMeasure } from "@shared/utils/types";

export class GetAllMedicineResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public unitMeasure: unitMeasure;

  @ApiProperty()
  public milligram: string;
}