import {Vote} from '../../../database/models';

const voteQueries = {
  votes: async (_, args) => {
    const {userId} = args;
    const votes = await Vote.find({user: userId});
    console.log(votes);
  }
};

export default voteQueries;
