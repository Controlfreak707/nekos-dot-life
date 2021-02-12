module.exports = {
  command: "gasm",
  description: "Gets a NSFW URL of gasm image/gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.gasm();
    return {
      send: true,
      result: url,
    };
  },
};
