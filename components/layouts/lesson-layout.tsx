import Footer from "../footer";
import React from "react";
import styles from "../../styles/lessons.module.css";

export default function LessonLayout({children}: React.PropsWithChildren<{}>) {
    return (
        <div>
            <div className={styles.context}>
                {children}
            </div>
            <div className={styles.area}>
                <ul className={styles.circles}>
                    {Array.from({length: 10}, (_, i) => <li key={i}/>)}
                </ul>
            </div>
            <Footer/>
        </div>
    )
}