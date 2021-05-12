export const command = "pussy";
export const description = "Gets a NSFW URL of pussy image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.pussy();
  return {
    send: true,
    result: url,
  };
}
