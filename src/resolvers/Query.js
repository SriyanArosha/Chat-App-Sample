const Query = {
    users(parent, args, { data }, info) {
        if (!args.query) {
            return data.users
        }
        return data.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    messages(parent, args, { data }, info) {
        return data.messages;
    }
}

module.exports = Query;
global.Query = Query;