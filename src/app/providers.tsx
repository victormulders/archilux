"use client";
import React, { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Lenis from '@studio-freight/lenis';

const Providers = ({ children }: { children: React.ReactNode }) => {
    // useEffect( () => {
    //     const lenis = new Lenis()
    //
    //     function raf(time: number) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }
    //
    //     requestAnimationFrame(raf)
    // },[])

    return (
        <>
            {children}
            <SpeedInsights />
            <Analytics />
        </>
    );
};

export default Providers;
