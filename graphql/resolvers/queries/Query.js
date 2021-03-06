const Query = {
    user : async (parent,args, { User }) => {
        return await User.findById(args.id)
    },

    users : async (parent,args, { User }) => {
        return await User.find({}).sort({ "createdAt" : "desc" });
    },

    snap : async (parent, args, { Snap }) => {
        return await Snap.findById(args.id)
    },

    snaps : async (parent,args, {Snap}) => {
        return await Snap.find({});
    },

    snapCategory : async (parent,args, {SnapCategory}) => {
        return await SnapCategory.findById(args.id)
    },

    snapCategories : async (parent,args, {SnapCategory}) => {
        return await SnapCategory.find({});
    }
}

module.exports = Query;