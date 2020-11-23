module.exports = {
  command: "gecg",
  description: "Gets the URL of a gecg (genetically engineered catgirl) image.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.gecg();
    return {
      send: true,
      result: url,
    };
  },
};
