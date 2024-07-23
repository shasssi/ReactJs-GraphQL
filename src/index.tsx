import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";
import client from "./graphql";

const rootElement = document.getElementById("root");

// @ts-ignore
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
