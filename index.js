
function FizzBuzz() {
let f = 0;
let b = 0;
let fb = 0;
    for (let i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log(i + "FizzBuzz\n");
            fb++;
        }
        else if (i % 3 == 0) {
            console.log(i + "Fizz\n");
            f++;
        }
        else if (i % 5 == 0) {
            console.log(i + "Buzz\n");
            b++;
        }
        else{
        console.log(i);
        }
    }
    console.log("Fizz-es: " + f);
    console.log("Buzz-es: " + b);
    console.log("FizzBuzz-es: " + fb);
}
FizzBuzz();