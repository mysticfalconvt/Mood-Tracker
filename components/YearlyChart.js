import createBlankYear from "../lib/createBlankYear";
import useLocalStorageState from "../lib/useLocalStorage";
import { useEffect, useState } from "react";
import EditDayModal from "./EditDayModal";
import { randomizeYearDayValues } from "../lib/createBlankYear";

function DisplayMonths({ months, year }) {
    // displays each month in a row
    const currentMonth = new Date().getMonth();
    return (
        <div className="
        flex flex-row items-start justify-center
        ">
            {months.map((month, index) => {
                const isCurrentMonth = index === currentMonth;
                // console.log(isCurrentMonth);
                return (
                    <div key={index} className="w-7 ">
                        <h1 className="rotate-90 mb-14 mt-2">{month.name}</h1>
                        <DisplayDays days={month.days} isCurrentMonth={isCurrentMonth} currentMonth={month.name} year={year} />
                    </div>
                )
            })}
        </div>
    )
}

function DisplayDays({ days, isCurrentMonth, currentMonth, year }) {
    const currentDay = new Date().getDate();

    // displays each day in a row
    return (
        <div className="flex flex-col justify-items-start">
            {days.map((day, index) => {
                const [color, setColor] = useState("bg-gray-200");
                const [borderColor, setBorderColor] = useState("border-slate-500");
                const [textColor, setTextColor] = useState("text-transparent");
                useEffect(() => {
                    // console.log('useEffect');
                    // console.log(day.value)
                    if (day.value === "1") setColor("bg-red-400");
                    if (day.value === "2") setColor("bg-orange-400");
                    if (day.value === "3") setColor("bg-yellow-400");
                    if (day.value === "4") setColor("bg-green-400");
                    if (day.value === "5") setColor("bg-green-600");
                    if (day.date === currentDay && isCurrentMonth) setBorderColor("border-rose-700");
                    if (isCurrentMonth) setTextColor("text-slate-700");
                    if (day.date === currentDay && isCurrentMonth) setTextColor("text-black");
                }, [day.value, isCurrentMonth, currentDay, year]);
                const divClasses = `
                    border-2 
                    border-solid
                    rounded-xl
                    ${color}
                    ${borderColor}
                    `;
                const dayClasses = `
                    text-center
                    text-md
                    ${textColor}
                    `;

                return (
                    <div key={index} className={divClasses}>

                        <EditDayModal month={currentMonth} day={day} buttonClasses={dayClasses} year={year} />
                    </div>
                )
            })}
        </div >
    )
}

export default function YearlyChart() {
    console.log("YearlyChart");
    const blankYear = createBlankYear();
    const randomYear = randomizeYearDayValues();
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
        <div className="mt-2">


            <DisplayMonths months={year.months} year={[year, setYear]} />

        </div>

    )
}