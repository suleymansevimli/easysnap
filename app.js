const express = require('express');
const mongoose = require('mongoose')

// .env dosyasını kullanabilmek için
require('dotenv').config();



const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const resolvers = require('./graphql/resolvers/index');

// models
const User = require('./models/User')
const Snap = require('./models/Snap')
const SnapCategory = require('./models/SnapCategory')

let server = new ApolloServer({
    typeDefs : importSchema('./graphql/schema.graphql'),
    resolvers : resolvers,
    context : {
        User,
        Snap,
        SnapCategory
    }
})

mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('MONGODB connection successfully'))
    .catch( e => console.log('MONGODB connection failed',e))

mongoose.set('useCreateIndex', true)

const app = express();

server.applyMiddleware({ app });

app.listen({ port:4000 },() => {
    console.log(`server listening on 4000 port http://localhost:4000${server.graphqlPath}`)
})