import { Card } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SocialCardProps {
  name: string;
  href: string;
  icon: string;
  index: number;
}

export const SocialCard = ({ name, href, icon, index }: SocialCardProps) => {
  const Icon = (LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Globe) as LucideIcon;
  
  const neonColors = ['neon-glow-purple', 'neon-glow-cyan', 'neon-glow-pink'];
  const neonClass = neonColors[index % neonColors.length];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
      aria-label={`Acesse ${name}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card 
        className={`
          relative p-6 
          bg-gradient-to-br from-card to-card/80
          border-2 border-border
          transition-all duration-500 ease-out
          hover:scale-105 hover:border-primary
          ${neonClass}
          animate-float animate-fade-in
          cursor-pointer
        `}
        style={{ 
          animationDuration: `${4 + (index % 3) * 0.5}s`,
          animationDelay: `${index * 0.15}s`
        }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        
        <div className="relative flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
          
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow" 
          style={{ 
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3))',
            filter: 'blur(8px)',
            zIndex: -1
          }} 
        />
      </Card>
    </a>
  );
};
