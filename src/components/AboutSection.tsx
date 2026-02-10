import { motion } from "framer-motion";

const skills = [
    "Blender",
    "Cinema 4D",
    "ZBrush",
    "Substance Painter",
    "Unreal Engine",
    "Houdini",
];

const AboutSection = () => {
    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                            About
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Where Imagination
                            <br />
                            Meets <span className="text-gradient">Polygons</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg font-light leading-relaxed">
                            <p>
                                I'm a 3D artist passionate about pushing the boundaries of digital creation.
                                With over 5 years of experience in the industry, I specialize in creating
                                photorealistic renders, character designs, and immersive environments.
                            </p>
                            <p>
                                My work spans across games, film, and commercial projects — always
                                striving to tell compelling visual stories through the medium of 3D art.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
                            Tools & Software
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="glass-card px-5 py-3 text-sm font-medium text-foreground"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-8">
                            {[
                                { number: "50+", label: "Projects" },
                                { number: "5+", label: "Years" },
                                { number: "30+", label: "Clients" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <p className="font-display text-3xl font-bold text-gradient">
                                        {stat.number}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
