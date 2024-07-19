export type AuthContextType = {
  //user Logged in Context 
  username: string | null;
  loggedInUserID: string | null;
  isLoggedIn: boolean;
  loaded: boolean;
  //Divvy logged in Context
  login?: (payload: { username: string; password: string }) => Promise<void>;
  register?: (payload: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
};