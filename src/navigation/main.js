export default {
  // header: "Main",
  children: [


    {
      id: "/dashboard",
      title: "Dashboard",
      icon: "Curved-Graph",
      navLink: "/dashboard",
    },
    

    {
      id: "Vehicle",
      title: "Vehicle",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Vehicle",
          title: "View Vehicle",
          navLink: "/vehicle",
        },
      ],
    },


    {
      id: "Registration",
      title: "Reguest",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Registration",
          title: "View Reguest",
          navLink: "/registration",
        },
      ],
    },

      
   

 // uber and bolt data
      // {
      //   id: "uber",
      //   title: "Import Data",
      //   navLink: "/uberdata",
      //   icon: "Curved-Wallet",
      // },


      // {
      //   id: "bolt",
      //   title: "Bolt Data",
      //   navLink: "/boltdata",
      //   icon: "Curved-Wallet",

      // },

  ]
}