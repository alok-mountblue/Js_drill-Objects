
 // Return all of the values of the object's own properties.


export function values(obj) {

    let arr=[];

    for (var value in obj) {
      arr.push(obj[value]);
    }
   return arr;
}