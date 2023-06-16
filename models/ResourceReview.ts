import mongoose from "mongoose";
import {IResourceReview} from "@/types";

const {Schema} = mongoose;

const ResourceReviewSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please add a name"],
    },
    review: {
        type: String,
        trim: true,
        required: [true, "Please add a review"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "Please add a rating between 1 and 5"],
    },
    resource: {
        type: Schema.Types.ObjectId,
        ref: "Resource",
    }
}, {
    timestamps: true,
});

export default mongoose.models.ResourceReviewModel || mongoose.model<IResourceReview>("ResourceReviewModel", ResourceReviewSchema);
