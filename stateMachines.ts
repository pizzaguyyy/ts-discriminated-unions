function exhaustiveCheck(param: never): never {
  throw new Error("Unhandled case: " + param);
}

type AuthState =
  | { state: "loggedOut" }
  | { state: "loggingIn" }
  | { state: "loggedIn"; user: string };

function printAuthState(auth: AuthState) {
  switch (auth.state) {
    case "loggedOut":
      console.log("User is logged out");
      break;
    case "loggingIn":
      console.log("User is logging in...");
      break;
    // case "loggedIn":
    //   console.log("Welcome,", auth.user);
    //   break;
    default:
      exhaustiveCheck(auth);
  }
}

/*
    ✅ Key takeaway: Ensures all possible cases are handled.
*/
