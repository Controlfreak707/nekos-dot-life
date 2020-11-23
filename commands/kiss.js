module.exports = {
  command: "kiss",
  description: "Gets the URL of a kiss image/gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.kiss();
    return {
      send: true,
      result: url,
    };
  },
};
