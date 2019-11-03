import {Origin} from '../../../database/models';

const originMutations = {
  origin: async (_, args) => {
    const origin = new Origin({...args.origin});

    try {
      await origin.save();
      return origin;
    } catch (e) {
      return e;
    }
  }
};

export default originMutations;
