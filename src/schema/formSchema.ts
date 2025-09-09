import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل باید معتبر باشد"),
});

export type FormData = z.infer<typeof formSchema>;
