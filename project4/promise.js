// creating an promise

const Promise0ne = new Promise(function (resolve, reject) {
  // anything which takes time can be pass here what it mean it may give the result or not refering to the future value may true or fasle
  // db operatation network op, webapi call

  setTimeout(() => {
    resolve({ data: "shetty" });
    console.log("op is resolved");
  }, 1000);
});

// how to consume or access it an promise using .then() and .catch()

Promise0ne.then((result) => {
  console.log(result.data);
}).catch((err) => {
  console.log(err);
});

new Promise(function (resolve, reject) {
  error = true;
  if ((erorr = false)) {
    resolve("data is wrong");
  } else {
    reject("data is corrupted");
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
