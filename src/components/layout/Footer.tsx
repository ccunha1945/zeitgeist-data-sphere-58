
import React from 'react';
import { TrendingUp, Mail, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-primary">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">TrendPulse</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Acompanhe as tendências do momento e descubra o que está movimentando o mundo.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Tendências</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Categorias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Análises</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Regional</a></li>
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h4 className="font-semibold mb-4">Sobre</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba as principais tendências diretamente no seu email.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Seu email" 
                className="flex-1" 
              />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 TrendPulse. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Dados fornecidos pelo Google Trends
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
