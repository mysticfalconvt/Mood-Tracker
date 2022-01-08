import { useState } from "react";

//modal to edit a day's value 

export default function EditDayModal({ year, setYear, day, month, buttonClasses }) {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(day.value);
    const [isLoading, setIsLoading] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }



    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <button type="button" className={buttonClasses}
                onClick={toggleOpen}>
                {day.date}
            </button>

            {isOpen && <div className="absolute inset-0 bg-slate-900 z-10 opacity-95">
                <div className="absolute inset-40 rounded-xl bg-slate-700 z-20">
                    <button type="button" onClick={toggleOpen} className="
                    absolute top-0 right-0 m-2 p-1 bg-red-900 rounded-lg">
                        close
                    </button>
                </div>
            </div>}

        </>
    )

}
