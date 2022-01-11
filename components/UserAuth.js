import { useSession } from 'next-auth/react'
import { signIn, signOut } from "next-auth/react"

export default function UserAuth() {
    const { data: session, status } = useSession();
    console.log(session);
    if (!session) {
        return (
            <div className='bg-slate-800 flex justify-around text-blue-100 p-2'>

                <button onClick={() => signIn("google")}>Sign in with Google</button>
            </div>
        )
    }
    return (
        <div className='
        bg-slate-800 flex justify-around text-blue-100 p-2
        '>
            <h1>Hello {session.user.name}</h1>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}