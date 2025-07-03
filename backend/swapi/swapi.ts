import { api } from 'encore.dev/api';

// Generic response structure from the SWAPI.tech API
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

// Basic person data from Star Wars universe
interface Person {
	uid: string;
	name: string;
	url: string;
}

// Basic planet data from Star Wars universe
interface Planet {
	uid: string;
	name: string;
	url: string;
}

// API endpoint to fetch Star Wars characters
export const getPeople = api(
	{
		method: 'GET',
		path: '/swapi/people',
	},
	async (): Promise<SWAPIResponse<Person>> => {
		// Fetch people data from the external SWAPI.tech API
		const response: Response = await fetch(
			'https://swapi.tech/api/people/',
		);
		const data: SWAPIResponse<Person> = await response.json();
		return data;
	},
);

// API endpoint to fetch Star Wars planets
export const getPlanets = api(
	{
		method: 'GET',
		path: '/swapi/planets',
	},
	async (): Promise<SWAPIResponse<Planet>> => {
		// Fetch planets data from the external SWAPI.tech API
		const response: Response = await fetch(
			'https://swapi.tech/api/planets/',
		);
		const data: SWAPIResponse<Planet> = await response.json();
		return data;
	},
);
