Question 1. Explain what the following lines of code do
  Fs is the abbreviation of filesystem, which provides the ability to read and write local files. So “fs.readFileSyns()"  synchronously reads the entire contents of a file. Eval is a function that returns a string as an expression and returns a result. So more to my guess is that the fizzBuzz as a string returns an expression and returns a result to FizzBuzz

Question 2. explain why we are placing the let fizzBuzz = new FizzBuzzoutside the it block?
 Fizzbuzz is defined externally to  it block because of global variables, so we don't have to   define it repeatedly every time, thus reducing the amount of code.
 
Question 3.  Explain the difference between using === and == in JS?
  "==" only requires equal values; 
  "===" requires both values and types to be equal
  
Question 4.  Explain why we are moving (number % 15 === 0) to the top?
  Because number can divisible 15 and can also divisible 3 and 5, This will execute the (number % 15 === 0) first if we move (number % 15) to the top so that 3,5 and 15 will not conflict.

Question 5.  Explain the difference between feature and unit test
 Functional testing is defined as the testing of complete functionality of some application. In practice with web apps, this means using some tool to automate a browser, which is then used to click around on the pages to test the application. A unit tests should essentially just give the function that’s tested some inputs, and then check what the function outputs is correct. The purpose is to validate that each unit of the software performs as designed

Question 6.  Explain what this following code does
  describe('User can input a value and get FizzBuzz results', () => {
  // initialize and setup a server’s root path localhost:8080
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    }); 
    
 //and wait browser page reload before test
    beforeEach(async () => {
        await  browser.page.reload();
    })

//Wait browser close after the test is finished
    after(async ()=> {
        await  browser.close();
    })
  })
  
Question 7.  Explain what expectations in the context of testing are
  Expectations is that expect the content variable to equal to 'Fizz'
  
Question 8. Write a line to line explanation of what is happening in this code
 Add an addeventListener method that fires when a user clicks a button and return a result 
 
Question 9. Explain what a CDN (Content Delivery Network) is?
  A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server. This service is effective in speeding the delivery of content of websites with high traffic and websites that have global reach. The closer the CDN server is to the user geographically, the faster the content will be delivered to the user. CDNs also provide protection from large surges in traffic.