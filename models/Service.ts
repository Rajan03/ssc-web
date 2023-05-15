import mongoose from 'mongoose';
const { Schema } = mongoose;

const subServiceSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  list: {
    type: [String],
  },
});

const serviceSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title'],
  },

  description: {
    type: String,
    required: [true, 'Please add a description'],
  },

  image: {
    type: String,
    required: [true, 'Please add an image'],
  },

  sections: {
    type: [subServiceSchema],
    required: [true, 'Please add at least one section'],
  },

  showOnHome: {
    type: Boolean,
    default: false,
  },
});

serviceSchema.pre('save', async function (next) {
  const service = this as any;
  service.sections = service.sections.map((section: any) => {
    section.list = section.list.map((item: any) => item.trim());
    return section;
  });
  next();
});

export default mongoose.models.Service ||
  mongoose.model('Service', serviceSchema);
