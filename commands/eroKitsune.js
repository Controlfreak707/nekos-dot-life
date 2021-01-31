module.exports = {
  command: "erokitsune",
  description: "Gets the URL of a eroKitsune image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.eroKitsune();
    return {
      send: true,
      result: url,
    };
  },
};
