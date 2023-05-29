import connectDB from '@/lib/db.config';
import Plan from '@/models/PricePlan';
import { NextApiRequest, NextApiResponse } from 'next';

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
 * @description Get Pricing Plans
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Database Connection
    await connectDB();

    // Database Data Fetch
    const plans = Plan.find({});

    // Return Data
    res.status(200).json({
      status: 'success',
      message: 'Hello from API',
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
