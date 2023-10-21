import fizzbuzz from "../FizzBuzz";

describe('FizzBuzz tdd test', () => {

    beforeEach( () => {
	})

    it('pour un tableau ayant un 3', async () => {
        
        var tab:string[] = ["1", "2","Fizz"];
        var tabResult = await fizzbuzz(3);
        expect(tab).toEqual(tabResult)
    });

    it('pour un tableau ayant un 5', async () => {
        
        var tab:string[] = ["1","2","Fizz","4","Buzz"];
        var tabResult = await fizzbuzz(5);
        expect(tab).toEqual(tabResult)
    });

    it('pour un tableau ayant un multiple de 3 et 5', async () => {
        
        var tab:string[] = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
        var tabResult = await fizzbuzz(15);
        expect(tab).toEqual(tabResult)
    });

});


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]