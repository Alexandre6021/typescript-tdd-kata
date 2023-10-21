export default function fizzbuzz(n: number): string[] {

    var tab : string[] = new Array(n-1); 

    for(var i = 1; i <= n; i++){

        if(i % 3 == 0 && i % 5 == 0){

            tab[i-1] = "FizzBuzz";
        }
        else if(i % 5 == 0){

            tab[i-1] = "Buzz";
        }
        else if(i % 3 == 0){

            tab[i-1] = "Fizz";
        }
        else{

            tab[i-1] = i.toString();
        }
    }
    return tab;
}