export type post = {
  title: string;
  id: string;

};
export type State = {
  isLoading: boolean;
  posts: post[];
};
//set default valuse state
export const state: State = {
  isLoading: false,
  posts: []
};
