import React from "react";
import "../../css/custom.css";

function Hero() {
    return (
        <div className="w-full h-[calc(100vh-170px)] hero bg-slate-100 flex justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-sans uppercase font-semibold tracking-widest hero-item text-white px-4 py-3">
                Sthiraloka
            </h1>
        </div>
    );
}

export default Hero;
