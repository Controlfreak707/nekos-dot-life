export const command = "boobs";
export const description = "Gets a NSFW URL of a boobs image or gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.boobs();
  return {
    send: true,
    result: url,
  };
}
