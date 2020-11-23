module.exports = {
  command: "holo",
  description: "Gets the URL of a holo image/gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.holo();
    return {
      send: true,
      result: url,
    };
  },
};
