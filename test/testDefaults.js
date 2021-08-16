
import { defaults} from "../defaults.js";

var iceCream = {flavor: "chocolate", color: "brown"};

let result=defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"})


console.log(result);

