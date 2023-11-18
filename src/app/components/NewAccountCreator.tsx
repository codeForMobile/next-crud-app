'use client'
import { createAccount } from '@/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

type Props = {}

const NewAccountCreator: React.FC<Props> = () => {
  const [editMode, setEditMode] = useState(false)
  
  if (!editMode) return <button 
  className='text-left'
  onClick={() => {setEditMode(true)}}
  >+ New Account</button>
  
  return <form 
  action={createAccount}
  className='flex flex-wrap gap-1'
  onSubmit={() => setEditMode(false)}
  >
    <Input 
    type="text" 
    placeholder='Account Name' 
    className='text-slate-900'
    name='name'
    />
    <Button type='submit'
    >Create</Button>
    <Button onClick={() => setEditMode(false)}>Cancel</Button>
  </form>
}

export default NewAccountCreator