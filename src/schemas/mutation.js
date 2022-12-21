import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { CommentType, DiscussionType } from "./type.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addDiscussion: {
      type: DiscussionType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      async resolve(parent, args) {
        try {
          return await prisma.discussion.create({
            data: {
              title: args.title,
              content: args.content,
            },
          });
        } catch (error) {
          return error;
        }
      },
    },
    addComment: {
      type: CommentType,
      args: {
        content: { type: GraphQLString },
        discussionId: { type: GraphQLID },
      },
      async resolve(parent, args) {
        try {
          return await prisma.comment.create({
            data: {
              content: args.content,
              discussionId: args.discussionId,
            },
          });
        } catch (error) {
          return error;
        }
      },
    },
  },
});
