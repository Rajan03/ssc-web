import { IPlanFeature, IPricing } from '@/types';
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const planFeatureSchema = new Schema<IPlanFeature>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isAvailable: { type: Boolean, required: true },
});

const planSchema = new Schema<IPricing>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  features: [planFeatureSchema],
  isPopular: { type: Boolean, required: true },
  isRecommended: { type: Boolean, required: true },
  offers: [{ type: Schema.Types.ObjectId, ref: 'PlanOffer' }],
});

planSchema.pre('save', async function (next) {
  const plan = this as any;
  plan.features = plan.features.map((feature: any) => {
    feature.isAvailable = true;
    return feature;
  });
  next();
});

export default mongoose.models.Plan || model<IPricing>('Plan', planSchema);
