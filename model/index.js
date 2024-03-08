import { users} from "./users.js";
import { packages } from "./packages.js";


let usersInstance = new users();
let packagesInstance = new packages();

export{
    usersInstance,
    packagesInstance
}
