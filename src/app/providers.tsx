"use client";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            {children}
            <SpeedInsights />
            <Analytics />
        </>
    );
};

export default Providers;
