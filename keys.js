
 // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.


export function keys(obj) {
    let arr=[];

    for (var key in obj) {
      arr.push(key);
    }
         return arr;

    //return Object.keys(obj);


}
