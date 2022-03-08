const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]",
intents: "all"
})


require('./dashboard.js')(bot, 8080, './commands', 'WHATEVER YOU WANT AS USERNAME', 'WHATEVER YOU WANT AS PASSWORD')
bot.onMessage()
bot.onJoin()
bot.onLeave()
bot.onBanAdd() 
bot.onBanRemove()
bot.onInteractionCreate()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID],we are serving $serverCount]`
})

bot.variables({
cash: "0",
card:"0",
wchannel:"",
wmsg:"",
wimg:"",
wtitle:"",
lchannel:"",
lmsg:"",
limg:"",
ltitle:"",
prefix:"your prefix",
cchannel:"",
dchannel:"",
cbChannel:"",
dmessage:"",
tdescription:"",
temoji:"emoji id for the ticket",
})
bot.status({
text: "Bot's name | Serving: $serverCount servers", 
type: "LISTENING", 
})



bot.joinCommand({
  channel:"$getServerVar[wchannel]",
  code:`$title[1;$getServerVar[wtitle]]
$description[1;<@$authorID> $getServerVar[wmsg]$image[1;$getServerVar[wimg]]
$thumbnail[1;https://media.discordapp.net/attachments/944304101792034876/945397893366419557/image-removebg-preview.png]
$color[1;34c3eb]`
})

bot.leaveCommand({
  channel:"$getServerVar[lchannel]",
  code:`$title[1;$getServerVar[ltitle]]
$description[1;<@$authorID> $getServerVar[lmsg]$image[1;$getServerVar[limg]]
$thumbnail[1;https://media.discordapp.net/attachments/944304101792034876/945397893366419557/image-removebg-preview.png]
$color[1;34c3eb]`
})

bot.channelCreateCommand({ 
channel: "$getServerVar[cchannel]", 
code: `
$description[1;Channel Created:
$newChannel[name]
]
$color[1;34c3eb]

`
})

bot.channelDeleteCommand({
    channel: "$getServerVar[dchannel]",
    code: `
    $description[1;Channel Deleted:
$oldChannel[name]]
$color[1;34c3eb]
`
});



bot.command({
name: "<@CLIENT ID>",
code: `$title[1;BOT'S NAME]
$description[1;**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[1;34c3eb]
`,
nonPrefixed: true
})
 
bot.command({
name: "<@!947868201608437780>",
code: `$title[1;BOT'S NAME]
$description[1;**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[1;34c3eb]
`,
nonPrefixed: true
})
