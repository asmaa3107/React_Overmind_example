import { university } from "./states";
import { Overmind } from "overmind";
import { Context } from "../index";

export const getAllAction = async (context: Context) => {
  try {
    context.state.isLoadingPosts = true;
    const result = await context.effects.httpApi.getAll();
    context.state.unis=result;
    context.state.isLoadingPosts = false;
    return result;
  } catch (err: any) {
    console.error("error >>" + err);
  }
};
