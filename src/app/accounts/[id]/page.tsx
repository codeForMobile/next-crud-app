import React from 'react'
import { db } from '@/app/modules/db'
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
  params: {
    id: string
  }
}

const AccountsDetailsPage: React.FC<Props> = async ({ params }) => {
  const account = await db.account.findUniqueOrThrow({
    where: { id : params.id},
    select: { id: true, name: true, workSessions: {
      select: {
        id: true,
        description: true,
        startsOn: true, 
        hours: true
      }, 
      orderBy: {
        startsOn: 'desc'
      }
    }}
  })
  return (
    <div className='p-8'>
    <h1 className='font-bold mb-8 text-lg'>{account.name}</h1>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right w-[140px]">Hours</TableHead>
          <TableHead/>
        </TableRow>
      </TableHeader>

      <TableBody>
      <TableRow>
        <TableCell className='font-medium'>
          <Input type='date' name='startsOn'/>
        </TableCell>
        <TableCell>
          <Input name='description'/>
        </TableCell>
        <TableCell className='text-right'>
          <Input type='number' name='hours'/>
        </TableCell>
        <TableCell>
          <Button>Add</Button>
        </TableCell>
      </TableRow>  
      {account.workSessions.map(session => (  
        <TableRow key={session.id}>
          <TableCell className="font-medium">{session.startsOn?.toISOString()}</TableCell> 
          <TableCell>{session.description}</TableCell>
          <TableCell className="text-right">{session.hours}</TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
    </div>
  )
}

export default AccountsDetailsPage