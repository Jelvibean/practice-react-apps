// lib/fetchJets.ts
export const fetchJets = async () => {
  const res = await fetch(
    "https://67d98a2700348dd3e2ab8ad8.mockapi.io/jets/jetStore"
  );
  if (!res.ok) throw new Error("Failed to fetch jets");
  return res.json();
};
