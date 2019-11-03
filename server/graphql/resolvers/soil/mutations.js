import {Soil} from '../../../database/models';

const soilMutations = {
  soil: async (_, args) => {
    const soil = new Soil({...args.soil});
    soil.trees = [args.soil.tree];
    const treeId = soil.tree;
    await Promise.all([
      Soil.updateMany({_id: soil.id}, {$addToSet: {trees: treeId}}),
      soil.save()
    ]);

    try {
      return await Soil.findById(soil.id).populate('trees');
    } catch (e) {
      return e;
    }
  }
};

export default soilMutations;
