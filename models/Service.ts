import {IService, Section} from '@/types';
import mongoose from 'mongoose';

const {Schema} = mongoose;

const subServiceSchema = new Schema<Section>({
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

const serviceSchema = new Schema<IService>(
    {
        title: {
            type: String,
            trim: true,
            required: [true, 'Please add a title'],
        },
        shortTag: {
            type: String,
            trim: true,
            required: [true, 'Please add a short tag'],
        },

        description: {
            type: String,
            required: [true, 'Please add a description'],
        },

        shortDescription: {
            type: String,
            trim: true,
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
    },
    {
        timestamps: true,
    }
);

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
