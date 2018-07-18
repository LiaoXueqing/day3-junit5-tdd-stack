function fizzBuzz(number){
    let str = ""
    str += number%3==0?"Fizz":"";
    str += number%5==0?"Buzz":"";
    str += number%7==0?"Whizz":"";
    if(str != ""){
        console.log(str);
    }else{
        console.log(number);
    }
}