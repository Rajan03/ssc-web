import connectDB from '@/lib/db.config';
import Service from '@/models/Service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;
    console.log(method);

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
 * @description Get Services data from database via Service model
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (!id) {
        res.status(400).json({ message: 'Missing id' });
        return;
    }

    try {
        // Database Connection
        await connectDB();

        // Database Data
        const data = await Service.findById(id);

        if (!data) {
            res.status(404).json({ message: 'Service Not Found!' });
            return;
        }

        // Return Data
        res.status(200).json({
            status: 'success',
            message: ' Service Found!',
            data,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

