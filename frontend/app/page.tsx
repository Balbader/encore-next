import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Home() {
	const people = await fetch('https://swapi.tech/api/people/');
	const planets = await fetch('https://swapi.tech/api/planets/');

	const peopleData = await people.json();
	const planetsData = await planets.json();

	console.log(peopleData);
	console.log(planetsData);

	return (
		<>
			<div className="flex flex-col gap-4 text-green-500">
				<h1 className="text-2xl font-bold">People</h1>
				{peopleData.results.map((person: any) => (
					<Card key={person.id}>
						<CardHeader>
							<CardTitle>{person.name}</CardTitle>
						</CardHeader>
					</Card>
				))}
				<h1 className="text-2xl font-bold text-blue-500 mt-10">Planets</h1>
				{planetsData.results.map((planet: any) => (
					<Card key={planet.id}>
						<CardHeader>
							<CardTitle>{planet.name}</CardTitle>
						</CardHeader>
					</Card>
				))}
			</div>
		</>
	);
}
