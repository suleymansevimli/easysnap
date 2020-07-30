module.exports = {
    createCategory : async ( parent, args, { SnapCategory } ) => {
        return await new SnapCategory({
            name : args.data.name
        }).save()
    }
}