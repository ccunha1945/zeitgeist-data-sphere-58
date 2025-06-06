
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Search } from 'lucide-react';

interface HeaderProps {
  onAdminClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo e Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TrendPulse
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Descobrindo o que está em alta
              </p>
            </div>
          </div>

          {/* Indicador de Tendências */}
          <div className="hidden md:flex items-center space-x-2">
            <Badge variant="secondary" className="pulse-animation">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              Live Trends
            </Badge>
            <span className="text-sm text-muted-foreground">
              Atualizado agora há pouco
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4 mr-2" />
              Pesquisar
            </Button>
            <Button 
              onClick={onAdminClick}
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              Admin
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
