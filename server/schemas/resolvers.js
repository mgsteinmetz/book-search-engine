const { Book, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        book: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Book.find(params);
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        }
    }
};

module.exports = resolvers;