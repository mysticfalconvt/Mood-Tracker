import Head from 'next/head'
import DisplayYearChart from '../components/DisplayYearChart'
import { useSession } from 'next-auth/react'
import { randomYearDayValues } from '../lib/createBlankYear'
import NewUserView from '../components/NewUserView'

export default function Home() {
  const { data: session, status } = useSession()
  // console.log(session)
  console.log(status)


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-500">
      <Head>
        <title>Mood Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {!session && <NewUserView />}
        {/* {session && <DisplayYearChart yearData={[]} />} */}
      </main>

      <footer className="flex items-center justify-center w-full h-20 border-t">
        <a
          className="flex items-center justify-center"
          href="https://boskind.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boskind.tech
        </a>

      </footer>
    </div>
  )
}
