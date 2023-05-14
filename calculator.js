let one = document.getElementById("one").value;
let two = document.getElementById("two").value;
let three = document.getElementById("three").value;
let four = document.getElementById("four").value;
let five = document.getElementById("five").value;
let six = document.getElementById("six").value;
let seven = document.getElementById("seven").value;
let eight = document.getElementById("eight").value;
let nine = document.getElementById("nine").value;
let zero = document.getElementById("zero");
let show = document.getElementById("display");
let equal = document.getElementById("equalsign");
let value1 = document.getElementById("result");

function finishfatal(){
    let value1res = value1.value; 
    let caluclatedvalue = calculating(value1res);
    show.innerHTML = caluclatedvalue;
    // value1.value = "";
    console.log(operatormatch[0]);
}

function calculating(ForCalc){
    let res;
    let regex = /[+\-*\/sincostansinhtanhcoshpiraddegxnlogsqrtmodpercpowabs]/;
    let operatormatch = ForCalc.match(regex);
    let operators = ForCalc.replace(/[0-9]|\./g, "").split("");
    console.log(operators);
    const operatororder = ['/', '*', '+', '-']; // new order: index 2, then 0, then 4, etc.

    // create new array with elements in the desired order
    const newArr = [];
    for(let j = 0; j < operatororder.length; j++){
        for (let i = 0; i < operators.length; i++) {
            if(operatororder[j] == operators[i]){
                newArr.push(operators[i]);
            }
        }
    }

    let result;
    let numbers = ForCalc.split(regex).map(num => parseFloat(num));
    result = numbers[0];
    console.log(result)
    console.log(newArr)
    console.log(numbers);

    if(newArr.length > 1){
        // for (let i = 0; i < newArr.length; i++) {
        //     if (newArr[i] === "+") {
        //     result += numbers[i + 1];
        //     } else if (newArr[i] === "-") {
        //     result -= numbers[i + 1];
        //     } else if (newArr[i] === "*") {
        //     result *= numbers[i + 1];
        //     } else if (newArr[i] === "/") {
        //     result /= numbers[i + 1];
        //     } else {
        //     result = "Invalid expression entered!";
        //     break;
        //     }
        // }
        // console.log(result);
        res = "Sorry!! Currently one operator supported :("
        
    }else{
        switch(operatormatch[0]){
            case 's':
                operatormatch[0] = "sin"
                break;
            case 'c':
                operatormatch[0] = "cos"
                break;
            case 't':
                operatormatch[0] = "tan"
                break;
            case 'i':
                operatormatch[0] = "Sinh"
                break;
            case 'o':
                operatormatch[0] = "Cosh"
                break;
            case 'a':
                operatormatch[0] = "Tanh"
                break;
            case 'p':
                operatormatch[0] = "pi"
                break;
            case 'r':
                operatormatch[0] = "rad"
                break;
            case 'd':
                operatormatch[0] = "deg"
                break;
            case 'q':
                operatormatch[0] = "Sqrt"
                break;
            case 'm':
                operatormatch[0] = "mod"
                break;
            case 'e':
                operatormatch[0] = "Perc"
                break;
            case 'w':
                operatormatch[0] = "POw"
                break;
            case 'b':
                operatormatch[0] = "Abs"
                break;
            case 'l':
                operatormatch[0] = "log"
                break;
            default:
                console.log('Unknown Operator');
        }
    
    
        const [num1, num2] = ForCalc.split(operatormatch[0]).map(num => parseFloat(num));
        
        console.log(num2)
        console.log(operatormatch[0])
        switch(operatormatch[0]){
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
            case 'sin':
                res = sintrig(num2);
                break;
            case 'cos':
                res = costrig(num2);
                break;
            case 'tan':
                res = tantrig(num2);
                break;
            case 'Sinh':
                res = sinhtrig(num2);
                break;
            case 'Cosh':
                res = coshtrig(num2);
                break;
            case 'Tanh':
                res = tanhtrig(num2);
                break;
            case 'pi':
                res = pie();
                break;
            case 'rad':
                res = radian(num2);
                break;
            case 'deg':
                res = degree(num2);
                break;
            case 'Sqrt':
                res = squareroot(num2);
                break;
            case 'mod':
                res = modulus(num1,num2);
                break;
            case 'Perc':
                res = percentage(num1);
                break;
            case 'POw':
                res = power(num1,num2);
                break;
            case 'Abs':
                res = absolute(num2);
                break;
            case 'log':
                res = logarithm(num2);
                break;
            default:
                console.log('Invalid Operator');
        }
    }
    return res;
}

function costrig(degree){
    let res = Math.cos(degree*(Math.PI/180));
    return res;
}

function sintrig(degree){
    let res = Math.sin(degree*(Math.PI/180));
    return res;
}

function tantrig(degree){
    let res = Math.tan(degree*(Math.PI/180));
    return res;
}

function coshtrig(number){
    let res = Math.cosh(number);
    return res;
}

function sinhtrig(number){
    let res = Math.sinh(number);
    return res;
}

function tanhtrig(number){
    let res = Math.tanh(number);
    return res;
}

function pie(){
    let res = Math.PI;
    return res;
}

function radian(degree){
    let res = degree*(Math.PI/180);
    return res;
}

function degree(radian){
    let res = radian/(Math.PI/180);
    return res;
}

function squareroot(number){
    let res = Math.sqrt(number);
    return res;
}

function modulus(number, modu){
    let res = number % modu;
    return res;
}

function power(number, raise){
    let res = Math.pow(number,raise);
    return res;
}

function percentage(number){
    let res = number*100;
    return res;
}

function absolute(number){
    let res = Math.abs(number);
    return res;
}

function logarithm(number){
    let res = Math.log10(number);
    return res;
}

function showvalue(button){
    let displayvalue = button.value
    value1.value = value1.value + displayvalue;
}

function CalcSign(button){
    let Calcvalue = button.value
    value1.value = value1.value + Calcvalue;
}

function backspace() {
    const startPos = value1.selectionStart;
    const endPos = value1.selectionEnd;
    if (startPos === endPos && startPos > 0) {
      value1.value = value1.value.substring(0, startPos - 1) + value1.value.substring(endPos);
      value1.selectionStart = startPos - 1;
      value1.selectionEnd = startPos - 1;
    }
}

function clearvisuals(){
    value1.value = "";
    show.textContent = "";
}
