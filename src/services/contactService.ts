import axios from "axios"

export const getContacts = async (): Promise<Contact[]> => {
	const res = await axios.get('/api/contacts')
	return res.data
}

export const getContactById = async (id: string): Promise<Contact> => {
	const res = await axios.get(`/api/contacts/${id}`)
	return res.data
}

export const createContact = async (contact: CreateContactSchema): Promise<Contact> => {
		const res = await axios.post('/api/contacts', contact)
		return res.data
}

export const editContact = async (id: string, contact: EditContactSchema): Promise<Contact> => {
	const res = await axios.put(`/api/contacts/${id}`, contact)
	return res.data
}

export const deleteContact = async (id: string): Promise<any> => {
		const res = await axios.delete(`/api/contacts/${id}`)
		return res.data
}