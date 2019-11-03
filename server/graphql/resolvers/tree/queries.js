import {Tree} from '../../../database/models';

const treeQueries = {
  tree: async (_, args) => {
    const {id} = args;
    const tree = await Tree.findById(id);
    const points = tree.treeType.length * 10;
    tree.points = points;

    try {
      await tree.save();
      return tree;
    } catch (e) {
      return null;
    }
  }
};

export default treeQueries;
