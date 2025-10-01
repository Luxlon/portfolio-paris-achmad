"use client";

import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { 
  Rocket, 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Sparkles,
  CheckCircle
} from "lucide-react";

const loadingStates = [
  {
    text: "Initializing portfolio",
    icon: <Rocket className="w-5 h-5" />
  },
  {
    text: "Loading components",
    icon: <Code className="w-5 h-5" />
  },
  {
    text: "Fetching project data",
    icon: <Database className="w-5 h-5" />
  },
  {
    text: "Applying themes & styles",
    icon: <Palette className="w-5 h-5" />
  },
  {
    text: "Optimizing performance",
    icon: <Zap className="w-5 h-5" />
  },
  {
    text: "Preparing 3D elements",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    text: "Almost ready...",
    icon: <Sparkles className="w-5 h-5 animate-spin" />
  },
  {
    text: "Welcome to my portfolio!",
    icon: <CheckCircle className="w-5 h-5" />
  },
];

export function PortfolioLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Auto start loading when component mounts
    setLoading(true);

    // Calculate total duration: loadingStates.length * duration per state
    const totalDuration = loadingStates.length * 500; // 500ms per state

    // Auto hide loader after all states complete
    const timer = setTimeout(() => {
      setLoading(false);
    }, totalDuration + 500); // Add extra 500ms buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Core Loader Modal */}
      <Loader 
        loadingStates={loadingStates} 
        loading={loading} 
        duration={500}
      />
    </>
  );
}