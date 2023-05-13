import { NextApiRequest, NextApiResponse } from 'next';

// get,
// async await, try catch

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

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // database
    // await database connection
    // await database data fetch
    // return data
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
