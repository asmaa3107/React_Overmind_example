export type university = {
  name: string;
  country: string;
  web_pages: []
};
export type State = {
  isLoadingPosts: boolean;
  unis: university[];
};
//set default valuse state
export const state: State = {
  isLoadingPosts: false,
  unis: []
};
