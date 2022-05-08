import MyHead from "../components/my-head";
import styles from "../styles/home.module.css";
import HomeLayout from "../components/layouts/home-layout";
import React from "react";

export default function Home() {
    return (
        <main className="min-h-screen px-0 py-16 flex grow flex-col justify-center items-center">
            <div className="flex flex-col items-center p-5">
                <MyHead/>
                <h1 className="m-5 leading-extra-tight text-6.5xl text-center">
                    Приветствуем в <div
                    className="text-blue-600 no-underline inline hover:underline hover:cursor-pointer focus:underline focus:cursor-pointer active:underline active:cursor-pointer">
                    изучении алгоритмов</div>!
                </h1>
                <a href="./lessons/1"
                   className={styles.startButton + " m-5 flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"}>
                    <img src="/img/shuttle.png" alt="Начать"
                         className={styles.startButtonImage + " mr-4 max-w-6 max-h-6"}/>
                    Начать
                </a>
            </div>
        </main>
    )
}
Home.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <HomeLayout>
            {page}
        </HomeLayout>
    )
}