export const command = "bJ";
export const description = "Gets a NSFW URL of a bJ image or gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.bJ();
  return {
    send: true,
    result: url,
  };
}
