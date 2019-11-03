import {Tree} from '../../../database/models';

const treeMutations = {
  tree: async (_, args) => {
    const tree = new Tree({...args.tree});
    const points = tree.treeType.length * 10;
    tree.points = points;

    try {
      await tree.save();
      console.log(tree);
      return tree;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
};

export default treeMutations;
