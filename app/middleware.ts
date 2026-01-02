import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const host = req.headers.get("host");

    if (host === "cdn.ddbrother.me") {
        return NextResponse.rewrite(
            new URL(`/cdn${req.nextUrl.pathname}`, req.url)
        );
    }

    if (host === "api.ddbrother.me") {
        return NextResponse.rewrite(
            new URL(`/api/v0${req.nextUrl.pathname}`, req.url)
        );
    }

    return NextResponse.next();
}
