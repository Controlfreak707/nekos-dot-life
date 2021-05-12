export const command = "kiss";
export const description = "Gets the URL of a kiss image/gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.kiss();
  return {
    send: true,
    result: url,
  };
}
