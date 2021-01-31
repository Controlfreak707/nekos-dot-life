module.exports = {
  command: "feetgif",
  description: "Gets the URL of a feetGif image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.feetGif();
    return {
      send: true,
      result: url,
    };
  },
};
