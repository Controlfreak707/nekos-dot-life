module.exports = {
  command: "kemonomimi",
  description: "Gets a URL of a kemonomimi image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.kemonomimi();
    return {
      send: true,
      result: url,
    };
  },
};
