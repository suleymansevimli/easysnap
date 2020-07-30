module.exports = {
    createSnap : async (parent, { data : { text,user_id,category_id } } , { Snap }) => {
        return await new Snap({
            text,user_id,category_id
        }).save()
    },

    deleteSnap : async ( parent, args, { Snap } ) => {
        return Snap.findByIdAndDelete(args.id);
    }
}