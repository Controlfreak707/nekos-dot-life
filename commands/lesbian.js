export const command = "lesbian";
export const description = "Gets a NSFW URL of lesbian image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.lesbian();
  return {
    send: true,
    result: url,
  };
}
