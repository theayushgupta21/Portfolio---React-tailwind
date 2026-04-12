import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Work from "../pages/work";



const projects = [
    {
        title: "Flixmode",
        desc: "Movie streaming UI",
        img: "https://source.unsplash.com/1000x600/?netflix,movie",
    },
    {
        title: "Finance Dashboard",
        desc: "Analytics UI",
        img: "https://source.unsplash.com/1000x600/?dashboard,finance",
    },
    {
        title: "Adoptify",
        desc: "Pet adoption platform",
        img: "https://source.unsplash.com/1000x600/?dog,pet",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <>
            <section className="h-screen w-full bg-black flex items-center justify-center">

                <div className="relative w-full max-w-5xl">

                    {/* PROJECT CARD */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl group relative">

                        <img
                            src={projects[index].img}
                            alt="project"
                            className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* OVERLAY */}
                        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h2 className="text-3xl font-bold text-white">
                                {projects[index].title}
                            </h2>
                            <p className="text-gray-300 text-sm mt-2">
                                {projects[index].desc}
                            </p>
                        </div>
                    </div>

                    {/* LEFT BUTTON */}
                    <IconButton
                        onClick={prevSlide}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "-20px",
                            transform: "translateY(-50%)",
                            background: "rgba(0,0,0,0.6)",
                            color: "white",
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    {/* RIGHT BUTTON */}
                    <IconButton
                        onClick={nextSlide}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: "-20px",
                            transform: "translateY(-50%)",
                            background: "rgba(0,0,0,0.6)",
                            color: "white",
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>

                    {/* DOTS */}
                    <div className="flex justify-center mt-4 gap-2">
                        {projects.map((_, i) => (
                            <IconButton key={i} onClick={() => setIndex(i)}>
                                <FiberManualRecordIcon
                                    sx={{
                                        fontSize: 10,
                                        color: i === index ? "#6366f1" : "#555",
                                    }}
                                />
                            </IconButton>
                        ))}
                    </div>

                </div>
            </section>
            <Work />
        </>
    );
}