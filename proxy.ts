import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/i18n-config";
import { defaultLocale } from "@/constants/locales";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Find the actual locale in the path
  const currentLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // 2. If the URL has a locale, pass it to the Server Components via REQUEST headers
  if (currentLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-locale", currentLocale);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // 3. Redirect if there is no locale in the URL
  const headers = {
    "accept-language":
      request.headers.get("accept-language") || "en-US,en;q=0.5",
  };
  const languages = new Negotiator({ headers }).languages();
  const fallbackLocale = match(languages, i18n.locales, defaultLocale);

  request.nextUrl.pathname = `/${fallbackLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Exclude static files, images, favicons, and APIs from triggering the proxy
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
