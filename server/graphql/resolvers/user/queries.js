import {User} from '../../../database/models';
import {ApolloError} from 'apollo-server-core';

const userQueries = {
  user: async (_, args) => {
    const {id} = args;
    const user = await User.findById(id)
      .populate('posts')
      .populate({
        path: 'posts',
        populate: {path: 'tree origin upvotes downvotes'}
      });

    if (!user) throw new ApolloError('User not found');

    if (user.posts.length) {
      const points = user.posts.reduce(
        (total, {tree: {points}, upvotes, downvotes}) =>
          (total += points * (upvotes.length + 1) - downvotes.length),
        0
      );
      user.points = points;
    }

    return user;
  }
};

export default userQueries;
