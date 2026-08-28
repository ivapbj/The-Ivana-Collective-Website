import React, { useState } from "react";
import { Project } from "../types";

interface ProjectImageProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ project, className, style }) => {
  const candidateFallbacks: Record<string, string[]> = {
    "aunalux": [
      "/images/aunalux-mockup.png",
      "/images/aunalux-mockup.jpeg",
      "/images/aunalux-mockup.jpg",
      "/images/IMG_5900.jpeg",
      "/images/IMG_5900.jpg",
      "/images/IMG_5900.png"
    ],
    "ran-art-design": [
      "/images/ranart-mockup.png",
      "/images/ranart-mockup.jpeg",
      "/images/ranart-mockup.jpg",
      "/images/IMG_5901.jpeg",
      "/images/IMG_5901.jpg",
      "/images/IMG_5901.png"
    ],
    "dr-sheds": [
      "/images/drsheds-mockup.png",
      "/images/drsheds-mockup.jpeg",
      "/images/drsheds-mockup.jpg"
    ],
    "legacy-economic-development": [
      "/images/agency-economic-mockup.png",
      "/images/agency-economic-mockup.jpeg"
    ],
    "posh-body-wellness": [
      "/images/posh-body-wellness-mockup.png",
      "/images/posh-body-wellness-mockup.jpeg"
    ]
  };

  const fallbacks = candidateFallbacks[project.id] || [project.imageUrl];
  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index + 1 < fallbacks.length) {
      setIndex(prev => prev + 1);
    }
  };

  const currentSrc = fallbacks[index] || project.imageUrl;

  return (
    <img
      src={currentSrc}
      alt={project.client}
      onError={handleError}
      className={className}
      style={style}
      referrerPolicy="no-referrer"
    />
  );
};
