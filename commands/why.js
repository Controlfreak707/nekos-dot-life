export const command = "why";
export const description = "Gets a URL of why image/gif";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.why();
  return {
    send: true,
    result: url,
  };
}