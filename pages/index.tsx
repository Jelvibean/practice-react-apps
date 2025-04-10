// pages/index.tsx

import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div>
        Main content will go here later.{" "}
        <Link href={`/fetchtodo`}>Todo Demo</Link>
      </div>
    </>
  );
};

export default HomePage;
