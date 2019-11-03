import {Schema, model} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SoilSchema = new Schema({
  name: {type: String, required: true, unique: true},
  trees: [{type: Schema.Types.ObjectId, ref: 'Tree'}]
});

SoilSchema.plugin(uniqueValidator);
export default model('Soil', SoilSchema);
