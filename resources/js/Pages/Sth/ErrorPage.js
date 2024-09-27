import FrontPageLayout from "@/Layouts/FrontPageLayout";
import React from "react";

export default function ErrorPage({ status }) {
    const title = {
        503: "503: Under Construction",
        500: "500: Server Error",
        404: "404: Not Found",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Maaf, service masih dalam perbaikan.",
        500: "Whoops, Server kami masih error nih.\nMaaf mengganggu kenyamanan kamu.",
        404: "Hayoo, mau kemana sih..",
        403: "Whoops, kamu masih belum bisa akses ke sini.",
    }[status];

    return (
        <FrontPageLayout>
            <div className="flex justify-center items-center flex-col gap-y-5 h-[calc(100vh-120px-320px)] overflow-y-hidden">
                <h1 className="text-center text-5xl text-gray-800 font-sans font-bold">
                    {title}
                </h1>
                <div className="text-center font-[verdana]">{description}</div>
            </div>
        </FrontPageLayout>
    );
}
