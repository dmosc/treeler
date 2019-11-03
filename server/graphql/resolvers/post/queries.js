import {Post} from '../../../database/models';
import {ApolloError} from 'apollo-server-core';

const postQueries = {
  post: async (_, args) => {
    const {id} = args;
    const post = await Post.findById(id).populate('user origin tree');

    if (!post) throw new ApolloError('Post not found');
    else return post;
  }
};

export default postQueries;
