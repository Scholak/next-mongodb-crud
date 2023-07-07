'use client'

import { editContactSchema } from '@/validations/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

interface Params {
	contact: Contact
	mutateAsync: any
}

const EditContactForm = ({ contact, mutateAsync }: Params) => {
  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EditContactSchema>({
		resolver: zodResolver(editContactSchema),
		defaultValues: {
			firstname: contact.firstname,
			lastname: contact.lastname,
			email: contact.email,
			phone: contact.phone,
			address: contact.address,
		},
	})

	const onSubmit = async (data: EditContactSchema) => {
		await mutateAsync({ id: contact._id, contact: data } as any)
	}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-80'>
      <div className='mb-3'>
        <label htmlFor='firstname' className='block mb-1'>
          First Name
        </label>
        <input
          type='text'
          className='w-full border border-slate-700 rounded-md p-1'
          {...register('firstname')}
        />
        {errors.firstname && (
          <span className='text-red-600'>{errors.firstname.message}</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='lastname' className='block mb-1'>
          Last Name
        </label>
        <input
          type='text'
          className='w-full border border-slate-700 rounded-md p-1'
          {...register('lastname')}
        />
        {errors.lastname && (
          <span className='text-red-600'>{errors.lastname.message}</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='block mb-1'>
          Email
        </label>
        <input
          type='email'
          className='w-full border border-slate-700 rounded-md p-1'
          {...register('email')}
        />
        {errors.email && (
          <span className='text-red-600'>{errors.email.message}</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='phone' className='block mb-1'>
          Phone
        </label>
        <input
          type='text'
          className='w-full border border-slate-700 rounded-md p-1'
          {...register('phone')}
        />
        {errors.phone && (
          <span className='text-red-600'>{errors.phone.message}</span>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='phone' className='block mb-1'>
          Address
        </label>
        <textarea
          className='w-full border border-slate-700 rounded-md p-1'
          {...register('address')}
        ></textarea>
        {errors.address && (
          <span className='text-red-600'>{errors.address.message}</span>
        )}
      </div>
      <div>
        <button
          type='submit'
          className='py-2 px-6 rounded-md shadow-md bg-yellow-600 text-white'
        >
          edit
        </button>
      </div>
    </form>
	)
}

export default EditContactForm
