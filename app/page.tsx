import { cookies } from "next/headers";

import ExampleClient from "./client";

async function RootPage() {
  const nextSessionCookie = cookies().getAll();

  return (
    <div>
      <ExampleClient />
    </div>
  );
}

export default RootPage;
