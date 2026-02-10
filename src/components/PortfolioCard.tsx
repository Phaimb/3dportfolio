import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
    projectId: string;
    image: string;
    title: string;
    category: string;
    index: number;
}

const PortfolioCard = ({ projectId, image, title, category, index }: PortfolioCardProps) => {
    return (
        <Link to={`/project/${projectId}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer hover-lift"
            >
                <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end p-6">
                    <div>
                        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                            {category}
                        </p>
                        <h3 className="font-display text-xl font-bold text-foreground">
                            {title}
                        </h3>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default PortfolioCard;
