export const command = "fact";
export const description = "Gets a URL of fact image/gif";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.fact();
  return {
    send: true,
    result: url,
  };
}
