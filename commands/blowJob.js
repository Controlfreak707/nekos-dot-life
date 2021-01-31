module.exports = {
  command: "blowjob",
  description: "Gets the URL of a blowJob image/gif.",
  executor: async (args, nekos) => {
    const { url } = await nekos.nsfw.blowJob();
    return {
      send: true,
      result: url,
    };
  },
};
