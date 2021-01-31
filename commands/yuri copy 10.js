module.exports = {
  command: "yuri",
  description: "Gets the URL of a yuri image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.yuri();
    return {
      send: true,
      result: url,
    };
  },
};
