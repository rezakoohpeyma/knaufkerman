import { NextRequest, NextResponse } from "next/server";
import { formSchema } from "@/schema/formSchema";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = formSchema.parse(body);

    await sendEmail(data);

    return NextResponse.json({ message: "✅ ایمیل ارسال شد" });
  } catch (err: any) {
    return NextResponse.json(
      { errors: err.errors || err.message },
      { status: 400 }
    );
  }
}
