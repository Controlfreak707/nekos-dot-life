module.exports = {
  command: "blowJob",
  description: "Gets a NSFW URL of a blowJob image or gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.blowJob();
    return {
      send: true,
      result: url,
    };
  },
};
