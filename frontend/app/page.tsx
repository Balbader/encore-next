import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Home() {
	const people = await fetch('http://localhost:4000/swapi/getPeople');
	const planets = await fetch('http://localhost:4000/swapi/getPlanets');

	console.log('people', people);
	console.log('planets', planets);

	return (
		<>
			<div className="flex flex-col gap-4">
				<div className="flex flex-row gap-4 text-green-500">
					<h1 className="text-2xl font-bold">People</h1>
					{people.results.map((person: any) => (
						<Card key={person.id}>
							<CardHeader>
								<CardTitle>{person.name}</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>

				<div className="flex flex-row gap-4 text-blue-500">
					<h1 className="text-2xl font-bold">Planets</h1>
					{planets.results.map((planet: any) => (
						<Card key={planet.id}>
							<CardHeader>
								<CardTitle>{planet.name}</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</>
	);
}
