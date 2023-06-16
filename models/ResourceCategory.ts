import mongoose from "mongoose";
import {IResourceCategory} from "@/types";

const {Schema} = mongoose;

const ResourceCategorySchema = new Schema<IResourceCategory>({
    title: {
        type: String,
        trim: true,
        required: [true, "Please add a title"],
    },
    slug: {
        type: String,
        trim: true,
        required: [true, "Please add a slug"],
    },
    description: {
        type: String,
        trim: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

export default mongoose.models.ResourcesCategory ||
mongoose.model<IResourceCategory>("ResourcesCategory", ResourceCategorySchema);
