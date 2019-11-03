import {Vote, Post} from '../../../database/models';

const voteMutations = {
  vote: async (_, args) => {
    const vote = new Vote({...args.vote});
    console.log(vote);
    vote.type === 'UPVOTE'
      ? await Post.updateOne({_id: vote.post}, {$addToSet: {upvotes: vote}})
      : await Post.updateOne({_id: vote.post}, {$addToSet: {downvotes: vote}});

    try {
      await vote.save();
      return vote;
    } catch (e) {
      return null;
    }
  }
};

export default voteMutations;
