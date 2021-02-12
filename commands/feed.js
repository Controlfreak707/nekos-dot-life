module.exports = {
  command: "feed",
  description: "Gets the URL of a feeding image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.feed();
    return {
      send: true,
      result: url,
    };
  },
};