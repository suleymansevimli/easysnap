const Snap = {
    user : async (parent,args,{ User }) => {
        return await User.findById(parent.user_id)
    },

    snapCategory : async (parent,args, {SnapCategory}) => {
        return await SnapCategory.findById(parent.category_id)
    }
}

module.exports = Snap;