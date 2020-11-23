module.exports = {
  command: "foxGirl",
  description: "Gets the URL of a fox girl image/gif.",
  nsfw: true,
  executor: async (args, nekos) => {
    const { url } = await nekos.sfw.foxGirl();
    return {
      send: true,
      result: url,
    };
  },
};
