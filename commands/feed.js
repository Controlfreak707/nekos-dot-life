module.exports = {	export const command = "feed";
  command: "feed",	export const description = "Gets the URL of a feeding image/gif.";
  description: "Gets the URL of a feeding image/gif.",	export async function executor(args, nekos) {
  executor: async (args, nekos) => {	  const { url } = await nekos.sfw.feed();
    const { url } = await nekos.sfw.feed();	  return {
    return {	    send: true,
      send: true,	    result: url,
      result: url,	  };
    };	}
  },	
};