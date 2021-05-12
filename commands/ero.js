export const command = "ero";
export const description = "Gets a NSFW URL of ero image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.ero();
  return {
    send: true,
    result: url,
  };
}
