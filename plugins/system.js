/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🐬",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return;
const {exec} = require("child_process")
reply("restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({

    pattern: "settings",

    react: "☣️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`
*[ •  SILENT-SOBX-MD - SETTINGS‎ • ]*
*╭┈───────────────•*
*┊* *♾️ AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┊* *♾️ MODE:* ➠ ${config.MODE} 
*┊* *♾️ AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┊* *♾️ AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┊* *♾️ AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
*┊* *♾️ ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
*┊* *♾️ ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┊* *♾️ ANTI_LINK:* ➠ ${config.ANTI_LINK} 
*┊* *♾️ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┊* *♾️ PREFIX:* ➠ [${config.PREFIX}]
*┊* *♾️ FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING} 
*┊* *♾️ AUTO_REACT:* ➠ ${config.AUTO_REACT} 
*┊* *♾️ HEART_REACT:* ➠ ${config.HEART_REACT} 
*┊* *♾️ OWNER_REACT:* ➠ ${config.OWNER_REACT} 
*┊* *♾️ BOT_NAME:* ➠ ${config.BOT_NAME}
*┊* *♾️ READ_MESSAGE:* ➠ ${config.READ_MESSAGE}
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²
*•────────────•⟢*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "👀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`> ╔════════════════════◊
> *╠ ⏳ Runtime:-  ${runtime(process.uptime())}*    
> *╠ 📟 Ram usage:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
> *╠ ⚙️ Platform:- ${os.hostname()}*
> *╠ 👨‍💻 Owner:- ᴡʜɪᴛᴇ ᴛɪɢᴇʀ ᴍɪɴᴅ*   
> *╠ 👨‍🔧 Version:- 1.0.0*
> ╚═══════════════════════◊
> *ᴡʜɪᴛᴇ ᴛɪɢᴇʀ ᴍɪɴᴅ ʙᴏᴛᴢ ɪɴᴄ*`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
});


