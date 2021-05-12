export const command = "tickle";
export const description = "Gets the URL of a tickle image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.tickle();
  return {
    send: true,
    result: url,
  };
}
