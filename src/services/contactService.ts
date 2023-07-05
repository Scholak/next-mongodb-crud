import axios from "axios"

export const getContacts = async (): Promise<Contact[]> => {
	const res = await axios.get('/api/contacts')
	return res.data
}

export const createContact = async (contact: CreateContactSchema): Promise<Contact> => {
	try {
		const res = await axios.post('/api/contacts', contact)
		return res.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export const editContact = async (id: string, contact: EditContactSchema): Promise<Contact> => {
	try {
		const res = await axios.put(`/api/contacts/${id}`, contact)
		return res.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export const deleteContact = async (id: string): Promise<any> => {
	try {
		const res = await axios.delete(`/api/contacts/${id}`)
		return res.data
	} catch (error: any) {
		throw new Error(error.message)
	}
}