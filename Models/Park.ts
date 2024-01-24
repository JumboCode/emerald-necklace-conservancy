import { Schema, model, models } from 'mongoose';

const parkModel = new Schema({
  Id: String,
  Preview: String,
  Description: String,
  History: {
  Images: [String],
  Text: [String]
  }

});

const parkModelSchema = models.Test || model('Test', parkModel);

export default parkModelSchema;