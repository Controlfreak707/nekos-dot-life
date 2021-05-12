export const command = "kemonomimiNSFW";
export const description = "Gets a NSFW URL of kemonomimi image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.kemonomimi();
  return {
    send: true,
    result: url,
  };
}
