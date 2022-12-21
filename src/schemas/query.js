import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";
import { DiscussionType, CommentType } from "./type.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //gets a discussion
    discussion: {
      type: DiscussionType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        try {
          return await prisma.discussion.findFirstOrThrow({
            where: { id: args.id },
          });
        } catch (error) {
          return error.message;
        }
      },
    },
    //get all discussions in the db
    discussions: {
      type: new GraphQLList(DiscussionType),
      async resolve(parent, args) {
        try {
          return await prisma.discussion.findMany();
        } catch (error) {
          return error.message;
        }
      },
    },
    // gets a single comment
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        try {
          return await prisma.comment.findFirstOrThrow({
            where: { id: args.id },
          });
        } catch (error) {
          return error.messae;
        }
      },
    },
    //get all comments under a discussion
    commentsUnderDiscussion: {
      type: new GraphQLList(CommentType),
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        try {
          return await prisma.comment.findMany({
            where: { discussionId: args.id },
          });
        } catch (error) {
          return error.message;
        }
      },
    },
  },
});
