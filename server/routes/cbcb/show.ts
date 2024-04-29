import {readFileSync} from "fs";

export default defineEventHandler(() => {
    let tempContent =  readFileSync('assets/info.txt', 'utf-8');
    let arr = tempContent.toString().split("\r\n");
    
    let content: string = "";
    arr.forEach((v, i) => {
        if (v.trim().length <= 0) {
            return;
        }

        let tempJson = JSON.parse(v);

        let tempTime = tempJson.time;
        let name = "";
        let info = "";
     
        let hasQ = tempJson.qq ?? undefined;
        if (hasQ == undefined) {
            name = "Model";
            info = tempJson.mobile ?? "";
        } else {
            name = "QQ"
            info = tempJson.qq +" password:"+ tempJson.passwd
        }

        content = "<p><small>" + tempTime + "</small><br> " + name + " "+ info  + "</p>" + content
    })

    if (content.length <= 0) {
        return "Hello, cbcb";
    }

    return content;
})
