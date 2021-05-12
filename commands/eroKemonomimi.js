export const command = "eroKemonomimi";
export const description = "Gets a NSFW URL of eroKemonomimi image/gif";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.nsfw.eroKemonomimi();
  return {
    send: true,
    result: url,
  };
}
