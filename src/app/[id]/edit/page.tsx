'use client'

import EditContactForm from '@/components/EditContactForm'
import { editContact, getContactById } from '@/services/contactService'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import Link from 'next/link'

interface Params {
	params: {
		id: string
	}
}

const EditContact = ({ params }: Params) => {
	const router = useRouter()

	const { data, isLoading } = useQuery<Contact, Error>(
		['contact', { id: params.id }],
		() => getContactById(params.id)
	)

	const { isSuccess, isError, error, mutateAsync } = useMutation<
		Contact,
		Error,
		any
	>(({ id, contact }) => editContact(id, contact))

		useEffect(() => {
			if (isSuccess) {
				router.push('/')
			}
		}, [isSuccess])

	if(isLoading) {
		return <h2>Loading...</h2>
	}

	return (
		<div className='m-10'>
			<h1 className='mb-2 text-2xl font-bold'>Edit Contact</h1>
			<Link href='/' className='text-blue-500 underline underline-offset-2 cursor-pointer'>return to contact list</Link>
			{isError && <span className='text-red-600'>{error.message}</span>}
			<EditContactForm contact={data as Contact} mutateAsync={mutateAsync} />
		</div>
	)
}

export default EditContact
