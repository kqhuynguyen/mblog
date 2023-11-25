import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem: () => {
          return {
            title: "Untitled",
            createdAt: Date.now()
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: "Created at",
            name: "createdAt",
            type: "datetime",
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            label: 'Author',
            name: 'author',
            type: 'reference',
            collections: ['author'], 
          },
        ],
      },
      {
        name: "author",
        label: "Author",
        path: "content/authors",
        fields: [
          {
            type: "string",
            name: "first_name",
            label: "First Name",
            required: true, 
          },
          {
            type: "string",
            name: "last_name",
            label: "Last Name",
            required: true,
          },
          {
            type: "string",
            name: "avatar",
            label: "Avatar",
            required: true,
          }
        ]
      }
    ],
  },
});
