export const command = "keta";
export const description = "Gets a NSFW URL of keta image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.keta();
  return {
    send: true,
    result: url,
  };
}
