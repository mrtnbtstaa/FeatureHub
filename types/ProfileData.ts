import { UUID } from "node:crypto";

export interface ProfileData{
    id: UUID;
    avatarUrl?: string;
}
