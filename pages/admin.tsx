import * as React from "react";

import type { NextPage } from "next";

import dynamic from "next/dynamic";

const App = dynamic(() => import("./src/App"), { ssr: false });

const Admin: NextPage = () => {
  return (
    <React.StrictMode>
    <App />
  </React.StrictMode>
  )
};

export default Admin;