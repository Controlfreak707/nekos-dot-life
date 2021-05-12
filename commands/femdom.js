export const command = "femdom";
export const description = "Gets a NSFW URL of an/a image/gif of femdom";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.femdom();
  return {
    send: true,
    result: url,
  };
}
