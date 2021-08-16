// Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.

export function mapObject(obj, cb){

    let ob={};
    for(let key in obj){
        ob[key]=cb(obj[key]);
    }

    return ob;
}