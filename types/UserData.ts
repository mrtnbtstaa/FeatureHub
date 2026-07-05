import { UUID } from "node:crypto";
import { ProfileData } from "./ProfileData";

export interface UserData {
  id: UUID;
  name: string;
  email: string;
  createdAt: string;
  profile: ProfileData;
}
