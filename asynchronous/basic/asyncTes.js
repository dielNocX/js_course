function asyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Task Complete');
      }, 1000);
    });
  }
  
  async function run() {
    const result = await asyncTask();
    console.log(result);
  }
  


  console.log("a")
  run();



  --------------------


  console.log('Start');
setTimeout(() => {
  console.log('Middle');
}, 1000);
console.log('End');


