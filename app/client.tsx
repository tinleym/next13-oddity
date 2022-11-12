"use client";

// import { cookies } from "next/headers";

const IS_SERVER = typeof document === typeof undefined;

function ExampleClient() {
  if (IS_SERVER) {
    console.log("IS SERVER");
    import("next/headers").then((headers) => {
      console.log("server cookies fn", headers.cookies);
      console.log("server cookies fn result", headers.cookies());
    });
  } else {
    console.log("IS CLIENT");
    console.log("client cookies", document.cookie);
  }

  return <div>nothing to see here; check server console for error</div>;
}

export default ExampleClient;
