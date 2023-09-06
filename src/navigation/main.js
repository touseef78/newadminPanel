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
      id: "drivers",
      title: "Drivers",
      icon: "Curved-AddUser",
      
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
      ],
    },

     {
      id: "vehicle",
      title: "Vehicle", 
      icon: "Curved-Wallet",
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
        //    {
        //   id: "Service",
        //   title: "Vehicle Service",
        //   navLink: "/service/vehicle",
        // },
      ],
    },
     {
      id: "B2B",
      title: "B2B",
      icon: "Curved-People",
      children: [
          {
      id: "driver",
      title: "Drivers",
      icon: "Curved-Work",
      children: [
        {
          id: "driver",
          title: "Add Drivers",
          navLink: "/B2B/driver/add",
        },
        {
          id: "driver",
          title: "List Drivers",
          navLink: "/B2B/driver/lists",
        },
         
      ],
    },
         {
      id: "vehicles",
      title: "Vehicle",
      icon: "Curved-Document",
      children: [
        {
          id: "vehicles",
          title: "Add Vehicle",
          navLink: "/B2B/Vehicle/add",
        },
        {
          id: "vehicles",
          title: "List Vehicle",
          navLink: "/B2B/Vehicle/lists",
        },
       
      ],
    },
      ],
    },
    //  Expense
     {
      id: "Expense",
      title: "Expense",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Expense",
          title: "Add Expense",
          navLink: "/expense/add",
        },
        {
          id: "Expense",
          title: "List Expense",
          navLink: "/expense/list",
        },
        //  {
        //   id: "Service",
        //   title: "Vehicle Service",
        //   navLink: "/service/vehicle",
        // },
          {
      id: "Service",
      title: "Service",
      icon: "Curved-Filter",
      
      children: [
       
       
         {
          id: "Service",
          title: "Add Vehicle Service",
          navLink: "/service/vehicle",
        },
         {
          id: "Service",
          title: "List Vehicle Service",
          navLink: "/service/list",
        },
      ],
    },
      ],
    },

// import file
    {
      id: "Import",
      title: "Import File",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Import",
          title: "Add File",
          navLink: "/Import/importFile",
        },
      ],
    },
      // Report
      {
      id: "Report",
      title: "Report",
      icon: "Curved-Filter",
      
      children: [
       
        {
          id: "Report",
          title: "View Report",
          navLink: "/report/view/:id",
        
        },
      ],
    },
    // Invoice
     {
      id: "Invoice",
      title: "Invoice",
      icon: "Curved-Wallet",
      
      children: [
        {
          id: "Invoice",
          title: "Invoice Table",
          navLink: "/table/invoice",
        },
        // {
        //   id: "Report",
        //   title: "View Report",
        //   navLink: "/report/view",
        
        // },
      ],
    },
    // {
    //   id: "Service",
    //   title: "Service",
    //   icon: "Curved-Filter",
      
    //   children: [
    //     {
    //       id: "Service",
    //       title: "Vehicle Service",
    //       navLink: "/service/vehicle",
    //     },
      
    //   ],
    // },
  ]
}