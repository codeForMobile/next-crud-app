'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

type Props = {}

const NewAccountCreator: React.FC<Props> = () => {
  const [editMode, setEditMode] = useState(false)
  
  if (editMode) return <button>+ New Account</button>
  
  return <form className='flex flex-wrap gap-1'>
    <Input type="text" placeholder='Account Name' className='text-slate-900'/>
    <Button onClick={() => setEditMode(true)}>Create</Button>
    <Button onClick={() => setEditMode(false)}>Cancel</Button>
  </form>
}

export default NewAccountCreator