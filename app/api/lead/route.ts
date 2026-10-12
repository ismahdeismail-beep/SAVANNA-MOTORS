import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, details } = await req.json()

    if (!message || (!email && !phone)) {
      return NextResponse.json(
        { error: "A message and a contact (email or phone) are required" },
        { status: 400 }
      )
    }

    // Simple response - in production, write to Supabase or a database
    return NextResponse.json(
      { success: true, received: { name: name ?? "Website lead", email, phone, message, details } },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
