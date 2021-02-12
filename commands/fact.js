module.exports = {
  command: "fact",
  description: "Gets a URL of fact image/gif",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.fact();
    return {
      send: true,
      result: url,
    };
  },
};
