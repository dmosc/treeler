import {Schema, model} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const OriginSchema = new Schema({
  name: {type: String, required: true},
  lng: {type: Number, required: true},
  lat: {type: Number, required: true},
  address: {type: String, required: true, unique: true}
});

OriginSchema.plugin(uniqueValidator);
export default model('Origin', OriginSchema);
