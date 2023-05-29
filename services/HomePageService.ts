import connectDB from '@/lib/db.config';
import Service from '@/models/Service';
import Solution from '@/models/Solution';
import Team from '@/models/Team';
import { IService, ISolution } from '@/types';
import { ITeam } from '@/types/Team';

export async function GetServicesForHome(): Promise<{
  message: string;
  code: number;
  data: IService[];
}> {
  try {
    // Database Connection
    await connectDB();

    // Database Data
    const data = await Service.find<IService>({ showOnHome: true });

    // Return Data
    return {
      code: 200,
      message:
        data?.length > 0 ? data.length + ' Services Found' : 'No Data Found',
      data,
    };
  } catch (error: any) {
    return { code: 500, message: error.message as string, data: [] };
  }
}

export async function GetSolutionsForHome(): Promise<{
  message: string;
  code: number;
  data: ISolution[];
}> {
  try {
    // Database Connection
    await connectDB();

    // Database Data Fetch
    const data = await Solution.find<ISolution>({ showOnHome: true });

    // Return Data
    return {
      code: 200,
      message:
        data?.length > 0 ? data.length + ' Solutions Found' : 'No Data Found',
      data,
    };
  } catch (error: any) {
    return { code: 500, message: error.message as string, data: [] };
  }
}

export async function GetCoachesForHome(): Promise<{
  message: string;
  code: number;
  data: ITeam[];
}> {
  try {
    // Database Connection
    await connectDB();

    // Database Data Fetch
    const teams = await Team.find<ITeam>({ showOnHome: true });

    // Return Data
    return {
      code: 200,
      message:
        teams.length > 0
          ? teams.length + ' Team members found'
          : 'No Team member found',
      data: teams,
    };
  } catch (error: any) {
    return { code: 500, message: error.message as string, data: [] };
  }
}
