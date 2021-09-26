const HandleBotCommands = async (interaction) => {
    if (interaction.options._subcommand === 'introduce') {
        await interaction.reply(
            `Hello! I am Botmann, and I suck ass! But I can still do things, some  
            of them include setting a reminder for you, all you have to do is mention me, and follow the particular format
             -- @botmann reminder, <title> , <description>, <date in format YYYY MM DD HH MM> --
             I can do other cool shit, some of them include showing the latest news, 
             fetching the latest coding competitions you have, and also some music!
             The music option would only be available if you are able to get 100 points (wait there are points, wtf)
             Every reminder that you set can be either done or undone, if it is done, then you can mark it as done,
             you would gain 5 points, or you're just a dumbass who can't do shit, like me.
            `
        )
    }else{
        await interaction.reply(`
        Wrong commands! I don't get this shit, how can
        you be so dumb, all you had to do was put in the right
        command you dumbass...
        `)
    }

}

module.exports = HandleBotCommands;