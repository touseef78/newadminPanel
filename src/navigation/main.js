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
      title: "Request",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Registration",
          title: "View Request",
          navLink: "/registration",
        },
      ],
    },
    // parent code here 
    {
      id: "Parents",
      title: "Parents",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Parents",
          title: "View Parent",
          navLink: "/parent",
        },
      ],
      
    },
    // Divers code here 
     {
      id: "Drivers",
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
          navLink: "/driver/list",
        },
      
      ],
      
    },
    // Care Taker code here 
     {
      id: "CareTaker",
      title: "Care Taker",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Care Taker",
          title: "Add CareTaker",
          navLink: "/caretaker/add",
        },
          {
          id: "Care Taker",
          title: "List CareTaker",
          navLink: "/caretaker/list",
        },
      ],
    },
    // ............. 
    // Care Taker Attendance Code here 
    //    {
    //   id: "CareTakerAttendance",
    //   title: "CareTakerAttendance",
    //   icon: "Curved-EditSquare",
      
    //   children: [
    //       {
    //       id: "CareTakerAttendance",
    //       title: "ListCareTakerAttendance",
    //       navLink: "/caretakerattendance/list",
    //     },
    //   ],
    // },
    // ...... 
        {
      id: "DriverAttendance",
      title: "Driver Attendance",
      icon: "Curved-EditSquare",
      
      children: [
          {
          id: "DriverAttendance",
          title: "List Driver Attendance",
          navLink: "/driverattendance/list",
        },
      ],
    },
    // Student Attendance Code here 
        {
      id: "StudentAttendance",
      title: "Student Attendance",
      icon: "Curved-EditSquare",
      
      children: [
        // {
        //   id: "Care Taker",
        //   title: "AddCareTaker",
        //   navLink: "/caretaker/add",
        // },
          {
          id: "Student Attendance",
          title: "List Student Attendance",
          navLink: "/studentattendance/list",
        },
      ],
    },
    // ....
        {
      id: "Live Tracker",
      title: "Live Tracker",
      icon: "Curved-EditSquare",
      
      children: [
        // {
        //   id: "Care Taker",
        //   title: "AddCareTaker",
        //   navLink: "/caretaker/add",
        // },
        //   {
        //   id: "Care Taker",
        //   title: "ListCareTaker",
        //   navLink: "/caretaker/list",
        // },
      ],
    },
    
    // expense code here 
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
      ],
    },
// Report code  here 

      {
      id: "Report",
      title: "Report",
      icon: "Curved-EditSquare",
      
      children: [
      
          {
          id: "Report",
          title: "Earing Report",
          navLink: "/bigways/earning/report",
        },
          {
          id: "Report",
          title: "Expense Report",
          navLink: "/bigways/expense/report",
        },
      ],
    },

  ]
}