"use client"
import { useState } from "react";
import ArrowUi from "./ArrowUi";

const MonthTab = () => {
    const months = ['June 2025', 'July 2025', 'August 2025'];
    const [monthIndex, setMonthIndex] = useState(0); // 0 = June
    const handleRightClick = () => {
        if (monthIndex < months.length - 1) {
            setMonthIndex((prev) => prev + 1);
        }
    };

    const handleLeftClick = () => {
        if (monthIndex > 0) {
            setMonthIndex((prev) => prev - 1);
        }
    };
    return (
        <div>
            <ArrowUi
                text={months[monthIndex]}
                leftOnClick={handleLeftClick}
                RightOnClick={handleRightClick}
            />
        </div>
    )
}

export default MonthTab;