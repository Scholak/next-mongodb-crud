interface Contact {
	_id: string
	firstname: string
	lastname: string
	email: string
	phone: string
	address: string
}

interface CreateContactSchema {
	firstname: string
	lastname: string
	email: string
	phone: string
	address: string
}

interface EditContactSchema {
	firstname: string
	lastname: string
	email: string
	phone: string
	address: string
}