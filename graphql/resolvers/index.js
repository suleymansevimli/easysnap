// Query resolvers
const Query = require('./queries/Query')
const Snap = require('./queries/Snap')
const User = require('./queries/User')

// mutation resolvers
const Mutation = require('./mutations/index')

module.exports = {
    Query,
    Mutation,
    Snap,
    User
}