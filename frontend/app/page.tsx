import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function fetchJson(url: string) {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
	}
	return res.json();
}

export default async function Home() {
	const people = await fetch('http://localhost:4000/swapi/getPeople');
	const planets = await fetch('http://localhost:4000/swapi/getPlanets');

	const peopleData = await people.json();
	const planetsData = await planets.json();

	console.log(peopleData);
	console.log(planetsData);

	return (
		<>
			<div className="flex flex-col gap-4">
				<div className="flex flex-row gap-4 text-green-500">
					<h1 className="text-2xl font-bold">People</h1>
					{Array.isArray(peopleData?.results) ? (
						peopleData.results.map((person: any) => (
							<Card key={person.id}>
								<CardHeader>
									<CardTitle>{person.name}</CardTitle>
								</CardHeader>
							</Card>
						))
					) : (
						<div>No people found.</div>
					)}
				</div>

				<div className="flex flex-row gap-4 text-blue-500">
					<h1 className="text-2xl font-bold">Planets</h1>
					{Array.isArray(planetsData?.results) ? (
						planetsData.results.map((planet: any) => (
							<Card key={planet.id}>
								<CardHeader>
									<CardTitle>{planet.name}</CardTitle>
								</CardHeader>
							</Card>
						))
					) : (
						<div>No planets found.</div>
					)}
				</div>
			</div>
		</>
	);
}
