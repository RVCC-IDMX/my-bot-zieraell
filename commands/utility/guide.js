const { SlashCommandBuilder, ChannelType, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('guide')
        .setDescription('Replies with some buttons!'),
	async execute(interaction) {
        const test = new ButtonBuilder()
            .setCustomId('test-button')
            .setLabel('Test')
            .setStyle(ButtonStyle.Primary)

        const embed = new ButtonBuilder()
            .setCustomId('embed-button')
            .setLabel('Embed')
            .setStyle(ButtonStyle.Secondary)
        
        const link = new ButtonBuilder()
            .setLabel('Link to Repo')
            .setURL('https://github.com/RVCC-IDMX/my-bot-zieraell')
            .setStyle(ButtonStyle.Link)

        const row = new ActionRowBuilder()
            .addComponents(test, embed, link)

        await interaction.reply({
            content: `Here's some buttons!`,
            components: [row]
        })
	},
};