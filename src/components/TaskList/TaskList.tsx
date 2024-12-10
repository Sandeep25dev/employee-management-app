import { LoggedUserDataTypes } from "../../types/userDataProps";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }: { data: LoggedUserDataTypes }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks?.map((task) => {
        if (task.active) {
          return <AcceptTask key={generateRandomKey()} task={task} />;
        }
        if (task.newTask) {
          return <NewTask key={generateRandomKey()} task={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={generateRandomKey()} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={generateRandomKey()} task={task} />;
        }
      })}
    </div>
  );
};

const generateRandomKey = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const keyLength = 10;
  let result = "";

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

export default TaskList;
