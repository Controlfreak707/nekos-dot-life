module.exports = {
  command: "eroFeet",
  description: "Gets the URL of a eroFeet image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroFeet();
    return {
      send: true,
      result: url,
    };
  },
};
