import mongoose, { Schema } from 'mongoose'

interface Contact {
	firstname: string
	lastname: string
	email: string
	phone: string
	address: string
}

const ContactSchema = new Schema<Contact>(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
	}
)

export default mongoose.models.contacts || mongoose.model<Contact>('contacts', ContactSchema)