import createBlankYear from "../lib/createBlankYear";
import useLocalStorageState from "../lib/useLocalStorage";
import { useEffect } from "react";

function DisplayMonths({ months }) {
    // displays each month in a row
    return (
        <div className="
        flex flex-row items-start justify-center
        ">
            {months.map((month, index) => {
                return (
                    <div key={index} className="w-8 ">
                        <h1 className="rotate-90 mb-14 mt-2">{month.name}</h1>
                        <DisplayDays days={month.days} />
                    </div>
                )
            })}
        </div>
    )
}

function DisplayDays({ days }) {
    // displays each day in a row
    return (
        <div className="flex flex-col justify-items-start">
            {days.map((day, index) => {
                const color = day.value === "happy" ? "bg-green-500" : "bg-red-500";
                return (
                    <div key={index} className={`
                    border-2 border-gray-100
                    border-solid
                    rounded-lg
                    ${color}
                    `}
                    >
                        <p className="">{day.date}</p>
                    </div>
                )
            })}
        </div >
    )
}

export default function YearlyChart() {
    console.log("YearlyChart");
    const blankYear = createBlankYear();
    const [year, setYear] = useLocalStorageState("year", blankYear);
    useEffect(() => {
        if (year === blankYear || year === undefined) {
            console.log("blankYear");
            setYear(blankYear);
        }
        return () => {
            null
        }
    }, [])
    return (
        <div>
            <h2>YearlyChart </h2>

            <DisplayMonths months={year.months} />

        </div>

    )
}