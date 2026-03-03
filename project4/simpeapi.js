const user = [
  {
    id: 1,
    name: "Wathish",
    role: "Backend Developer",
    experience: 2,
  },
  {
    id: 2,
    name: "Satwik",
    role: "Frontend Developer",
    experience: 1,
  },
  {
    id: 3,
    name: "Rahul",
    role: "DevOps Engineer",
    experience: 3,
  },
  ,
  {
    id: 4,
    name: "Bahul",
    role: "DevOps Engineer",
    experience: 3,
  },
];

//get all the name,filter using <1 exp,total exp

//name

for (const n of user) {
  //console.log(n.name);
}

//

for (const n of user) {
  if (n.experience <= 2) {
    //console.log(n.name, n.experience);
  }
}
//total exp

for (const n of user) {
  console.log(n.name, n.experience);
}
