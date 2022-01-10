import UserAuth from "./UserAuth";



export default function Layout({ children }) {
    return (
        <>
            <UserAuth></UserAuth>
            <main>
                {children}
            </main>

        </>
    )
}