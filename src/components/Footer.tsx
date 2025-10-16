export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Sucesso na Rede Social. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Cresça sua presença digital de forma orgânica e sustentável
        </p>
      </div>
    </footer>
  );
};
