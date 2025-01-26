export const publicRoutes = ["/", "/auth/new-verification"];

//These Routes will redirect logged user to settings
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

// routes that start with /api/auth is used to authenticate user
export const apiAuthPrefix = "/api/auth";
//the default redirect after login in
export const DEFAULT_LOGIN_REDIRECT = "/settings";
