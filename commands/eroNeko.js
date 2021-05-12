export const command = "eroNeko";
export const description = "Gets a NSFW URL of eroNeko image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.eroNeko();
  return {
    send: true,
    result: url,
  };
}
