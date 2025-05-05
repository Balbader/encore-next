import { api } from 'encore.dev/api';
import { getAuthData } from '~encore/auth';
import log from 'encore.dev/log';

export const getDashboardData = api(
	{
		expose: true,
		auth: true,
		method: 'GET',
		path: '/admin',
	},
	async (): Promise<DashboardData> => {
		const userID = getAuthData()!.userID;
		log.info('Data requested by user', { userID });

		return { value: 'Admin stuff' };
	},
);

interface DashboardData {
	value: string;
}
