'use client'

import { getContactById } from '@/services/contactService'
import React from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'

interface Params {
  params: {
    id: string
  }
}

const ViewContact = ({ params }: Params) => {
  const { data, isLoading, isError, error } = useQuery<Contact, Error>(['contact', params.id], () => getContactById(params.id))

	if(isLoading) {
		<h2>Loading...</h2>
	}

	if (isError) {
		<h2>{error as any}</h2>
	}

  return (
		<div className='m-10'>
			<h1 className='mb-2 text-2xl font-bold'>
				{data?.firstname} | {data?.lastname}
			</h1>
			<p>Email: {data?.email}</p>
			<p>Phone: {data?.phone}</p>
			<p>Address: {data?.address}</p>
			<Link href='/' className='text-blue-500 underline underline-offset-2 cursor-pointer'>return to contact list</Link>
		</div>
	)
}

export default ViewContact
