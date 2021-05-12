export const command = "eroYuri";
export const description = "Gets a NSFW URL of eroYuri image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.eroYuri();
  return {
    send: true,
    result: url,
  };
}
