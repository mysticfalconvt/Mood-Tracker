import DisplayYearChart from './DisplayYearChart';
import { randomYearDayValues } from '../lib/createBlankYear';
import { useState } from 'react';

export default function NewUserView(req, res) {
    const randomYearData = randomYearDayValues();
    const [year, setYear] = useState(randomYearData);
    return (
        <>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Track your days.  Improve your Year.
            </h1>
            <p className='text-xl m-2'>This is an application to track your moods over the course of the year.  Each day put in how your day went, and watch the year fill in.  </p>
            <section
                className='flex justify-start items-start '
            >
                <DisplayYearChart year={year} setYear={setYear} editable={false} />
            </section>
        </>
    )
}
