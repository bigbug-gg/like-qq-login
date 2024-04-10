import {readFileSync} from "fs";

export default defineEventHandler(() => {
    return readFileSync('assets/info.txt', 'utf-8')
})
