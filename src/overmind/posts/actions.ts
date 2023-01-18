import { Context } from "../index";

export const getAllAction = async (context: Context) => {
  try {
    context.state.posts.isLoading = true;
    const result = await context.effects.posts.httpApi.getAll();
    context.state.posts.posts=result;
    context.state.posts.isLoading = false;
    return result;
  } catch (err: any) {
    console.error("error >>" + err);
  }
};
