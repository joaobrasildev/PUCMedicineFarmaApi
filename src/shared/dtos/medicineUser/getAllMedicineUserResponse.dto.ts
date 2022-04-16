import { ApiProperty } from "@nestjs/swagger";
import { unitMeasure } from "@shared/utils/types";

export class GetAllMedicineUserResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  medicine_id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  amount: number;
}