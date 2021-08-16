
import { mapObject } from "../mapObject.js";

const obj={"start":10,"end":15};
function cb(value){
    return value*10;
}

let result=mapObject(obj,cb);
console.log(result);    //output will be { start: 100, end: 150 }