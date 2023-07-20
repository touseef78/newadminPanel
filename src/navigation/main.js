export default {
  header: "Main",
  children: [
    {
      id: "widgets",
      title: "Widgets",
      icon: "Curved-Graph",
      children: [
        {
          id: "charts",
          title: "Add Drivers",
          navLink: "/main/widgets/charts",
        },
        {
          id: "illustration-set",
          title: "List Drivers",
          navLink: "/main/widgets/illustration-set",
        },
        {
          id: "crypto-icons",
          title: "Crypto Icons",
          navLink: "/main/widgets/crypto-icons",
        },
        {
          id: "user-icons",
          title: "User Icons",
          navLink: "/main/widgets/user-icons",
        },
        {
          id: "flags",
          title: "Flags",
          navLink: "/main/widgets/flags",
        },
      ],
    },
    {
      id: "layouts",
      title: "Layouts",
      icon: "Curved-Document",
      children: [
        {
          id: "divider",
          title: "Divider",
          navLink: "/main/layouts/divider",
        },
        {
          id: "grid-system",
          title: "Grid System",
          navLink: "/main/layouts/grid-system",
        },
        {
          id: "page-layouts",
          title: "Page Layouts",
          children: [
            {
              id: "boxed-layout",
              title: "Boxed Layout",
              navLink: "/main/layouts/page-layouts/boxed-layout",
            },
            {
              id: "vertical-layout",
              title: "Vertical Layout",
              navLink: "/main/layouts/page-layouts/vertical-layout",
            },
            {
              id: "horizontal-layout",
              title: "Horizontal Layout",
              navLink: "/main/layouts/page-layouts/horizontal-layout",
            },
            {
              id: "full-layout",
              title: "Full Layout",
              navLink: "/main/layouts/page-layouts/full-layout",
            },
          ],
        },
      ],
    },
  ]
}