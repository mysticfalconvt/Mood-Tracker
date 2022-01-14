
import React from 'react'
import { DisplayMonths } from './YearlyChart'

export default function DisplayYearChart({ year, setYear, editable = true }) {

    return (
        <div>
            <div className="mt-2">


                <DisplayMonths year={year} setYear={setYear} editable={editable} />

            </div>
        </div>
    )
}
