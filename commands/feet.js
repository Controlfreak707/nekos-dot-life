export const command = "feet";
export const description = "Gets a NSFW URL of feet image";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.feet();
  return {
    send: true,
    result: url,
  };
}
