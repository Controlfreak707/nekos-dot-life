export const command = "wallpaper";
export const description = "Gets the URL of a wallpaper.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.wallpaper();
  return {
    send: true,
    result: url,
  };
}
