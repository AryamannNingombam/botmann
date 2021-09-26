const {
    SlashCommandBuilder
} = require('@discordjs/builders');




const ConfigureBotCommands = () => {
    return new SlashCommandBuilder()
        .setName("bot")
        .setDescription(
            "Get to know who I am!")
        .addSubcommand(command =>
            command.setName("introduce")
            .setDescription(
                'A brief description on me!'
            ))
}



module.exports = ConfigureBotCommands;