module.exports = {
  command: "kuni",
  description: "Gets the URL of a kuni image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.kuni();
    return {
      send: true,
      result: url,
    };
  },
};
