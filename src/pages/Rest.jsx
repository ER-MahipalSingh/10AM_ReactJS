import React, { version } from "react";

const Rest = () => {
  // const a = [10, 20, 30];
  // const b = [100, 200, 300];
  // const c = [...a, ...b];
  // console.log(c);

  // const obj = {
  //   tech:"Node",
  //   version: 24,
  //   relese: 2009
  // }
  // const {version, ...ditels} = obj;
  // console.log(ditels);
  
  // const update = {
  //   ...obj, version: 30
  // }
  // const addNewEle = {
  //   ...obj,
  //   relese: 2009
  // }
  // console.log(addNewEle);

  // function sum(...num){
  //   return num.reduce((a, b)=> a + b, 0);
  // }
  // const res = sum(10,20,30,40,50);
  // console.log(res);

  const obj = [
    { id: 1, name: "Jhon", age: 20 },
    { id: 2, name: "Alice", age: 22 },
  ];

  // const newAdd = [
  //   ...obj,
  //   {id:3, name:"Alice"}
  // ]
  // console.log(newAdd);

  const update = obj.map((user) => {
    if (user.id === 1) {
      return  {...user, age: 25}
    }
    return user;
  });

  console.log(update);

  return <div>Rest</div>;
};

export default Rest;
