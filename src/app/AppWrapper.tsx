"use client";
import { useEffect, useState } from "react";
import { Loader } from "@core/Loader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        if (document.readyState === "complete") {
            setPageLoaded(true);
        } else {
            const onLoad = () => setPageLoaded(true);
            window.addEventListener("load", onLoad);
            return () => window.removeEventListener("load", onLoad);
        }
    }, []);

    if (!pageLoaded) return <Loader />;

    return <>{children}</>;
}
