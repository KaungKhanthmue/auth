
import IconCloud from '../../Magic /IconCloud'; 

const Footer = () => {
  const iconSlugs = [
    "javascript",
    "php",
    "react",
    "html5",
    "css3",
    "filament",
    "laravel",
    "bootstrap",
    "tailwindcss",
    "mysql",
    "postgresql",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "vuejs", // Correct slug for Vue.js
  ];

  return (
    <footer>
      <IconCloud iconSlugs={iconSlugs} />
    </footer>
  );
};

export default Footer;
