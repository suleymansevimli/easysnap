const user = require('./user.mutation')
const snap = require('./snap.mutation')
const snapCategory = require('./snapCategory.mutation')

const Mutation =  {
    ...user,
    ...snap,
    ...snapCategory
}

module.exports = Mutation;