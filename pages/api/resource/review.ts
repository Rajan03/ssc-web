import connectDB from '@/lib/db.config';
import {NextApiRequest, NextApiResponse} from 'next';
import ResourceReview from "@/models/ResourceReview";
import {IResourceReview} from "@/types";

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
        case 'POST':
            await POST(req, res);
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
        const data = await ResourceReview.find({resource: req.query.id});

        // Return Data
        res.status(200).json({
            status: 'success',
            message: 'Resource Reviews Found',
            data,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};

/**
 * POST method
 * @param req
 * @param res
 * @description Create a Resource
 * @Todo Add Authentication
 * @Todo Add Validation
 * @Todo Add Authorization
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const data = await ResourceReview.create<IResourceReview>({
            name: req.body.name,
            review: req.body.review,
            rating: req.body.rating,
            resource: req.body.resource,
        });

        // Return Data
        res.status(201).json({
            status: 'success',
            message: 'Resource Review Created',
            data,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};
