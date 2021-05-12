export const command = "trap";
export const description = "Gets a NSFW URL of trap image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.trap();
  return {
    send: true,
    result: url,
  };
}
