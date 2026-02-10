import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { projects } from "@/data/projectsData";

const PortfolioGrid = () => {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                        Selected Work
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <PortfolioCard
                            key={project.id}
                            projectId={project.id}
                            image={project.thumbnail}
                            title={project.title}
                            category={project.category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
