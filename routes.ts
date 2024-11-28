/**
 * An array of routs that are accessbile to the public
 * These routes do not require authentication
 */
export const publicRouts: string[] = ["/"];

/**
 * An array of routs that are used for authentication
 * These routes will redirect logged in users to /setting
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";