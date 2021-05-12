export const command = "neko";
export const description = "Gets the URL of a neko image.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.neko();
  return {
    send: true,
    result: url,
  };
}
