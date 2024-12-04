const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Report",
        taskDescription: "Prepare the monthly performance report.",
        taskDate: "2024-12-05",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-12-06",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code Review",
        taskDescription: "Review the latest merge request.",
        taskDate: "2024-12-05",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Presentation",
        taskDescription: "Present the project progress to the client.",
        taskDate: "2024-12-06",
        category: "Client",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix Bug #101",
        taskDescription: "Resolve issue #101 in the application.",
        taskDate: "2024-12-04",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database Backup",
        taskDescription: "Ensure the backup of the production database.",
        taskDate: "2024-12-07",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Feature Implementation",
        taskDescription: "Develop the user profile feature.",
        taskDate: "2024-12-08",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Security Audit",
        taskDescription: "Conduct a security audit for the new module.",
        taskDate: "2024-12-05",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Documentation",
        taskDescription: "Update API documentation for the latest version.",
        taskDate: "2024-12-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Test New Feature",
        taskDescription: "Conduct end-to-end testing for the payment module.",
        taskDate: "2024-12-05",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Submit Timesheet",
        taskDescription: "Submit the weekly timesheet.",
        taskDate: "2024-12-04",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Investigate Bug #404",
        taskDescription: "Look into the bug reported by QA.",
        taskDate: "2024-12-03",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = localStorage.getItem("employees");
  const adminsData = localStorage.getItem("admin");
  const employees = employeesData ? JSON.parse(employeesData) : [];
  const admin = adminsData ? JSON.parse(adminsData) : [];

  return { employees, admin };
};
