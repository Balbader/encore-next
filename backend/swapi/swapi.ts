import { api } from 'encore.dev/api';

export const getPeople = api(
	{
		method: 'GET',
		path: '/swapi/people',
		expose: true,
		auth: false,
	},
	async () => {
		const response = await fetch('https://swapi.tech/api/people/');
		const data = await response.json();
		return data;
	},
);

export const getPlanets = api(
	{
		method: 'GET',
		path: '/swapi/planets',
		expose: true,
		auth: false,
	},
	async () => {
		const response = await fetch('https://swapi.tech/api/planets/');
		const data = await response.json();
		return data;
	},
);
