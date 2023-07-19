export default {
  header: "Main",
  children: [
    {
      id: "dashboards",
      title: "Dashboards",
      icon: "Curved-Home",
      children: [
        {
          id: "analytics",
          title: "Analytics",
          navLink: "/main/dashboards/analytics",
        },
        {
          id: "dashboard-ecommerce",
          title: "Ecommerce",
          navLink: "/main/dashboards/ecommerce",
        },
      ],
    },
    {
      id: "widgets",
      title: "Widgets",
      icon: "Curved-Graph",
      children: [
        {
          id: "cards",
          title: "Yoda Card",
          children: [
            {
              id: "advance",
              title: "Advance",
              navLink: "/main/widgets/cards/advance",
            },
            {
              id: "statistics",
              title: "Statistics",
              navLink: "/main/widgets/cards/statistics",
            },
            {
              id: "widgets-analytics",
              title: "Analytics",
              navLink: "/main/widgets/cards/analytics",
            },
          ],
        },
        {
          id: "charts",
          title: "Charts",
          navLink: "/main/widgets/charts",
        },
        {
          id: "illustration-set",
          title: "Illustration Set",
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