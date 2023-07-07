import React from 'react'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Edit Contact'
}

const EditContactLayout = ({ children }: Props) => {
	return <>{children}</>
}

export default EditContactLayout
