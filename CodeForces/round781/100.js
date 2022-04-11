// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = i.split(EOL) /* your input text, split by lines*/
    console.log(lines);    
    let input = lines.split(' ').map(v => +v);

    // console.log(temp);

    let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i = 2; i <= Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    
    return gcd;
    }

    let getLCM = (num1, num2) =>{
        let lcm = 1;
    
        while(true){
        if((lcm % num1 === 0) && (lcm % num2 === 0)){
            break;
        }
        lcm++;
        }

        return lcm;
    }



})


