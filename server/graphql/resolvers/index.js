import {GraphQLUpload} from 'graphql-upload';

// User
import userQueries from './user/queries';
import userMutations from './user/mutations';

// Origin
import originQueries from './origin/queries';
import originMutations from './origin/mutations';

// Post
import postQueries from './post/queries';
import postMutations from './post/mutations';

// Tree
import treeQueries from './tree/queries';
import treeMutations from './tree/mutations';

// Vote
import voteQueries from './vote/queries';
import voteMutations from './vote/mutations';

// Soil
import soilQueries from './soil/queries';
import soilMutations from './soil/mutations';

// Misc
import miscMutations from './misc/mutations';

const resolvers = {
  Query: {
    ...userQueries,
    ...originQueries,
    ...postQueries,
    ...treeQueries,
    ...voteQueries,
    ...soilQueries
  },
  Mutation: {
    ...userMutations,
    ...originMutations,
    ...postMutations,
    ...treeMutations,
    ...voteMutations,
    ...soilMutations,
    ...miscMutations
  },
  upload: GraphQLUpload
};

export default resolvers;
