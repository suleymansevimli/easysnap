const User = {
    snaps : async (parent,args,{ Snap }) => {
        return await Snap.findById({ user_id:parent.id })
    }
}

module.exports = User;