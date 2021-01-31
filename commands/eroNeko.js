module.exports = {
  command: "eroneko",
  description: "Gets the URL of a eroNeko image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroNeko();
    return {
      send: true,
      result: url,
    };
  },
};
