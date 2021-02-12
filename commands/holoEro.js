module.exports = {
  command: "holoEro",
  description: "Gets a NSFW URL of holoEro image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.holoEro();
    return {
      send: true,
      result: url,
    };
  },
};
