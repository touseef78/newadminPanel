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
          id: "/company",
          title: "Add B2B",
          icon: "Curved-Work",
          navLink: "/company/add",
        },
    
        {
          id: "/company",
          title: "List B2B",
          icon: "Curved-Work",
          navLink: "/company/list",
        },

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
      title: "Maintenance",
      icon: "Curved-Filter",
      
      children: [
       
       
         {
          id: "Service",
          title: "Add Vehicle Maintenance",
          navLink: "/service/vehicle",
        },
         {
          id: "Service",
          title: "List Vehicle Maintenance",
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
          navLink: "/report/view",
        
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

       ///  Earning Report
       {
        id: "earningReport",
        title: "Earning Report",
        icon: "Curved-Wallet",
        
        children: [
          {
            id: "earningReport",
            title: "view Report",
            navLink: "/earningReportlist",
          },
          // {
          //   id: "Report",
          //   title: "View Report",
          //   navLink: "/report/view",
          
          // },
        ],
      },

      /////efficiency report
      {
        id: "efficiencyReport",
        title: "Efficiency Report",
        icon: "Curved-Wallet",
        
        children: [
          {
            id: "efficiencyReport",
            title: "view Report",
            navLink: "/efficiencyReport",
          },
          // {
          //   id: "Report",
          //   title: "View Report",
          //   navLink: "/report/view",
          
          // },
        ],
      },

    //  UberFile
    {
      id: "uberFile",
      title: "UberFile",
      icon: "Curved-Wallet",
      
      children: [
        {
          id: "uberFile",
          title: "File Table",
          navLink: "/uberfile/listUberFile",
        },
        // {
        //   id: "Report",
        //   title: "View Report",
        //   navLink: "/report/view",
        
        // },
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