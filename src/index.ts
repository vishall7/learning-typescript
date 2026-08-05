// function main(name: string) {
//   console.log("Hello " + name);
// }

// main("World");

// const name: string = "John";
// console.log(`Hello ${name}`);

// const age: number = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);

// const isAdult: boolean = age >= 18;
// console.log(`Am I an adult? ${isAdult}`);

// function calc(price: number, quantity: number, discount: number): number {
//   return price * quantity * (1 - discount);
// }

// calc(100, 2, 3);
// console.log(`Total cost: ${calc(100, 2, 0.1)}`);

// export type Func = (x: number, y: number) => number;
// const func: Func = (x, y) => x + y;

/* Type Narrowing */
// function getTicketInfo(id: string | number){
//   if (typeof id === "string") {
//     const numberId = parseInt(id.split("-")[1]);
//     return `returned ticket ${numberId}`
//   }

//   return `returned ticket ${id}`
// }

// console.log(getTicketInfo(167));

function suppose(arg1: string, arg2?: number) {
  console.log(`arg 1 is ${arg1}`)

  if(arg2 != null)
  console.log(`arg 2 is ${arg2}`)
}

// suppose("age")

function suppose2(arg: string = "something") {
  console.log(`argument is ${arg}`)
}


suppose2()
