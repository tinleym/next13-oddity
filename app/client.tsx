"use client";

const IS_SERVER = typeof document === typeof undefined;

function ExampleClient() {
  if (IS_SERVER) {
    console.log("IS SERVER (NO DOCUMENT)");
    import("next/headers").then((headers) => {
      console.log("server cookies fn", headers.cookies);
      console.log("server cookies fn result", headers.cookies());
    });
  } else {
    console.log("IS CLIENT (HAS DOCUMENT)");
  }

  return <div>nothing to see here; check server console for error</div>;
}

export default ExampleClient;
