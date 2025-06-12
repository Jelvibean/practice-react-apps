// app/jets/page.tsx
"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchJets } from "../lib/fetchJets";

export default function JetsPage() {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isFetching, status } = useQuery({
    queryKey: ["jets"],
    queryFn: fetchJets,
    staleTime: 1000 * 60 * 5, // 5 mins
  });

  console.log("here I am", data);

  const handleDelete = async (id: string) => {
    await fetch(
      `https://67d98a2700348dd3e2ab8ad8.mockapi.io/jets/jetStore/${id}`,
      {
        method: "DELETE",
      }
    );

    // ⛔ Tell React Query the cache is old now
    queryClient.invalidateQueries({ queryKey: ["jets"] });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching jets</p>;
  if (status === "pending") return <p>You were successful</p>;

  return (
    <div>
      <h1>Jet Store</h1>
      <ul>
        {data.map((jet: any) => (
          <li key={jet.id}>
            {jet.jetName} – {jet.seats}
            <button
              onClick={() => handleDelete(jet.id)}
              className="ml-2 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
