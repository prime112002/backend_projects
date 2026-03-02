//using fetchhow can i use try catch and await /async method insted of promise at theend they also represent the future value is resolved or rejected
/**const response = fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data[0].title))
  .catch((error) => {
    console.log(error);
  });
**/

//using moder way Async/await with help try and catch
async function getproduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`http request ${response.status}`);
    }
    const data = await response.json();
    data.map((p) => console.log(p.title));
  } catch (erorr) {
    console.log(erorr);
  }
}
getproduct();
