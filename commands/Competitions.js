const {
    GetCompetitions
} = require("../services/Competitions");




const HandleCompetitionsCommand = async (interaction) => {
    const subCommand = interaction.options._subcommand;
    const result = await GetCompetitions(subCommand);
    const array = result.data;
    if (!array || array.length === 0) {
        await interaction.reply('No competitions to be found!')
    } else {
        let resultString = '';
        array.slice(0,5).forEach((item, index) => {
            resultString += `${index+1}. ${item.name} -  Start Time : ${new Date(item.start_time)} - End Time : ${new Date(item.end_time)} - Link : ${item.url}\n`;
        })
        await interaction.reply(resultString);
    }

}


module.exports = HandleCompetitionsCommand;