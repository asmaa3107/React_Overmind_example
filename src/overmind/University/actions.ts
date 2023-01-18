import { Context } from "../index";

export const getAllAction = async (context: Context) => {
  try {
    context.state.uins.isLoadingPosts = true;
    const result = await context.effects.uins.httpApi.getAll();
    context.state.uins.unis=result;
    context.state.uins.isLoadingPosts = false;
    return result;
  } catch (err: any) {
    console.error("error >>" + err);
  }
};
