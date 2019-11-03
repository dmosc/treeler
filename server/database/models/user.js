import {Schema, model} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true, index: {unique: true}},
  email: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  profileImage: {type: String, required: false},
  active: {type: Boolean, required: true, default: true},
  posts: [{type: Schema.Types.ObjectId, ref: 'Post', default: []}],
  // events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
  // badges: [{type: Schema.Types.ObjectId, ref: 'Badge'}],
  points: {type: Number, required: true, default: 0}
});

UserSchema.plugin(uniqueValidator);
export default model('User', UserSchema);
