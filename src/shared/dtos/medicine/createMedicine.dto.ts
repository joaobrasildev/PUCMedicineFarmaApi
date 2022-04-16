import { unitMeasure } from "@shared/utils/types";

export class CreateMedicineDTO {
  public name: string;
  public unitMeasure: unitMeasure;
  public milligram: string;
}