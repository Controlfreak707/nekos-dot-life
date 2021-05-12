export const command = "foxGirl";
export const description = "Gets the URL of a fox girl image/gif.";
export const nsfw = true;
export async function executor(args, nekos) {
  const { url } = await nekos.sfw.foxGirl();
  return {
    send: true,
    result: url,
  };
}
