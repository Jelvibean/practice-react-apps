// app/fetch-flights/page.tsx
import { Description } from "../../../src/components/Description";
import FetchFlights from "../../../src/components/FetchFlights";
import { formatPageDescription } from "../../../utls/usefulFunction";

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

  const pageDetails = {
    pageDescription: (
      <>
        <p>
          This Component is called <strong>hybrid</strong> because it uses
          <strong> server-side </strong> and <strong>client-side</strong>{" "}
          capabilities to render. The fetch is made and data is available at
          render in this example. No use of <code>useEffect</code> in this case.
        </p>
        <p> Imagine you're at a restaurant:</p>
        <p>
          Client-side only (CSR): The waiter brings you an empty plate, and you
          cook everything yourself at the table.{" "}
        </p>
        <p>
          Server-side only (SSR): The kitchen cooks your meal and gives it to
          you, but it’s not customizable anymore.
        </p>
        <p>
          <strong>
            Hybrid: The kitchen gives you a pre-cooked base meal, but you can
            season, mix, or modify it right at your table.
          </strong>
        </p>
      </>
    ),
  };

  return (
    <>
      <Description callback={formatPageDescription} PageDetails={pageDetails} />
      <FetchFlights initialData={initialFlights} />
    </>
  );
}
