const people = [
  {
    name: "Pepe",
    tasks: ["clean", "cook", "wash"],
    completed: ["clean", "wash"],
  },
  {
    name: "Maria",
    tasks: ["clean", "cook"],
    completed: ["clean", "cook"],
  },
  {
    name: "Juan",
    tasks: ["clean", "wash"],
    completed: ["clean"],
  },
];

// 1. Did everyone finished?

const allTasksDone = people.every((persona) =>
  persona.tasks.every((task) => persona.completed.includes(task))
);

console.log(`Everyone finished?: ${allTasksDone}`);

// 2. Someone finished one task?

const someTaskDone = people.some((persona) =>
  persona.tasks.some((task) => persona.completed.includes(task))
);

console.log(someTaskDone);

// 3. How many tasks were completed?

const tasksDone = people.reduce((accumulator, persona) => {
  return accumulator + persona.completed.length;
}, 0);

console.log(tasksDone);

// 4. Did someone wash?

const someoneWashed = people.some((persona) => persona.tasks.includes("wash"));

console.log("Someone had to wash? " + someoneWashed);
