export const command = "holoNSFW";
export const description = "Gets a NSFW URL of holo image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.holo();
  return {
    send: true,
    result: url,
  };
}
