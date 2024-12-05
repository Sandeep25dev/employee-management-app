export type UserDataProps = {
  employees: [
    {
      id: number;
      email: string;
      password: string;
      tasks: [
        {
          taskTitle: string;
          taskDescription: string;
          taskDate: string;
          category: string;
          active: boolean;
          newTask: boolean;
          completed: boolean;
          failed: boolean;
        }
      ];
    }
  ];
  admin: [
    {
      id: number;
      email: string;
      password: string;
    }
  ];
};

export type LoggedUserDataTypes = {
  id: number;
  email: string;
  password: string;
  tasks?: [
    {
      taskTitle: string;
      taskDescription: string;
      taskDate: string;
      category: string;
      active: boolean;
      newTask: boolean;
      completed: boolean;
      failed: boolean;
    }
  ];
};
