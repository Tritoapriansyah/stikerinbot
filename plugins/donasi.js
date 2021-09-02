let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ https://saweria.co/Trito
├〔 Donasi Pembuat Scnya Juga Ya 〕
├ https://trakteer.id/ariffb/tip
└────
`.trim(), '© stikerin', 'Donasi', '.donasi')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
