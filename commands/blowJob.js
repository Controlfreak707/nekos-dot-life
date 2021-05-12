export const command = "blowJob";
export const description = "Gets a NSFW URL of a blowJob image or gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.blowJob();
  return {
    send: true,
    result: url,
  };
}
