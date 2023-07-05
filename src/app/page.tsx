'use client'

import { deleteContact, getContacts } from '@/services/contactService'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '@/providers/ClientProviders'

const ContactList = () => {
  const contactsQuery = useQuery<Contact[], Error>({
		queryKey: ['contacts'],
		queryFn: getContacts,
	})

	const { isSuccess, isError, error, mutateAsync } = useMutation<any, Error, string>(deleteContact)

	useEffect(() => {
		if(isSuccess) {
			queryClient.invalidateQueries(['contacts'])
		}
	}, [isSuccess])

  return (
		<div className='m-10'>
			<h1 className='mb-2 text-2xl font-bold'>Contact List</h1>
			{isError && (
				<span className='block my-2 text-red-600'>{error.message}</span>
			)}
			<Link
				href='/create'
				className='text-blue-400 underline underline-offset-2'
			>
				create new contact
			</Link>
			{contactsQuery.isError && (
				<span className='block my-2 text-red-600'>{contactsQuery.error.message}</span>
			)}
			{contactsQuery.isLoading && (
				<span className='block my-2 text-sky-600'>Loading...</span>
			)}
			{contactsQuery.isSuccess && (
				<div className='mt-3 grid grid-cols-4 gap-8 whitespace-nowrap'>
					{contactsQuery.data.map((contact: Contact) => (
						<div
							key={contact._id}
							className='bg-slate-50 rounded-md shadow-lg p-8'
						>
							<p>
								<strong>First Name:</strong> {contact.firstname}
							</p>
							<p>
								<strong>Last Name:</strong> {contact.lastname}
							</p>
							<p>
								<strong>Email:</strong> {contact.email}
							</p>
							<p>
								<strong>Phone:</strong> {contact.phone}
							</p>
							<p>
								<strong>Address:</strong> {contact.address}
							</p>
							<span onClick={async () => {await mutateAsync(contact._id)}} className='text-red-600 underline underline-offset-2 cursor-pointer'>delete</span>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default ContactList
