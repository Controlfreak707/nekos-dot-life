module.exports = {
  command: "cumArts",
  description: "Gets a NSFW URL of a cum art image or gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.cumArts();
    return {
      send: true,
      result: url,
    };
  },
};
