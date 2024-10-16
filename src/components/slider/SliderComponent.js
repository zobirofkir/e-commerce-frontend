import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    const fetchSlides = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/products`);
        setSlides(response.data.data);
    }
    useEffect(() => {
        fetchSlides();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full md:h-[750px] h-96 overflow-hidden md:mt-5 mt-[15px] bg-gray-100 rounded-md">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        className={`transition-opacity duration-700 ease-in-out absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        key={index}
                    >
                        <img
                            src={slide.images?.[0] || slide.image}
                            className="w-full md:h-full h-full object-cover rounded-md object-center"
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-black opacity-30" />
                        <div className="absolute bottom-10 left-5 md:left-10 text-white p-5 rounded bg-black bg-opacity-50">
                            <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                            <p className="mt-2 text-sm md:text-base">{slide.description.substring(0, 100)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-500' : 'bg-gray-300'}`}
                        aria-current={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-1/2 left-0 flex items-center justify-center h-full px-4 transform -translate-y-1/2 cursor-pointer group focus:outline-none"
                onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-1/2 right-0 flex items-center justify-center h-full px-4 transform -translate-y-1/2 cursor-pointer group focus:outline-none"
                onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default SliderComponent;
