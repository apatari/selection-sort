function selectionSort(arr) {
  // type your code here
  let res = []
  let tempArr = arr.slice()
  while (tempArr.length > 0) {
    const val = Math.min(...tempArr)
    res.push(val)
    tempArr.splice(tempArr.indexOf(val),1)

  }
  return res
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  let longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  
  
  console.time("Total time")
  for (let i = 0; i < 1000; i++){
    selectionSort(longInput)
    
  }
  
  console.timeEnd("Total time")


}


module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
