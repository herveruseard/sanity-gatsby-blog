export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b77012bba697070c9416aa",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mq2shwxx",
                  apiId: "49e3f555-22f6-4084-a9ab-28b15439e5be",
                },
                {
                  buildHookId: "60b77013d18eb3f09b67c95c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uyoxggqq",
                  apiId: "6402175b-e90d-48d5-9867-d13658434732",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/herveruseard/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uyoxggqq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
