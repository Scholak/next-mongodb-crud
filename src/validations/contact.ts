import { ZodType, z } from "zod";

export const createContactSchema: ZodType<CreateContactSchema> = z.object({
  firstname: z.string().nonempty().min(2),
  lastname: z.string().nonempty().min(2),
  email: z.string().nonempty().email(),
  phone: z.string().nonempty(),
  address: z.string().nonempty(),
})

export const editContactSchema: ZodType<EditContactSchema> = z.object({
	firstname: z.string().nonempty().min(2),
	lastname: z.string().nonempty().min(2),
	email: z.string().nonempty().email(),
	phone: z.string().nonempty(),
	address: z.string().nonempty(),
})