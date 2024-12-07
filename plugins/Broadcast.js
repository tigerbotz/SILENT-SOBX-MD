const config = require('../config')
const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "broadcast",
    desc: "Broadcast a message to members of a specific group.",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, args, reply }) => {
    if (!isOwner) return reply("❌ *You Are Not The Owner !*");
    if (args.length < 2) return reply("📢 *Please Provide A Group JID and Message*\n\nUsage: `.broadcast <group_jid> <message>`");

    const groupJid = args[0];
    const message = args.slice(1).join(' ');

    try {
        // Fetch group metadata to get participants
        const groupMetadata = await conn.groupMetadata(groupJid);
        const participants = groupMetadata.participants;

        if (!participants || participants.length === 0) {
            return reply("❌ *No participants found in the specified group.*");
        }

        for (const participant of participants) {
            try {
                await conn.sendMessage(participant.id, { text: message }, { quoted: mek });
            } catch (error) {
                console.error(`Failed to send message to ${participant.id}:`, error);
            }
        }

        reply(`📢 *Message Broadcasted To All Members of Group: ${groupMetadata.subject}*`);
    } catch (error) {
        console.error("Error fetching group metadata or sending messages:", error);
        reply("❌ *Failed to fetch group or send messages. Ensure the group JID is correct.*");
    }
});
