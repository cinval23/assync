// Task 01: Iterating with Async/Await
// Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      return value
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
    }
  }
  
  // Example usage
  console.log(iterateWithAsyncAwait(['a', 'b', 'c', 'd'])); 
  
  
  
  // Task 02: Awaiting a Call
  // Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
  async function awaitCall() {
    // Simulate API call with a promise that resolves after 2 seconds
    const fetchData = new Promise((resolve) =>
      setTimeout(() => resolve({ data: 'API response data' }), 2000)
    );
  
    const response = await fetchData;
    console.log('Data received:', response.data);
  }
  
  // Example usage
  awaitCall();
  
  
  
  // Task 03: Handling Errors with Async/Await
  // Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
  async function awaitCallWithErrorHandling() {
    try {
      const fetchData = new Promise((resolve, reject) =>
        setTimeout(() => {
          // Simulate error
          if (Math.random() < 0.5) {
            reject(new Error('Failed to fetch data'));
          } else {
            resolve({ data: 'API response data' });
          }
        }, 2000)
      );
  
      const response = await fetchData;
      console.log('Data received:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage
  awaitCallWithErrorHandling();
  
  // Chaining Async/Await
  // Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second.
  async function firstFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('First function complete');
  }
  
  async function secondFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Second function complete');
  }
  
  async function thirdFunction() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Third function complete');
  }
  
  async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  }
  
  // Example usage
  chainedAsyncFunctions();
  
  
  
  // Task 04: Awaiting Concurrent Requests
  // Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.
  async function concurrentRequests() {
    const fetchData1 = new Promise((resolve) =>
      setTimeout(() => resolve('API response 1'), 2000)
    );
    const fetchData2 = new Promise((resolve) =>
      setTimeout(() => resolve('API response 2'), 2000)
    );
  
    const [response1, response2] = await Promise.all([fetchData1, fetchData2]);
    console.log('Combined Results:', response1, response2);
  }
  
  // Example usage
  concurrentRequests();
  
  
  
  // Task 05: Awaiting Parallel Calls
  // Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.
  async function fetchData(url) {
    // Simulate an API call for demonstration purposes
    return new Promise((resolve) =>
      setTimeout(() => resolve(`Data from ${url}`), 2000)
    );
  }
  
  async function parallelCalls(urls) {
    const requests = urls.map((url) => fetchData(url));
    const responses = await Promise.all(requests);
    console.log('Responses:', responses);
  }
  
  // Example usage
  parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3']);