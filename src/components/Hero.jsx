import React from 'react';
import { Code2, Database, Palette, Server, Smartphone, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      data-aos="fade-in" id = "home"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-4" data-aos="fade-down" data-aos-delay="200">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ace
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 font-medium"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Full Stack Developer & Creative Problem Solver
          </p>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            I craft beautiful, functional web experiences that bring ideas to life. 
            Passionate about clean code, intuitive design, and building solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce" data-aos="fade-up" data-aos-delay="1200">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}