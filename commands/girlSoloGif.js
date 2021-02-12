module.exports = {
  command: "soloGirlGif",
  description: "Gets a NSFW URL of solo girl gif",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.girlSoloGif();
    return {
      send: true,
      result: url,
    };
  },
};
