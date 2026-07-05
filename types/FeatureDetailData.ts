import { UserData } from "./UserData";
import { FeatureData } from "./FeatureData";

export interface FeatureDetailData extends FeatureData {
  user: UserData;
}
