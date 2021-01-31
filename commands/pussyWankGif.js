module.exports = {
  command: "pussyWankGif",
  description: "Gets the URL of a pussyWankGif image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.pussyWankGif();
    return {
      send: true,
      result: url,
    };
  },
};
