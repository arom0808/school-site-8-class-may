import Head from "next/head";
import React from "react";

export default function MyHead({title, description}: { title?: string, description?: string }) {
    return (
        <Head>
            <title>{title || "Обучение алгоритмам"}</title>
            <meta name="description" content={description || "Пособие для обучения базовым алгоритмам"}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}