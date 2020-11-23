module.exports = {
  command: "neko",
  description: "Gets the URL of a neko image.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.neko();
    return {
      send: true,
      result: url,
    };
  },
};
