import connectDB from '@/lib/db.config';
import Service from '@/models/Service';
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
 * @description Get Services data from database via Service model
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Database Connection
    await connectDB();

    // Database Data
    const data = await Service.find({ showOnHome: true });

    // Return Data
    res.status(200).json({
      status: 'success',
      message:
        data?.length > 0 ? data.length + ' Services Found' : 'No Data Found',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * POST method
 * @param req
 * @param res
 * @description Create a new Service in database via Service model
 * @returns
 * @todo Add validation
 * @todo Add authentication
 * @todo Add authorization
 * @todo Add error handling
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body?.allowAccess !== process.env.NEXY_PUBLIC_ALLOW_ACCESS) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Database Connection
    await connectDB();

    // Database Data
    const data = await Service.create(req.body);

    // Return Data
    res.status(200).json({
      status: 'success',
      message: 'Service Created',
      data,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
