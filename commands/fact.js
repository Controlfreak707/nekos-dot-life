module.exports = {
  command: "fact",
  description: "Gets the URL of a fox fact image/gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.fact();
    return {
      send: true,
      result: url,
    };
  },
};
