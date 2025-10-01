"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
    Home,
    User,
    Briefcase,
    FolderOpen,
    Award,
    MessageCircle,
    type LucideIcon,
} from "lucide-react";

interface NavItem {
    id: string;
    title: string;
    icon: LucideIcon;
    section: string;
}

interface NavbarProps {
    className?: string;
}

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem",
    }),
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
};

const transition = { type: "spring", bounce: 0, duration: 0.4 };

export function Navbar({ className }: NavbarProps) {
    const [selected, setSelected] = React.useState<string>("home");
    const [isVisible, setIsVisible] = React.useState(true);
    const [mouseAtBottom, setMouseAtBottom] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const navItems: NavItem[] = [
        { id: "home", title: "Home", icon: Home, section: "home" },
        { id: "about", title: "About", icon: User, section: "about" },
        { id: "skills", title: "Skills", icon: Briefcase, section: "about" },
        { id: "projects", title: "Projects", icon: FolderOpen, section: "projects" },
        { id: "achievements", title: "Achievements", icon: Award, section: "achievements" },
        { id: "contact", title: "Contact", icon: MessageCircle, section: "contact" },
    ];

    // Auto-hide navbar after 3 seconds of inactivity
    React.useEffect(() => {
        const resetTimeout = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setIsVisible(true);
            timeoutRef.current = setTimeout(() => {
                if (!mouseAtBottom) {
                    setIsVisible(false);
                }
            }, 3000);
        };

        resetTimeout();
        window.addEventListener("mousemove", resetTimeout);
        window.addEventListener("scroll", resetTimeout);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            window.removeEventListener("mousemove", resetTimeout);
            window.removeEventListener("scroll", resetTimeout);
        };
    }, [mouseAtBottom]);

    // Show navbar when mouse is at bottom of screen
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const threshold = window.innerHeight - 100;
            if (e.clientY > threshold) {
                setMouseAtBottom(true);
                setIsVisible(true);
            } else {
                setMouseAtBottom(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Detect active section on scroll
    React.useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.section);
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        const navItem = navItems.find(item => item.section === sectionId);
                        if (navItem && selected !== navItem.id) {
                            setSelected(navItem.id);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selected]);

    const handleNavClick = (item: NavItem) => {
        setSelected(item.id);
        const element = document.getElementById(item.section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const getGradientColor = (itemId: string) => {
        const gradients: Record<string, string> = {
            home: "from-blue-500 via-cyan-500 to-teal-500",
            about: "from-purple-500 via-pink-500 to-rose-500",
            skills: "from-orange-500 via-amber-500 to-yellow-500",
            projects: "from-green-500 via-emerald-500 to-teal-500",
            achievements: "from-indigo-500 via-purple-500 to-pink-500",
            contact: "from-red-500 via-pink-500 to-rose-500",
        };
        return gradients[itemId] || "from-blue-500 to-purple-500";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={cn(
                        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
                        "flex items-center gap-2 p-2",
                        "bg-neutral-900/80 backdrop-blur-xl",
                        "border border-neutral-800",
                        "rounded-2xl shadow-2xl",
                        className
                    )}
                >
                    <div className="flex items-center gap-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                variants={buttonVariants as any}
                                initial={false}
                                animate="animate"
                                custom={selected === item.id}
                                onClick={() => handleNavClick(item)}
                                transition={transition as any}
                                className={cn(
                                    "relative flex items-center rounded-xl px-3 py-2.5",
                                    "text-sm font-medium transition-all duration-300",
                                    "hover:bg-white/5",
                                    selected === item.id
                                        ? "text-white"
                                        : "text-neutral-400 hover:text-white"
                                )}
                            >
                                {/* Gradient Background for Active Item */}
                                {selected === item.id && (
                                    <motion.div
                                        layoutId="navbarActiveBackground"
                                        className={cn(
                                            "absolute inset-0 rounded-xl",
                                            "bg-gradient-to-r",
                                            getGradientColor(item.id)
                                        )}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                {/* Icon */}
                                <item.icon
                                    size={18}
                                    className={cn(
                                        "relative z-10 transition-colors",
                                        selected === item.id ? "text-white" : "text-neutral-400"
                                    )}
                                />

                                {/* Label */}
                                <AnimatePresence initial={false}>
                                    {selected === item.id && (
                                        <motion.span
                                            variants={spanVariants as any}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={transition as any}
                                            className="relative z-10 overflow-hidden whitespace-nowrap"
                                        >
                                            {item.title}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        ))}
                    </div>

                    {/* Indicator Dot */}
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Navbar;