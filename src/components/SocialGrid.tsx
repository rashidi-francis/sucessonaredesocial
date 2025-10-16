import { SocialCard } from "./SocialCard";
import { socials } from "@/data/socials";

export const SocialGrid = () => {
  return (
    <section id="social-networks" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Escolha Sua Plataforma
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conecte-se com seus serviços favoritos e expanda sua presença digital
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socials.map((social, index) => (
            <SocialCard
              key={social.id}
              name={social.name}
              href={social.href}
              icon={social.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
