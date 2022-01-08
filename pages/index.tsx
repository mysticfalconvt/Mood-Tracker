import Head from 'next/head'
import YearlyChart from '../components/YearlyChart'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mood Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
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
    </div>
  )
}
