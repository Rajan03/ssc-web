import { ISolution } from '@/types';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const solutionSchema = new Schema<ISolution>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    active: {
      type: Boolean,
      default: true,
    },
    showOnHome: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CompanySolution ||
  mongoose.model('CompanySolution', solutionSchema);
