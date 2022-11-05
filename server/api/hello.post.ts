import {writeFileSync} from "fs";
import {readBody} from "h3";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const getNowTime = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() >= 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
        const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`
        const hour = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`
        const minutes = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`
        const seconds = now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`
        return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`
    }
    body.time = getNowTime()
    writeFileSync('assets/info.txt', JSON.stringify(body) + `\r\n`, {
        flag: 'a',
    })
    return body
})