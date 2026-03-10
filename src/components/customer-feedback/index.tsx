"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Craig Bator",
    role: "Food Blogger",
    image: "/avatar_craig.png",
    rating: 5,
    feedback:
      "Chef Marilyn's signature curry is hands-down the best I've ever had. The flavors are bold and unforgettable!",
  },
  {
    id: 2,
    name: "Lindsey Saris",
    role: "Travel Chef Reviewer",
    image: "/avatar_lindsey.png",
    rating: 4.5,
    feedback:
      "Takahiro's sushi is pure perfection. So fresh, delicate, and beautifully presented — a five-star experience.",
  },
  {
    id: 3,
    name: "Craig Bator",
    role: "Food Blogger",
    image: "/avatar_craig.png",
    rating: 5,
    feedback:
      "Chef Marilyn's signature curry is hands-down the best I've ever had. The flavors are bold and unforgettable!",
  },
  {
    id: 4,
    name: "Lindsey Saris",
    role: "Travel Chef Reviewer",
    image: "/avatar_lindsey.png",
    rating: 4,
    feedback:
      "Takahiro's sushi is pure perfection. So fresh, delicate, and beautifully presented — a five-star experience.",
  },
];

export default function CustomerFeedbackSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header Section */}
          <div className="lg:col-span-4 max-w-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3142] mb-4">
              Customers Feedback
            </h2>
            <p className="text-[#6C757D] text-lg mb-8">
              From career changes to dream jobs, here's how FlyonUI helped.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-10 h-10 flex items-center justify-center rounded-md border border-[#D1D5DB] text-[#6B7280] hover:bg-gray-50 transition-colors"
                aria-label="Previous slide"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors"
                aria-label="Next slide"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Slider Section */}
          <div className="lg:col-span-8 -mx-4">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 h-full min-h-[280px] flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2D3142]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#6C757D]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-6 text-[#FBBF24]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(testimonial.rating)
                              ? "text-[#FBBF24]"
                              : "text-[#D1D5DB]"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-[#4B5563] italic leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}