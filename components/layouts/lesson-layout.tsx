import React from "react";
import styles from "../../styles/lessons.module.css";

export default function LessonLayout({children}: React.PropsWithChildren<{}>) {
    return (
        <div>
            <div className={styles.area}>
                <ul className={styles.circles}>
                    {Array.from({length: 10}, (_, i) => <li key={i}/>)}
                </ul>
            </div>
            <div className="w-full top-0 flex px-96">
                <div className="min-h-screen bg-white/80 shadow-[0_0_40px_0_rgba(255,255,255,0.5)] text-black">
                    {children}
                </div>
            </div>
        </div>
    )
}