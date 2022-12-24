# discussion-and-comments

This is a graphql api that allows users to start discussions as well as allows user to write comments under the discussions.

It is important to note that the goal of this repo is not to build a production grade application but rather to solidify graphql concepts learnt.

# Requirements

- [Nodejs](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Mongodb](https://www.mongodb.com/try/download/community) is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections contain sets of documents and function which is the equivalent of relational database tables.
- [Graphql](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more.
- [Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

# Important Graphql Definitions

- Query : This is a grqphql operation that allows a client to get data from the server. Available queries in this api include:

- Get a discussion by id

```
{
    discussion(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        id,
        title,
        content
    }
}
```

- Get all discussions

```
{
    discussions{
        id,
        title,
        content
    }
}
```

- Get a comment by id

```
{
    comment(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        id,
        content,
        discussionId
    }
}
```

- Get all comments under a discussion

```
{
    commentsUnderDiscussion(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        id,
        content
    }
}
```

- Mutations : These are GraphQL Operation that allows you to insert new data or modify the existing data on the server-side. Available mutations in the api include:
- Create a discussion

```
{
    addDiscussion(title:"sample title", content:"sample content"){
        id,
        title,
        content
    }
}
```

- Comment under a discussion

```
{
    addComment(content:"sample comment", discussionId:"a6727122-4b65-462f-858d-4e961918d87b"){
        id,
        content,
        discussionId
    }
}
```

- Schema : This is the blueprint for communication between the client and the server. It specifies the queries the client can make, type of data retrievable and relationship between types
- Resolvers : are a collection of functions that generate a response from the GraphQL server.

# How to Setup Locally

- Ensure you have nodejs, git and postgres installed locally.
- clone this repository using `git clone https://github.com/alahirajeffrey/discussion-and-comments.git`
- Navigate to project folder and install dependencies using `npm install`
- Create .env file and add environment variables using the .env.sample file as a guide
- Open terminal and type `npm run dev` to start server in development mode or type `npm run start` to start server in production mode
- Navigate to the url to test e.g `localhost:5000/graphql` or whatever port number you allocated to the api.

# Author

[Alahira Jeffrey](<(https://github.com/alahirajeffrey)>)

# Lincense

This project is available for use under the MIT License.
