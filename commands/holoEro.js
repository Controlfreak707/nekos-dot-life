module.exports = {
  command: "holoEro",
  description: "Gets the URL of a holoEro image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.holoEro();
    return {
      send: true,
      result: url,
    };
  },
};
