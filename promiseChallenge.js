// Function to log a number with a delay using a Promise
function logNumberWithDelay(number, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, delay);
    });
  }
  
  // Log numbers 1, 2, and 3 in order with delays
  logNumberWithDelay(1, 1000) // Log 1 after 1 second (1000 milliseconds)
    .then(() => logNumberWithDelay(2, 2000)) // Log 2 after 1 second
    .then(() => logNumberWithDelay(3, 1000)); // Log 3 after 1 second