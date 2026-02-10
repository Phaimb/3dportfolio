import { motion } from "framer-motion";

const socials = [
    { label: "ArtStation", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter / X", href: "#" },
];

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 px-6 border-t border-border">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                        Get In Touch
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Let's Create Something
                        <br />
                        <span className="text-gradient">Extraordinary</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 font-light">
                        Have a project in mind? I'd love to hear about it. Let's collaborate
                        and bring your vision to life.
                    </p>

                    <motion.a
                        href="mailto:hello@youremail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="inline-block glass-card px-8 py-4 text-primary font-display font-semibold tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow"
                    >
                        hello@youremail.com
                    </motion.a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-8 mt-16"
                >
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {social.label}
                        </a>
                    ))}
                </motion.div>

                {/* Footer */}
                <p className="text-muted-foreground/50 text-sm mt-20">
                    © 2026 Studio. All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
