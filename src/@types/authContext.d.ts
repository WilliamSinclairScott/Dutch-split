export type AuthContextType = {
  //user Logged in Context 
  username: string | null;
  loggedInUserID: string | null;
  isLoggedIn: boolean;
  associatedDivvies: string[];
  //Divvy logged in Context
  divvyID: string | null;
  // login?: (payload: { username: string; password: string }) => Promise<void>;
  // register?: (payload: {
  //   username: string;
  //   email: string;
  //   password: string;
  // }) => Promise<void>;
};