import {Schema, model} from 'mongoose';
import trees from '../enums/trees';
import uniqueValidator from 'mongoose-unique-validator';

const TreeSchema = new Schema({
  image: {type: String, required: true},
  treeType: {type: String, enum: [...trees], required: true, unique: true},
  points: {type: Number, required: true}
});

TreeSchema.plugin(uniqueValidator);
export default model('Tree', TreeSchema);
