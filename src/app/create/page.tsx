'use client'

import { createContactSchema } from '@/validations/contact'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query'
import { createContact } from '@/services/contactService'
import { useRouter } from 'next/navigation'

const CreateContact = () => {
  const router = useRouter()

  const { isSuccess, isError, error, mutateAsync } = useMutation<
		CreateContactSchema,
		Error,
		CreateContactSchema
	>(createContact)

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateContactSchema>({
    resolver: zodResolver(createContactSchema)
  })

  const onSubmit = async (data: CreateContactSchema) => {
    await mutateAsync(data)
  }

  useEffect(() => {
    if(isSuccess) {
      router.push('/')
    }
  }, [isSuccess])

  return (
    <div className='m-10'>
      <h1 className='mb-2 text-2xl font-bold'>Create New Contact</h1>
      {isError && (
        <span className='text-red-600'>
          {error.message}
        </span>
      )}
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
            className='py-2 px-6 rounded-md shadow-md bg-green-600 text-white'
          >
            create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateContact
