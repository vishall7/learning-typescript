# Typescript Notes

statically typed - those variables cannot changed in runtime, needs to define type when initialization/assignment

dynamic type - can change in runtime, do not need to define the type

to init TS - 

1. install ts globally (it installs the ts compiler)
2. scaffold npm project (npm init)
3. install ts as dev dependency
4. create ts config with `npx tsc --init` command
5. create a file with ts extension
6. write some code, can be js or ts
7. run tsc to compile code, or create npm script
8.done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

#### change the course midway (following web dev simplified)
- type can be defined as variable
- even function can
- function who returns nothing have ``void`` as return type
- follow the Pascal case for covention
- you can use union types to a variable with |
- importing types ? use type after import keyword, it only imports metadata, and gets earase in runtime so no missing import issues in runtime.

Type Narrowing 
- one of the coolest thing of typescript
- when specifing type we can specify more than two types to one property
- if that case we can check it with typeof if string then following variable will be typed as string
 code ex - 
```ts
function getTicketInfo(id: string | number){
  if (typeof id === "string") {
    const numberId = parseInt(id.split("-")[1]);
    return `returned ticket ${numberId}`
  }

  return `returned ticket ${id}`
}

console.log(getTicketInfo(167));
```

Optional Paramters
- in js we can easily pass optional parameters too with ease
- but thats non sense and should be avoid
- Ts avoids that, we need to explictly pass optional parameters using ? this sign
```ts
function suppose(arg1: string, arg2?: number) {
  console.log(`arg 1 is ${arg1}`)

  if(arg2 != null)
  console.log(`arg 2 is ${arg2}`)
}

suppose("age")
  ```
- optional paramters can have default value assigned with '='
- then in that case we do not need to specify ?
```ts
function suppose2(arg: string = "something") {
  console.log(`argument is ${arg}`)
}


suppose2()
  ```

  Literal Types
  - we have literal types in ts that dont just specify the type its literal values
  - its specific and only be used in specific cases
  - we do not need to define the generic type as it have literal value so as the type( by type inference)
 ```ts
  type Direction = "north" | "east" | "south" | "west";

function move(direction: Direction) {
  console.log(`you move to ${direction} direction`)
}

console.log(move("south"))
```

Super Set Union
- its used in also very specific case
- when we define literal types then in some cases we do need any vlaue along with define literal types
- in that case we do this ``type count = 0 | 1 | 3 | number``
- this allows any number along with defined literal types, better type intellisense

Template Literal Types
- there is also types that are unions we can join multiple types with template literal syntax
- and thats it we not oftenly use that
