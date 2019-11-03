import {Schema, model} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const PostSchema = new Schema({
  image: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  origin: {type: Schema.Types.ObjectId, ref: 'Origin', required: true},
  tree: {type: Schema.Types.ObjectId, ref: 'Tree', required: true},
  upvotes: [{type: Schema.Types.ObjectId, ref: 'Vote', unique: true}],
  downvotes: [{type: Schema.Types.ObjectId, ref: 'Vote', unique: true}]
});

PostSchema.plugin(uniqueValidator);
export default model('Post', PostSchema);
