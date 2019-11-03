import {Post, User} from '../../../database/models';

const postMutations = {
  post: async (_, args) => {
    const post = new Post({...args.post});
    const userId = post.user;
    await Promise.all([
      User.updateMany({id: userId}, {$addToSet: {posts: post.id}}),
      post.save()
    ]);

    try {
      return await Post.findById(post.id).populate('user origin tree');
    } catch (e) {
      return e;
    }
  }
};

export default postMutations;
