import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProjectById } from "@/data/projectsData";
import { useState, useEffect } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { getAssetPath } from "@/lib/utils";

const ProjectDetail = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const project = projectId ? getProjectById(projectId) : undefined;
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    const openCarousel = (index: number) => {
        setCarouselIndex(index);
        setCarouselOpen(true);
    };

    // If project not found, redirect to 404
    if (!project) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate("/")}
                className="fixed top-24 left-6 z-50 glass-card p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
                <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={getAssetPath(project.images[0])}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4"
                    >
                        {project.category}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-muted-foreground text-sm font-medium tracking-wider"
                    >
                        {project.year}
                    </motion.p>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <h2 className="font-display text-2xl font-bold mb-4">About This Project</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed font-light">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Tools & Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-3">
                                    Tools Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="glass-card px-3 py-1.5 text-xs font-medium text-foreground"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                                    Year
                                </h3>
                                <p className="text-foreground font-medium">{project.year}</p>
                            </div>

                            <div>
                                <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                                    Category
                                </h3>
                                <p className="text-foreground font-medium">{project.category}</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-2xl font-bold mb-8">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((media, index) => {
                                // Check if the media is a video based on file extension
                                const isVideo = /\.(mp4|webm|mov)$/i.test(media);
                                const mediaPath = getAssetPath(media);

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group relative overflow-hidden rounded-xl aspect-square hover-lift cursor-pointer"
                                        onClick={() => openCarousel(index)}
                                    >
                                        {isVideo ? (
                                            <video
                                                src={mediaPath}
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover pointer-events-none"
                                                preload="metadata"
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <img
                                                src={mediaPath}
                                                alt={`${project.title} - Image ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        )}

                                        {/* Click hint overlay */}
                                        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium glass-card px-4 py-2">
                                                Click to view
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Back to Portfolio Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <button
                            onClick={() => navigate("/")}
                            className="inline-flex items-center gap-2 glass-card px-8 py-4 text-primary font-display font-semibold tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Portfolio
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Image Carousel */}
            {carouselOpen && (
                <ImageCarousel
                    images={project.images}
                    currentIndex={carouselIndex}
                    onClose={() => setCarouselOpen(false)}
                    onNavigate={setCarouselIndex}
                />
            )}
        </div>
    );
};

export default ProjectDetail;
