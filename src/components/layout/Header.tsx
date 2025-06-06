
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onAdminClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      return; // Dropdown irá lidar com as ações
    } else {
      navigate('/auth');
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

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
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {user.email?.split('@')[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem onClick={onAdminClick}>
                        Painel Admin
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={handleAuthClick}
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Entrar
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
