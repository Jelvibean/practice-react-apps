type FlightData = {
  id: number;
  pricePerSeat: string;
  seats: number;
  availableAt: string;
};

async function getFlights() {
  const response = await fetch(
    "https://67d98a2700348dd3e2ab8ad8.mockapi.io/jets/jetStore",
    { cache: "force-cache", next: { revalidate: 60 } }
  );
  if (!response.ok) throw new Error("Failed to fetch flights");
  return response.json() as Promise<FlightData[]>;
}

export default async function FlightsServerCachePage() {
  const flights = await getFlights();

  return (
    <div>
      <h1>Flights with Server-side Cache</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.availableAt}: ${Number(flight.pricePerSeat) * flight.seats}
          </li>
        ))}
      </ul>
    </div>
  );
}
