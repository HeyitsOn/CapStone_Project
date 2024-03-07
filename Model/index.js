import { users} from "./users.js";
import { packages } from "./packages.js";
import {weddingBooking} from "/.weddingBooking.js"


let users = new users();
let packages = new packages();
let weddingBooking = new weddingBooking();

export{
    users,
    packages
}
