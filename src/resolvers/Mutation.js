//const { uuidv4 } = require('uuid');

const Mutation = {
    createUser(parent, args, { data, pubsub }, info) {
        const user = {
            user_id: args.user_id,
            name: args.name
        }

        pubsub.publish('user', {
            user: {
                mutation: 'CREATED',
                data: user
            }
        });

        data.users.push(user);
        return user
    },
    updateUser(parent, args, { data, pubsub }, info) {
        const user = data.users.find((user) => user.id === args.id)
        if (!user) {
            throw new Error('User does not exist!')
        }

        if (typeof args.user_id === 'string') {
            user.user_id = args.user_id
        }

        if (typeof args.name === 'string') {
            user.name = args.name
        }

        pubsub.publish('user', {
            user: {
                mutation: 'UPDATED',
                data: user
            }
        })

        return user
    },
    deleteUser(parent, args, { data, pubsub }, info) {
        const isUserExists = data.users.findIndex((user) => user.id === args.id)

        if (!isUserExists) {
            throw new Error('User does not exist!')
        }
        //splice will return the removed items from the array object
        const userdeleted = data.users.splice(isUserExists, 1);

        pubsub.publish('user', {
            user: {
                mutation: 'CREATED',
                data: user
            }
        });
        return userdeleted[0]
    },
    createMessage(parent, args, { data, pubsub }, info) {
        const message = {
            user_id: args.user_id,
            message: args.message
        }

        pubsub.publish('message', {
            message: {
                mutation: 'CREATED',
                data: message
            }
        });

        data.messages.push(message);
        return message
    },
    updateMessage(parent, args, { data, pubsub }, info) {
        const message = data.messages.find((message) => message.id === args.id)
        if (!message) {
            throw new Error('Message does not exist!')
        }

        if (typeof args.user_id !== 'undefined') {
            message.user_id = args.user_id
        }

        if (typeof args.message === 'string') {
            message.message = args.message
        }

        pubsub.publish('message', {
            message: {
                mutation: 'UPDATED',
                data: message
            }
        })

        return message
    },
    deleteMessage(parent, args, { data, pubsub }, info) {
        const isMessageExists = data.messages.findIndex((message) => message.id === args.id)

        if (!isMessageExists) {
            throw new Error('Message does not exist!')
        }
        //splice will return the removed items from the array object
        const messagedeleted = data.messages.splice(isMessageExists, 1);

        pubsub.publish('message', {
            message: {
                mutation: 'CREATED',
                data: message
            }
        });
        return messagedeleted[0]
    }
}

module.exports = Mutation;
global.Mutation = Mutation;