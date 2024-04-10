import {writeFileSync} from "fs";

export default defineEventHandler(() => {
     writeFileSync('assets/info.txt', '', {
        flag: 'w'
    })
    return 'done'
})
