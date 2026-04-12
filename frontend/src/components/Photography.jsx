import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../utils/cn";

const photos = [
  { id: 1, url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop", title: "Urban Soul", loc: "Mumbai, IN" },
  { id: 2, url: "https://images.unsplash.com/photo-1502602732142-f8b2f9b11736?q=80&w=2670&auto=format&fit=crop", title: "Eternal Eiffel", loc: "Paris, FR" },
  { id: 3, url: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2670&auto=format&fit=crop", title: "Mist Peak", loc: "Alps, CH" },
  { id: 4, url: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2670&auto=format&fit=crop", title: "Golden Gate", loc: "SF, USA" },
  { id: 5, url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2670&auto=format&fit=crop", title: "Vintage Lens", loc: "Studio" },
];

const Photography = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id="photography" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 md:mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visual <span className="text-gradient">Storytelling</span></h2>
          <p className="text-text-muted max-w-xl">
            Capturing the world through my lens. Cinematic 3D gallery featuring street and concert photography.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <button onClick={prev} className="p-3 rounded-full glass hover:text-primary transition-all active:scale-95"><ChevronLeft size={20} /></button>
           <button onClick={next} className="p-3 rounded-full glass hover:text-primary transition-all active:scale-95"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto aspect-video md:aspect-[21/9] flex items-center justify-center">
        <div className="flex items-center justify-center p-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {photos.map((photo, i) => {
              const distance = (i - currentIndex + photos.length) % photos.length;
              const isCenter = distance === 0;
              const isLeft = distance === photos.length - 1;
              const isRight = distance === 1;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.5, x: isLeft ? -300 : isRight ? 300 : 0 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4, 
                    scale: isCenter ? 1 : 0.8,
                    x: isCenter ? 0 : isLeft ? -250 : isRight ? 250 : 0,
                    rotateY: isCenter ? 0 : isLeft ? 45 : -45,
                    zIndex: isCenter ? 20 : 10,
                    filter: isCenter ? "grayscale(0)" : "grayscale(1)"
                  }}
                  exit={{ opacity: 0, scale: 0.5, x: isLeft ? -300 : isRight ? 300 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute cursor-pointer rounded-[2rem] overflow-hidden glass border-white/10 shadow-3xl w-full max-w-[280px] md:max-w-[450px] aspect-[4/5] md:aspect-[3/2]"
                  onClick={() => isCenter ? setSelectedPhoto(photo) : setCurrentIndex(i)}
                >
                  <img src={photo.url} className="w-full h-full object-cover" alt={photo.title} />
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
                       <p className="text-xs font-bold text-primary flex items-center gap-1 uppercase tracking-widest"><MapPin size={12} /> {photo.loc}</p>
                       <h3 className="text-2xl md:text-3xl font-bold text-white">{photo.title}</h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12 md:mt-20">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-500",
              currentIndex === i ? "w-8 bg-primary" : "bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12 block"
            onClick={() => setSelectedPhoto(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.url} 
                className="w-full h-full object-contain rounded-2xl" 
                alt={selectedPhoto.title} 
              />
              <div className="mt-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                <p className="text-text-muted flex items-center justify-center gap-2">
                   <MapPin size={16} /> {selectedPhoto.loc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Photography;
