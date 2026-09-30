import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token, secretCode } = body || {};

        if (!token || !secretCode) {
            return NextResponse.json(
                { error: "Missing required fields (token, secretCode)." },
                { status: 400 }
            );
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://stream-flix-backend-production.up.railway.app";
        const apiUrl = `${baseUrl}/api/v1/users/web-delete-confirm`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, secretCode }),
        });

        // Some APIs might return non-JSON responses on error
        let data;
        try {
            data = await response.json();
        } catch (e) {
            data = { error: "Failed to parse response from server" };
        }

        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        console.error("DELETE_ACCOUNT_CONFIRM_PROXY_ERROR:", error);
        return NextResponse.json(
            { error: error?.message || "Internal server error" },
            { status: 500 }
        );
    }
}
