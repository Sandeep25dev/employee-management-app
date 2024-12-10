export type UserDataProps = {
  employees: {
    id: number;
    name: string;
    email: string;
    password: string;
    tasks: TaskProps[];
    tasksCount: {
      active: number;
      newTask: number;
      completed: number;
      failed: number;
    };
  }[]; // Array of employees (can have multiple employees)
  admin:
    | [
        {
          id: number;
          name: string;
          email: string;
          password: string;
        }
      ]
    | null;
};

export interface LoggedUserDataTypes {
  id: number;
  name: string;
  email: string;
  password: string;
  tasks?: TaskProps[]; // Change from [TaskProps] to TaskProps[]
  tasksCount?: {
    active: number;
    newTask: number;
    completed: number;
    failed: number;
  };
}

export type TaskProps = {
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
  category: string;
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
};
