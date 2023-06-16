import connectDB from '@/lib/db.config';
import Service from '@/models/Service';
import Solution from '@/models/Solution';
import Team from '@/models/Team';
import Resource from '@/models/Resource';
import ResourceCategory from "@/models/ResourceCategory";
import {IResource, IResourceCategory, IService, ISolution, ITeam} from '@/types';

export async function GetServicesForHome(): Promise<{
    message: string;
    code: number;
    data: IService[];
}> {
    try {
        // Database Connection
        await connectDB();

        // Database Data
        const data = await Service.find<IService>({showOnHome: true});

        // Return Data
        return {
            code: 200,
            message:
                data?.length > 0 ? data.length + ' Services Found' : 'No Data Found',
            data,
        };
    } catch (error: any) {
        return {code: 500, message: error.message as string, data: []};
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
        const data = await Solution.find<ISolution>({showOnHome: true});

        // Return Data
        return {
            code: 200,
            message:
                data?.length > 0 ? data.length + ' Solutions Found' : 'No Data Found',
            data,
        };
    } catch (error: any) {
        return {code: 500, message: error.message as string, data: []};
    }
}

export async function GetCoachesData(forHome: boolean): Promise<{
    message: string;
    code: number;
    data: ITeam[];
}> {
    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const filter = forHome ? {showOnHome: true} : {};
        const teams = await Team.find<ITeam>(filter);

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
        return {code: 500, message: error.message as string, data: []};
    }
}

export async function GetResources(): Promise<{
    message: string;
    code: number;
    data: IResource[];
}> {
try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const resources = await Resource
            .find<IResource>({active: true})
            .select(['-reviews', '-__v', '-active'])
            .sort({createdAt: -1});


        // Return Data
        return {
            code: 200,
            message:
                resources.length > 0
                    ? resources.length + ' Resources found'
                    : 'No Resource found',
            data: resources,
        };
    } catch (error: any) {
        return {code: 500, message: error.message as string, data: []};
    }
}

export async function GetResourcesCategory(): Promise<{
    message: string;
    code: number;
    data: IResourceCategory[];
}> {
    try {
        // Database Connection
        await connectDB();

        // Database Data Fetch
        const resourcesCategory = await ResourceCategory.find<IResourceCategory>({active: true});

        // Return Data
        return {
            code: 200,
            message:
                resourcesCategory.length > 0
                    ? resourcesCategory.length + ' Resources Categories found'
                    : 'No Resource found',
            data: resourcesCategory,
        };
    } catch (error: any) {
        return {code: 500, message: error.message as string, data: []};
    }
}
