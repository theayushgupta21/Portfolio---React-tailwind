import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Globe, ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass border-white/10 group-hover:border-primary/40 transition-colors">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-20">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-text-muted text-sm line-clamp-2 mb-6 group-hover:text-text transition-colors">
            {project.description}
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-all">
              <ExternalLink size={18} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-all">
              <Globe size={18} />
            </a>
            <button className="ml-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
              Case Study <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "Adoptify — AI Powered Pet Adoption",
    description: "A full-stack MERN platform with AI recommendations, real-time notifications via Socket.io, and Stripe/Razorpay integration.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2686&auto=format&fit=crop",
    tags: ["MERN Stack", "OpenAI", "Socket.io", "Stripe"],
  },
  {
    title: "Artworks DataTable",
    description: "High-performance React + TypeScript app featuring server-side pagination and persistent state handling for massive datasets.",
    image: "https://images.unsplash.com/photo-1541854615901-93c354197834?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Vite", "Performance"],
  },
  {
    title: "NeoRide — Vehicle Rental",
    description: "Modern car & bike rental platform with seamless UI/UX and real-time booking integrations via EmailJS.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "Vite", "Tailwind CSS", "EmailJS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-5xl font-bold mb-4">Featured <span className="text-gradient">Creations</span></h2>
        <p className="text-text-muted">A collection of projects where code meets creativity.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={cn(index % 3 === 2 ? "lg:col-span-2" : "")}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
