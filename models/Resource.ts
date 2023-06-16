import mongoose from "mongoose";
import {IResource} from "@/types";

const {Schema} = mongoose;

const resourceSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Please add a title"],
    },
    shortDescription: {
        type: String,
        trim: true,
        required: [true, "Please add a short description"],
    },
    description: {
        type: String,
        trim: true,
        required: [true, "Please add a description"],
    },
    image: {
        type: String,
        trim: true,
        required: [true, "Please add an image"],
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
    },
    included: {
        type: [String],
        required: [true, "Please add included items"],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "ResourceCategory",
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "ResourceReviewModel",
    }],

    slug: {
        type: String,
        trim: true,
        required: [true, "Please add a slug"],
    },
    active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

resourceSchema.pre("save", function (next) {
    console.log("Slugify ran", this.title)
    this.slug = this.title.toLowerCase().split(" ").join("-");
    next();
});

resourceSchema.pre("deleteOne", {document: true, query: false}, async function (next) {
    await mongoose.models.ResourceReview.deleteMany({resource: this._id});
    next();
});

export default mongoose.models.Resource ||
mongoose.model<IResource>("Resource", resourceSchema);
