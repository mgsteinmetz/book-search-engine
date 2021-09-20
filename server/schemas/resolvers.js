const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, { user }) => {
            return User.findOne({ _id: user._id }).populate('savedBooks');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        login: async (parent, body) => {
            const user = await User.findOne({ email: body.email });
            if (!user) {
                throw new AuthenticationError('Incorrect email or password')
            }
            const correctPass = await user.isCorrectPassword(password);
            if (!correctPass) {
                throw new AuthenticationError('Incorrect email or password')
            }
            const token = signToken(user);
            return { user, token };
        },
        saveBook: async (parent, { input }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    { _id: context.user_id },
                    { $addToSet: { savedBooks: { ...input }}},
                    { new: true, runValidators: true }
                );
                return user;
            }
            throw new AuthenticationError('You must be logged in!')
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    { _id: context.user.id },
                    { $pull: { savedBooks: { bookId }}},
                    { new: true, runValidators: true }
                );
                return user;
            }
        }
    }
};

module.exports = resolvers;