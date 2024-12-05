import { LoggedUserDataTypes } from "../../types/userDataProps";

const TaskList = ({ data }: { data: LoggedUserDataTypes }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks?.map((task) => (
        <div
          key={task.taskTitle}
          className={`flex-shrink-0 h-full w-[300px] p-5 ${getRandomTailwindColor()} rounded-xl`}
        >
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
            <h4 className="text-sm">{task.taskDate}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
          <p className="text-sm mt-2">{task.taskDescription}</p>
        </div>
      ))}
    </div>
  );
};

function getRandomTailwindColor() {
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-yellow-600", // 'Saffron' is approximated as yellow-600 in Tailwind
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Return the random color class
  return colors[randomIndex];
}

export default TaskList;
