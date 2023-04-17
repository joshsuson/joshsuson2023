import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const getAllWork = async () => {
  const response = await client.getEntries({
    content_type: "work",
  });

  return response.items;
};

export default getAllWork;
