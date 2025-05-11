import { api } from 'encore.dev/api';

interface SWAPIResponse<T> {
	message: string;
	total_records: number;
	total_pages: number;
	previous: string | null;
	next: string | null;
	results: T[];
	apiVersion: string;
	timestamp: string;
	support: {
		contact: string;
		donate: string;
		partnerDiscounts: Record<string, unknown>;
	};
	social: {
		discord: string;
		reddit: string;
		github: string;
	};
}

interface Person {
	uid: string;
	name: string;
	url: string;
}

interface Planet {
	uid: string;
	name: string;
	url: string;
}

export const getPeople = api(
	{
		method: 'GET',
		path: '/swapi/people',
	},
	async (): Promise<SWAPIResponse<Person>> => {
		const response: Response = await fetch('https://swapi.tech/api/people/');
		const data: SWAPIResponse<Person> = await response.json();
		return data;
	},
);

export const getPlanets = api(
	{
		method: 'GET',
		path: '/swapi/planets',
	},
	async (): Promise<SWAPIResponse<Planet>> => {
		const response: Response = await fetch('https://swapi.tech/api/planets/');
		const data: SWAPIResponse<Planet> = await response.json();
		return data;
	},
);
