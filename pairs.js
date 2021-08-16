  // Convert an object into a list of [key, value] pairs.

// import { keys } from "./keys.js";

export function pairs(obj){
        var keys= Object.keys(obj);
        var pairs = Array(keys.length);
        for (var i = 0; i < keys.length; i++) 
        {
          pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;


        //return Object.entries(obj);
}