const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; //This is an array containing the batteries

// Code your solution here

const totalBatteries = batteryBatches.reduce(
  //The reduce method is used to transform the battery batch into a single value. In this case, we are getting the total sum of the batteries.
  (total, batch) => total + batch, //It takes a callback function which takes two parameters, total and batch. What this does is it adds teh value of total to the next batch till iishe.
  0 //This is the initial value of total which is zero.
);
console.log(totalBatteries); //Shows the total number of batteries in the terminal.
