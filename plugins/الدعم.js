import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `

*『 ️اليك قائمه الدعم 』*

*『 ️انضم للجروب 』*

*https://chat.whatsapp.com/B9fZR4lNk5N0SnYYTZRMOq*

*『 ️ رقم المطور واتساب  』*

*⊱≼ https://wa.me/+994404282709 ≽⊰⊹*

*◉═══ • ❁ 👑 ❁ • ═══◉* `, m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['kaneki']
export default handler
