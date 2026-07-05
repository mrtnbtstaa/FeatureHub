import { ProfileData } from "./ProfileData";
import { UserData } from "./UserData";

export interface CommentData{
    id: string;
    createdAt: string;
    message: string;
    featureId: string;
    user: UserData,
    profile: ProfileData
}