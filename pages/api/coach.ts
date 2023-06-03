import connectDB from '@/lib/db.config';
import Team from '@/models/Team';
import { ITeam } from '@/types';
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
 * @description Get all Team members
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Database Connection
    await connectDB();

    // Database Data Fetch
    const teams = await Team.find({ showOnHome: true });

    // Return Data
    res.status(200).json({
      status: 'success',
      message:
        teams.length > 0
          ? teams.length + ' Team members found'
          : 'No Team member found',
      coaches: teams,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * POST method
 * @param req
 * @param res
 * @description Add new Team member
 * @todo Add data validation
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.body?.allowAccess !== process.env.NEXY_PUBLIC_ALLOW_ACCESS) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.body.name === undefined || req.body.name === null) {
      res.status(500).json({ message: 'Name is required' });
      return;
    }

    if (req.body.position === undefined || req.body.position === null) {
      res.status(500).json({ message: 'Position is required' });
      return;
    }

    if (req.body.description === undefined || req.body.description === null) {
      res.status(500).json({ message: 'Description is required' });
      return;
    }

    if (req.body.email === undefined || req.body.email === null) {
      res.status(500).json({ message: 'Email is required' });
      return;
    }

    if (req.body.location === undefined || req.body.location === null) {
      res.status(500).json({ message: 'Location is required' });
      return;
    }

    if (req.body.experience === undefined || req.body.experience === null) {
      res.status(500).json({ message: 'Experience is required' });
      return;
    }

    if (req.body.skills === undefined || req.body.skills === null) {
      res.status(500).json({ message: 'Skills is required' });
      return;
    }

    // Database Connection
    await connectDB();

    // Database Data Fetch
    const newTeam = await Team.create<ITeam>({
      name: req.body.name,
      position: req.body.position,
      description: req.body.description,
      image: req.body.image,
      email: req.body.email,
      phone: req.body.phone,
      linkedin: req.body.linkedin,
      location: req.body.location,
      experience: req.body.experience,
      skills: req.body.skills,
      showOnHome: req.body.showOnHome,
    });

    // Return Data
    res.status(201).json({
      status: 'success',
      message: 'Team created successfully',
      coach: newTeam,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
