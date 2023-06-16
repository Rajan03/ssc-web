import connectDB from '@/lib/db.config';
import {NextApiRequest, NextApiResponse} from 'next';
import Resource from "@/models/Resource";
import {IResource} from "@/types";

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
        const data = await Resource
            .find<IResource>({active: true})
            .populate('category')
            .select(['-reviews', '-__v', '-active'])
            .sort({createdAt: -1});


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
    if (req.body?.allowAccess !== process.env.NEXY_PUBLIC_ALLOW_ACCESS) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const data = await Resource.create<IResource>({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            shortDescription: req.body.shortDescription,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            active: req.body.active,
            included: req.body.included,
        });

        // Return Data
        res.status(201).json({
            status: 'success',
            message: 'Resource Created',
            data,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};
