module.exports = {
  command: "cumsluts",
  description: "Gets a NSFW URL of a cumslut image or gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.cumsluts();
    return {
      send: true,
      result: url,
    };
  },
};
