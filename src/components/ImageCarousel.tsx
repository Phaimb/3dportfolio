import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

const ImageCarousel = ({ images, currentIndex, onClose, onNavigate }: ImageCarouselProps) => {
    const currentMedia = images[currentIndex];
    const isVideo = /\.(mp4|webm|mov)$/i.test(currentMedia);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                handlePrevious();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    // Prevent body scroll when carousel is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        onNavigate(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        onNavigate(newIndex);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 glass-card p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Close carousel"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-6 left-6 z-10 glass-card px-4 py-2 text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Previous Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                    }}
                    className="absolute left-6 z-10 glass-card p-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Next Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                    }}
                    className="absolute right-6 z-10 glass-card p-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Media Content */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-[85vw] max-h-[85vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    {isVideo ? (
                        <video
                            src={currentMedia}
                            controls
                            autoPlay
                            loop
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            src={currentMedia}
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
                        />
                    )}
                </motion.div>

                {/* Keyboard Hints */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 text-xs text-muted-foreground">
                    Use arrow keys to navigate • ESC to close
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageCarousel;
