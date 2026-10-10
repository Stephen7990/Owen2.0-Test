import React, { useState, useEffect } from 'react';

export function Gallery() {
  // State for 2-image toggle (Before/After)
  const [showSecondImage, setShowSecondImage] = useState(false);

  // State for multi-image sequence (1 to 3)
  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);

  useEffect(() => {
    // Toggle Before/After images every 3 seconds
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3000);

    // Cycle progress images (0 -> 1 -> 2 -> 0) every 3 seconds
    const progressInterval = setInterval(() => {
      setCurrentProgressIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  // Define image arrays for your progress projects (3 images each)
  const project3Images = [
    '/Owen2.0-Test/images/3A.jpg',
    '/Owen2.0-Test/images/3B.jpg',
    '/Owen2.0-Test/images/3C.jpg',
  ];

  const project4Images = [
    '/Owen2.0-Test/images/4A.png',
    '/Owen2.0-Test/images/4B.png',
    '/Owen2.0-Test/images/4C.png',
  ];

  return (
    <section id="gallery" className="relative py-24 bg-background">
      <div className="space-y-16">

        {/* SECTION 1: Before & After Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="border-2 border-border hover:border-primary transition-all duration-300 p-4">
            <div className="aspect-video overflow-hidden mb-4 relative">
              <img 
                src="/Owen2.0-Test/images/1A.png" 
                alt="Carport Feature Wall - Before" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  showSecondImage ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <img 
                src="/Owen2.0-Test/images/1B.png" 
                alt="Carport Feature Wall - After" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  showSecondImage ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Image indicator pill overlay */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {showSecondImage ? '2/2' : '1/2'}
              </div>
            </div>

            <div className="text-primary text-sm tracking-widest mb-2">
              PROJECT 01
            </div>
            <h3 className="text-white text-2xl mb-2">
              Custom Carport Feature Wall
            </h3>
            <p className="text-muted-foreground">
              Replaced weathered sheeting with custom vertical timber slat screening for improved privacy and aesthetics.
            </p>
          </div>

          {/* Project 2 */}
          <div className="border-2 border-border hover:border-primary transition-all duration-300 p-4">
            <div className="aspect-video overflow-hidden mb-4 relative">
              <img 
                src="/Owen2.0-Test/images/2A.png" 
                alt="Verandah Plantation Shutter Enclosure - Before" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  showSecondImage ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <img 
                src="/Owen2.0-Test/images/2B.png" 
                alt="Verandah Plantation Shutter Enclosure - After" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  showSecondImage ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Image indicator pill overlay */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {showSecondImage ? '2/2' : '1/2'}
              </div>
            </div>

            <div className="text-primary text-sm tracking-widest mb-2">
              PROJECT 02
            </div>
            <h3 className="text-white text-2xl mb-2">
              Verandah Plantation Shutter Enclosure
            </h3>
            <p className="text-muted-foreground">
              Custom framing and white plantation shutter installation for outdoor deck privacy and weather protection.
            </p>
          </div>

        </div>

        {/* SECTION 2: Work in Progress Projects (3 Step Rotation) */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 3 */}
          <div className="border-2 border-border hover:border-primary transition-all duration-300 p-4">
            <div className="aspect-video overflow-hidden mb-4 relative">
              {project3Images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Project 03 - Image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentProgressIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Image indicator pill overlay */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {currentProgressIndex + 1}/{project3Images.length}
              </div>
            </div>

            <div className="text-primary text-sm tracking-widest mb-2">
              PROJECT 03 — BUILD PROCESS
            </div>
            <h3 className="text-white text-2xl mb-2">
              Custom Structural Fabrication
            </h3>
            <p className="text-muted-foreground">
              Step-by-step progression from raw steel cutting and welding to final site installation.
            </p>
          </div>

          {/* Project 4 */}
          <div className="border-2 border-border hover:border-primary transition-all duration-300 p-4">
            <div className="aspect-video overflow-hidden mb-4 relative">
              {project4Images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Project 04 - Image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentProgressIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Image indicator pill overlay */}
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {currentProgressIndex + 1}/{project4Images.length}
              </div>
            </div>

            <div className="text-primary text-sm tracking-widest mb-2">
              PROJECT 04 — BUILD PROCESS
            </div>
            <h3 className="text-white text-2xl mb-2">
              Decking & Timber Renovation
            </h3>
            <p className="text-muted-foreground">
              Full build sequence covering frame setup, joist preparation, board layout, and finishing stains.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}