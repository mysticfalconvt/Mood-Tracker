import Head from 'next/head'
import YearlyChart from '../components/YearlyChart'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-500">
      <Head>
        <title>Mood Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          Track your days.  Improve your Year.
        </h1>
        <section
          className='flex justify-start items-start '
        >
          <YearlyChart />
        </section>
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
      {/* <button onClick={() => updateUser({ testInfo: 'test' }, session)}>testing</button> */}
    </div>
  )
}

function updateUser(user: { testInfo: string }, session: any) {
  return fetch('/api/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(user)
  })
}