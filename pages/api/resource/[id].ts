import connectDB from '@/lib/db.config';
import {NextApiRequest, NextApiResponse} from 'next';
import Resource from "@/models/Resource";
import {IResource} from "@/types";
import ResourceReview from "@/models/ResourceReview";

/// Remains Same
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req;

    switch (method) {
        case 'GET':
            await GET(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

/**
 * GET method
 * @param req
 * @param res
 * @description Get All Resources
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const data = await Resource
            .findById<IResource>(req.query.id)
            .populate('category')
            .populate('reviews')
            .select(['-__v', '-active'])
            .sort({createdAt: -1});

        if (!data) {
            return res.status(404).json({
                status: 'error',
                message: 'Resource Not Found',
            });
        }

        data.reviews = await ResourceReview
            .find({resource: req.query.id})
            .select(['-__v', '-resource', '-_id']);

        // Return Data
        res.status(200).json({
            status: 'success',
            message: 'Resources Found',
            data,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};

