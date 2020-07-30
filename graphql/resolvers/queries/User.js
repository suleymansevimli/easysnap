const User = {
    snaps : async (parent,args,{ Snap }) => {
        console.log(parent)
        return await Snap.find({ user_id:parent._id })
    }
}

module.exports = User;