import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ky, { KyResponse } from 'ky';

export default async function Home() {
	const people = await ky.get('https://www.swapi.tech/api/people').json();
	const planets = await ky.get('https://www.swapi.tech/api/planets').json();


	return (
		<>
			<div className="flex flex-col gap-4">
				<div className="flex flex-row gap-4 text-green-500">
					<h1 className="text-2xl font-bold">People</h1>
					{people?.results?.map((person: any) => (
						<Card key={person.id}>
							<CardHeader>
								<CardTitle>{person.name}</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>

				<div className="flex flex-row gap-4 text-blue-500">
					<h1 className="text-2xl font-bold">Planets</h1>
					{planets?.results?.map((planet: any) => (
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
