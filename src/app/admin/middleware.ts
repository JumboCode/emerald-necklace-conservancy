import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/admin"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    console.log("user ", user);
    console.log("pwd ", pwd);

    const validUser = process.env.BASIC_AUTH_USER;
    const validPassWord = process.env.BASIC_AUTH_PASSWORD;

    if (user === validUser && pwd === validPassWord) {
      console.log("Logged in!")
      return NextResponse.next();
    }
  }

  url.pathname = "/";

  return NextResponse.rewrite(url);
}