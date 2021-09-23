const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    ALL_OPTIONS_FOR_COMPETITIONS
} = require('../services/Competitions');




const ConfigureCompetitionCommands = () => {
    let CompetitionCommands = new SlashCommandBuilder()
        .setName("competitions")
        .setDescription(
            "Details regarding the latest competitions")

    ALL_OPTIONS_FOR_COMPETITIONS.forEach(comp => {
        CompetitionCommands.addSubcommand(command =>
            command.setName(comp)
            .setDescription(`Get competitions for ${comp}`))
    })
    return CompetitionCommands;
}



 module.exports = ConfigureCompetitionCommands; 