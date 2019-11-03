import {Soil} from '../../../database/models';
import {ApolloError} from 'apollo-server-core';

const soilQueries = {
  soil: async (_, args) => {
    const {id} = args;
    const soil = await Soil.findById(id).populate('trees');

    if (!soil) throw new ApolloError('Soil not found');
    else return soil;
  }
};

export default soilQueries;
