import { useSession } from 'next-auth/react'

export default function UserAuth() {
    const { data: session, status } = useSession();
    console.log(session);
    if (!session) {
        return (
            <div className='bg-slate-800 flex justify-around text-blue-100 p-2'>

                <a href="/api/auth/signin">Sign in</a>
            </div>
        )
    }
    return (
        <div className='
        bg-slate-800 flex justify-around text-blue-100 p-2
        '>
            <h1>Hello {session.user.name}</h1>
            <a href="/api/auth/signout">Sign out</a>
        </div>
    )
}