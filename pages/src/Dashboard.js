import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import Head from "next/head";
export default () => (
  <Card
    sx={{
      marginTop: "20px",
    }}
  >
    <Head>
      <title>Dashboard</title>
    </Head>
    <Title title="Dashboard" />
    <CardContent>Welcome to Dashboard</CardContent>
  </Card>
);
