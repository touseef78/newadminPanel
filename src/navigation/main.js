export default {
  header: "Main",
  children: [
    {
      id: "drivers",
      title: "Drivers",
      icon: "Curved-Work",
      children: [
        {
          id: "drivers",
          title: "Add Drivers",
          navLink: "/drivers/add",
        },
        {
          id: "drivers",
          title: "List Drivers",
          navLink: "/drivers/list",
        },
        // {
        //   id: "crypto-icons",
        //   title: "Crypto Icons",
        //   navLink: "/main/widgets/crypto-icons",
        // },
        // {
        //   id: "user-icons",
        //   title: "User Icons",
        //   navLink: "/main/widgets/user-icons",
        // },
        // {
        //   id: "flags",
        //   title: "Flags",
        //   navLink: "/main/widgets/flags",
        // },
      ],
    },
    // {
    //   id: "Car",
    //   title: "Car",
    //   icon: "Curved-Document",
    //   children: [
    //     {
    //       id: "Car",
    //       title: "Add Car",
    //       navLink: "/cars/add",
    //     },
    //     {
    //       id: "Car",
    //       title: "Car List",
    //       navLink: "/cars/List",
    //     },
    //   ],
    // },
     {
      id: "vehicle",
      title: "Vehicle",
      icon: "Curved-Document",
      children: [
        {
          id: "vehicle",
          title: "Add Vehicle",
          navLink: "/vehicle/addVehicle",
        },
        {
          id: "vehicle",
          title: "List Vehicle",
          navLink: "/vehicle/listVehicle",
        },
      ],
    },
      
  ]
}