module.exports = {
  command: "eroFeet",
  description: "Gets a NSFW URL of eroFeet image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroFeet();
    return {
      send: true,
      result: url,
    };
  },
};
