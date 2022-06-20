const User = {
    messages(parent, args, { data }, info) {
        return data.messages.filter((message) => {
            return message.user_id === parent.id
        })
    },
}

module.exports = User;
global.User = User;