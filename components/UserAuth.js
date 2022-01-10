import { useSession } from 'next-auth/react'

export default function UserAuth() {
    const { data: session, status } = useSession();
    console.log(session);
    if (!session) {
        return <a href="/api/auth/signin">Sign in</a>;
    }
    return (
        <div>
            <h1>UserAuth</h1>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.name}</p>
            <p>id {session?.id}</p>
        </div>
    )
}