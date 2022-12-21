import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

//create discussion type
export const DiscussionType = new GraphQLObjectType({
  name: "Discussion",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

//create comment type
export const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    discussionId: { type: GraphQLID },
  }),
});
