import { ITeam } from '@/types';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const teamSchema = new Schema<ITeam>({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  showOnHome: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  experience: [
    {
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      duration: {
        type: String,
        required: true,
      },
    },
  ],
  skills: [
    {
      name: {
        type: String,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
      },
    },
  ],
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Team || mongoose.model('Team', teamSchema);
