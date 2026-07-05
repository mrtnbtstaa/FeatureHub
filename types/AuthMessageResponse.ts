import { UUID } from "crypto";

export type CursorResponse<T> = {
  data: T[];
  nextCursor: UUID | null;
  hasNextPage: boolean;
};