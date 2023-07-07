import React from 'react'

interface Props {
	children: React.ReactNode
}

export const metadata = {
	title: 'Create Contact',
}

const CreateContactLayout = ({ children }: Props) => {
	return <>{children}</>
}

export default CreateContactLayout
