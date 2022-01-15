import { useState } from "react";

//modal to edit a day's value 

export default function EditDayModal({ year, setYear, day, month, buttonClasses, editable = true }) {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(day.value);
    const [isLoading, setIsLoading] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    // console.log(editable)

    const handleChange = (e) => {
        // console.log(e.target.value)
        let updatedYear = { ...year };
        const monthNumber = month.toLowerCase().indexOf("jan") === 0 ? 0 : month.toLowerCase().indexOf("feb") === 0 ? 1 : month.toLowerCase().indexOf("mar") === 0 ? 2 : month.toLowerCase().indexOf("apr") === 0 ? 3 : month.toLowerCase().indexOf("may") === 0 ? 4 : month.toLowerCase().indexOf("jun") === 0 ? 5 : month.toLowerCase().indexOf("jul") === 0 ? 6 : month.toLowerCase().indexOf("aug") === 0 ? 7 : month.toLowerCase().indexOf("sep") === 0 ? 8 : month.toLowerCase().indexOf("oct") === 0 ? 9 : month.toLowerCase().indexOf("nov") === 0 ? 10 : month.toLowerCase().indexOf("dec") === 0 ? 11 : 0;
        updatedYear.months[monthNumber].days[day.date - 1].value = e.target.value;
        setYear(updatedYear);
        setIsOpen(false);

    }

    return (
        <>
            <button type="button" className={buttonClasses}
                onClick={toggleOpen}>
                {day.date}
            </button>

            {editable && isOpen && <div className="absolute inset-0 bg-slate-900 z-10 opacity-95">
                <div className="absolute inset-3 rounded-xl bg-slate-700 z-20
                md:inset-20 md:min-w-80">
                    <button type="button" onClick={toggleOpen} className="
                    absolute top-2 right-2 m-2 w-7 h-7 bg-red-900 text-white text-center rounded-full">
                        &times;
                    </button>
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-white text-center text-2xl">
                            {month} - {day.date}
                        </h1>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-white text-center text-xl mb-5">
                                How was your day?
                            </label>
                            <select className="text-slate-800 text-center text-xl"

                                value={value}
                                onChange={handleChange}>
                                <option value="" defaultValue >Select a value</option>
                                <option value="1">Super Bad</option>
                                <option value="2">Not much fun</option>
                                <option value="3">Average</option>
                                <option value="4">Pretty Good</option>
                                <option value="5">Fantastic</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>}

        </>
    )

}
