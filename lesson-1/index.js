function orderFood(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dish === "pizza") {
        resolve(`Your ${dish} is ready`);
      } else {
        reject(`Sorry, we don't prepare ${dish} at the moment`);
      }
    }, 3000);
  });
}

function orderFoodPromise() {
  console.log("Processing order...");
  orderFood("pizza")
    .then((order) => console.log(order))
    .catch((error) => console.log(error));
}

async function orderFoodAsync() {
  try {
    console.log("Processing order (async/await)...");
    const order = await orderFood("pizza");
    console.log(order);
  } catch (err) {
    console.log(err);
  }
}

orderFoodAsync();

// orderFoodPromise();
