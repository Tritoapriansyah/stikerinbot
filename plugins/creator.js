function handler(m) {
  this.sendContact(m.chat, '6285888258313', this.getName('6285888258313@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
