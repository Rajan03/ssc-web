import connectDB from '@/lib/db.config';
import Service from '@/models/Service';
import { Service as ServiceModel } from '@/types';

export async function GetServicesForHome(): Promise<{
  message: string;
  code: number;
  data: ServiceModel[];
}> {
  try {
    // Database Connection
    await connectDB();

    // Database Data
    const data = await Service.find<ServiceModel>({ showOnHome: true });

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
