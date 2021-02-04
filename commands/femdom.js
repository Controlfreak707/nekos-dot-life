module.exports = {
  command: "femdom",
  description: "Gets a NSFW URL of an/a image/gif of femdom",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.femdom();
    return{
      send: true,
      result: url,
    };
  },
};
