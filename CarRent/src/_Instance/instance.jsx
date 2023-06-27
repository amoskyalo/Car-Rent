import { createClient } from "@sanity/client";

const today = new Date()
  .toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
  })
  .split("/");

const formatedDate = `${today[2]}-${today[0]}-${today[1]}`;

export const client = createClient({
  projectId: "fs7m75qq",
  dataset: "production",
  useCdn: true,
  apiVersion: formatedDate,
});

export const handleGetImageUrl = (image) => {
  if (image) {
    const projectId = "fs7m75qq";
    const imageRef = image?.asset?._ref.split(/-/g);
    return `https://cdn.sanity.io/images/${projectId}/production/${imageRef[1]}-${imageRef[2]}.${imageRef[3]}`;
  }
};
