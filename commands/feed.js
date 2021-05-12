export const command = "feed";
export const description = "Gets the URL of a feeding image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.feed();
  return {
    send: true,
    result: url,
  };
}