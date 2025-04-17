import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "7lfa7nsb",
  dataset: "production",
  apiVersion: "2023-03-27",
  useCdn: true
});