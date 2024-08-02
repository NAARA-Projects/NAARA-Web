import React, { useState } from "react";

interface GallerySliderProps {
    images: string[];
    captions: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images, captions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-64 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                {captions[currentIndex]}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#5ABBDC] bg-opacity-975 p-2 rounded-full">
                &lt;
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#5ABBDC] bg-opacity-75 p-2 rounded-full">
                &gt;
            </button>
        </div>
    );
};

export default GallerySlider;
