
// Fill in undefined properties that match properties on the `defaultProps` parameter object.


export function defaults(obj, defaultProperty){
    for(let key in defaultProperty){

        if(!(key in obj)){
            obj[key]=defaultProperty[key];
        }
        // for(let okey in obj){
        //     if(key == okey){
        //         continue;
        //     }
        //     obj[key]=defaultProperty[key];
        // }
    }
    return obj;
}