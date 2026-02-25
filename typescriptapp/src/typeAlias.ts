type Position = "HR" | "Developer" | "Manager";

type Employee = {
  name: string;
  age: number;
  isAdmin: boolean;
  position: Position;
  location?: string;
  greetMessage?: Function;
};

const employee1: Employee = {
  name: "Varinder Gupta",
  age: 40,
  isAdmin: false,
  position: "Developer",
};

const employee2: Employee = {
  name: "Varinder Gupta",
  age: 40,
  isAdmin: false,
  position: "Developer",

  greetMessage: () => {
    console.log("Hello world");
  },
};

function renderEmployee(employee: Employee) {
  if (employee.greetMessage) employee.greetMessage();
}

renderEmployee(employee1);
renderEmployee(employee2);
