import mongoose from 'mongoose';
const { Schema } = mongoose;

const coachSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Coach || mongoose.model('Coach', coachSchema);
