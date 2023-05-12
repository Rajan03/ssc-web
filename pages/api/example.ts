import connectDB from '@/lib/db.config';
import { NextApiRequest, NextApiResponse } from 'next';

/// Remains Same
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
 * @description Get HOME page data from sanity studion via sanityGet helper function
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Database Connection
    await connectDB();

    // Database Data Fetch
    // Change Code Here....
    // Return Data
    res.status(200).json({
      status: 'success',
      message: 'Hello from API',
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
