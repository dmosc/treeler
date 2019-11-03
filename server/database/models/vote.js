import {Schema, model} from 'mongoose';
import votes from '../enums/votes';

const VoteSchema = new Schema({
  post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  type: {type: String, enum: [...votes], required: true}
});

export default model('Vote', VoteSchema);
