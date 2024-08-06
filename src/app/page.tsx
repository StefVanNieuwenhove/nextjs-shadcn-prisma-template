import { Button } from '@/components/ui/button';
import prisma from '@/db/prisma';
import { User } from '@prisma/client';

export default async function Home() {
  const users: User[] = await prisma.user.findMany();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button>Click me</Button>
      <div>
        <h1>Users</h1>
        <ul>
          {users ? (
            users.map((user) => <li key={user.id}>{user.name}</li>)
          ) : (
            <li>db not working correctly</li>
          )}
        </ul>
      </div>
    </main>
  );
}
