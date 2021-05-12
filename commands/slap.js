export const command = "slap";
export const description = "Gets the URL of a slap image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.slap();
  return {
    send: true,
    result: url,
  };
}
