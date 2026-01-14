import {writeFileSync} from "fs";

export default defineEventHandler(() => {
     writeFileSync('app/assets/info.txt', '', {
        flag: 'w'
    })
    return 'Done,cbcb'
})