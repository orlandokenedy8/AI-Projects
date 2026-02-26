import { init, getAuthToken } from "@heyputer/puter.js/src/init.cjs";

const authToken = await getAuthToken(); // performs browser based auth
const puter = init(authToken);
