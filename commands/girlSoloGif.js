module.exports = {
  command: "girlSoloGif",
  description: "Gets the URL of a girlSoloGif image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.girlSoloGif();
    return {
      send: true,
      result: url,
    };
  },
};
