// app/fetch-flights/page.tsx
import FetchFlights from "../../../src/components/FetchFlights";

type FlightData2 = {
  id: number;
  pricePerSeat: string;
  seats: number;
  availableAt: string;
};

// Server side fetch
async function getFlights() {
  const response = await fetch(
    "https://67d98a2700348dd3e2ab8ad8.mockapi.io/jets/jetStore",
    { cache: "no-store" } // prevent cache if you want fresh each time
  );
  const data = await response.json();
  return data;
}

// This is still a server component at first
export default async function FetchFlightsPage2() {
  const initialFlights: FlightData2[] = await getFlights();

  return <FetchFlights initialData={initialFlights} />;
}
