import { commentSchema } from "@/features/roadmap/schemas/comment.schema";
import { errorResponse, successResponse } from "@/lib/api/response.builder";
import { withAuth } from "@/lib/api/with.auth";
import { RoadmapServerService } from "@/lib/services/roadmap.server";
import { UUID } from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";

const uuidSchema = z.uuid();

export const POST = withAuth(async (request, user) => {
  try {
    const body = await request.json();
    const { data, featureId } = body || {};

    const validation = commentSchema.safeParse(data);
    const uuidvalidation = uuidSchema.safeParse(featureId);

    if (!validation.success || !uuidvalidation.success)
      return NextResponse.json(errorResponse("Invalid input"), { status: 400 });

    const comment = await RoadmapServerService.saveComment(
      validation.data,
      uuidvalidation.data as UUID,
      user?.id as UUID,
    );

    return NextResponse.json(
      successResponse("Successfully created a comment", comment),
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      errorResponse("Malformed or missing body content"),
      { status: 400 },
    );
  }
});

export const GET = withAuth(async (request, user) => {
  const { searchParams } = new URL(request.url);
  const featureId = searchParams.get("featureId"); // get the query param from the url

  const uuidValidation = uuidSchema.safeParse(featureId);

  if (!uuidValidation.success)
    return NextResponse.json(
      { message: "Missing featureId parameter" },
      { status: 400 },
    );

  const comments = await RoadmapServerService.getComments(
    uuidValidation.data as UUID,
  );

  return NextResponse.json(
    successResponse("Successfully retrieved list of comments", comments),
    { status: 200 },
  );
});

export const DELETE = withAuth(async (request, user) => {
  try {
    const { commentId } = await request.json();

    const uuidValidation = uuidSchema.safeParse(commentId);

    if (!uuidValidation.success)
      return NextResponse.json(
        { message: "Missing comment id" },
        { status: 400 },
      );

    await RoadmapServerService.deleteComment(uuidValidation.data as UUID, user.id as UUID);

    return NextResponse.json(successResponse("Successfully delete comment"), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(errorResponse("Malformed or missing body content"), { status: 400 });
  }
});
