import Footer from "../footer";
import React from "react";

export default function HomeLayout({children}: React.PropsWithChildren<{}>) {
    return (
        <div className="px-8 py-0">
            {children}
            <Footer/>
        </div>
    )
}