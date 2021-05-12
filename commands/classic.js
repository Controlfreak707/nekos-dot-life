export const command = "classic";
export const description = "Gets a NSFW URL of a classic image or gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.classic();
  return {
    send: true,
    result: url,
  };
}
