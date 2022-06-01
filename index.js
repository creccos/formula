import { COSTCO_URL, DELAY } from './constants.js';
import axios from 'axios';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const ping = async () => {
    try {
        const res = await axios.get(COSTCO_URL);
        console.log(res.data.includes("ERR_REORDER_ITEM_NOT_ALLOWED"));
    } catch(e) {
        console.log(e.message);
    }
}
const check = async () => {
    while(true) {
        ping();
        await sleep(DELAY);
    }
} 
check();