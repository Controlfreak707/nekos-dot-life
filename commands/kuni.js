export const command = "kuni";
export const description = "Gets a NSFW URL of kuni image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.kuni();
  return {
    send: true,
    result: url,
  };
}
