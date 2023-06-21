import {NextApiRequest, NextApiResponse} from "next";
import connectDB from "@/lib/db.config";
import Team from "@/models/Team";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

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
 * @description Get all Team members
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

        // Database Data Fetch
        const team = await Team.findById(id);

        if (!team) {
            res.status(404).json({ message: 'Team member not found' });
            return;
        }

        // Return Data
        res.status(200).json({
            status: 'success',
            message:' Team members found',
            coach: team,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
