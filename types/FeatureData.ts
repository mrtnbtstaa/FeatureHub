import { UUID } from "node:crypto";
import { CommentData } from "./CommentData";
import { FeatureStatus } from "./FeatureStatus";

export interface FeatureData{
    id: UUID;
    status: FeatureStatus;
    createdAt: string;
    featureTitle: string;
    featureDescription: string;
    featureImage: string;
    upvotes: number;
    comments: CommentData[]
}