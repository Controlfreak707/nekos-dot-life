export const command = "anal";
export const description = "Gets a NSFW URL of an anal image or gif.";
export const nsfw = true;
export async function executor(nekos) {
  const { url } = await nekos.nsfw.anal();
  return {
    send: true,
    result: url,
  };
}
