import connectDB from '@/lib/db.config';
import {NextApiRequest, NextApiResponse} from 'next';
import ResourceCategory from "@/models/ResourceCategory";
import {IResourceCategory} from "@/types";

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
        case 'PUT':
            await UPDATE(req, res);
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
 * @description Get Resource category data
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const resourcesCategory = await ResourceCategory.find<IResourceCategory>({active: true});

        // Return Data
        res.status(200).json({
            message:
                resourcesCategory.length > 0
                    ? resourcesCategory.length + ' Resources Categories found'
                    : 'No Resource found',
            data: resourcesCategory,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};

/**
 * POST method
 * @param req
 * @param res
 * @description Create Resource category data
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.body?.allowAccess !== process.env.NEXY_PUBLIC_ALLOW_ACCESS) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const resourcesCategory = await ResourceCategory.create<IResourceCategory>({
            title: req.body.title,
            slug: req.body.slug,
            active: req.body.active,
        });

        // Return Data
        res.status(200).json({
            message: 'Resource Category created successfully',
            data: resourcesCategory,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};

export async function UPDATE(req: NextApiRequest, res: NextApiResponse) {
    if (req.body?.allowAccess !== process.env.NEXY_PUBLIC_ALLOW_ACCESS) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Database Connection
        await connectDB();

        const {id, ...data} = req.body;

        // Database Data Fetch
        const category = await ResourceCategory.findByIdAndUpdate<IResourceCategory>(
            id,
            data,
            {new: true}
        );

        // Return Data
        res.status(200).json({
            message: 'Resource Category updated successfully',
            data: category,
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}
