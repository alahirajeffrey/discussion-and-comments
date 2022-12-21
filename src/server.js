import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { RootMutation } from "./schemas/mutation.js";
import { RootQuery } from "./schemas/query.js";

dotenv.config();

const port = process.env.PORT || 5000;

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  if (process.env.NODE_ENV === "development")
    console.log(`Server running on port: ${port}`);
});
