export const command = "smug";
export const description = "Gets the URL of a smug image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.smug();
  return {
    send: true,
    result: url,
  };
}
