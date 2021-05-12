export const command = "gecg";
export const description = "Gets the URL of a gecg (genetically engineered catgirl) image.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.gecg();
  return {
    send: true,
    result: url,
  };
}
