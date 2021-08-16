
 // Returns a copy of the object where the keys have become the values and the values the keys.
 
export function invert(obj) {
    var retobj = {};
    for(var key in obj){
      retobj[obj[key]] = key;
    }
    return retobj;
    
    
}


