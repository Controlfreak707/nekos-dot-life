export const command = "holo";
export const description = "Gets the URL of a holo image/gif.";
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.holo();
  return {
    send: true,
    result: url,
  };
}
