module.exports = {
  command: "why",
  description: "Gets the URL of a fox why image/gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.why();
    return {
      send: true,
      result: url,
    };
  },
};
