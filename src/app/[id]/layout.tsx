import React from 'react'

interface Props {
	children: React.ReactNode
}

export const metadata = {
	title: 'View Contact',
}

const ViewContactLayout = ({ children }: Props) => {
	return <>{children}</>
}

export default ViewContactLayout