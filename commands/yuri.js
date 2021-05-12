export const command = "yuri";
export const description = "Gets a NSFW URL of yuri image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.yuri();
  return {
    send: true,
    result: url,
  };
}
