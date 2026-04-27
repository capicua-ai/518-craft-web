import { withSoupedAuth } from "@souped-tools/auth-nextjs/proxy";
import { NextResponse } from "next/server";

const authEnabled = process.env.SOUPED_AUTH_ENABLED === "true";

const passthrough = () => NextResponse.next();

// When SOUPED_AUTH_ENABLED=false (default in the boilerplate), the proxy is
// pure passthrough — every route is public. To turn on Souped login, set the
// flag to "true" in your env and fill the SOUPED_* credentials.
//
// IMPORTANT: when SOUPED_AUTH_ENABLED=true, this proxy ONLY runs on the
// routes listed in `config.matcher` below. The default below is an empty
// list — add the routes you want to protect (e.g. ["/admin/:path*",
// "/api/admin/:path*"]). Leave it empty if you don't want any route
// behind login. To protect every non-static route, use:
// ["/((?!_next/static|_next/image|favicon.ico).*)"].
//
// If you scaffolded this app via the Souped orchestrator and asked for
// auth, the auth-scaffolder agent will fill `matcher` for you — don't
// edit it before the agent runs.
export const proxy = authEnabled ? withSoupedAuth(passthrough) : passthrough;

export const config = {
  matcher: [],
};
