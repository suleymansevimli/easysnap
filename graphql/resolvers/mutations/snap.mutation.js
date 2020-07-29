module.exports = {
    createSnap : async (parent, { data : { text,user_id } } , { Snap }) => {

        return await new Snap({
            text,user_id
        }).save()

    }
}