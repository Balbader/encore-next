import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ky from "ky";

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

export default async function Home() {
  const people: SWAPIResponse<Person> = await ky
    .get("http://localhost:4000/swapi/people")
    .json();
  const planets: SWAPIResponse<Planet> = await ky
    .get("http://localhost:4000/swapi/planets")
    .json();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 text-green-500">
          <h1 className="text-2xl font-bold">People</h1>
          {people.results.map((person: Person) => (
            <Card key={person.uid}>
              <CardHeader>
                <CardTitle>{person.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="flex flex-row gap-4 text-blue-500">
          <h1 className="text-2xl font-bold">Planets</h1>
          {planets.results.map((planet: Planet) => (
            <Card key={planet.uid}>
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
