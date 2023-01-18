import { Context } from "../index";

export const getAllAction = async (context: Context) => {
  try {
    context.state.isLoading = true;
    const result = await context.effects.httpApi.getAll();
    context.state.posts=result;
    context.state.isLoading = false;
    return result;
  } catch (err: any) {
    console.error("error >>" + err);
  }
};
