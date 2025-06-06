
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TrendingSection from '@/components/trends/TrendingSection';
import SocialTrendsSection from '@/components/trends/SocialTrendsSection';
import TrendChart from '@/components/analytics/TrendChart';
import StatsCards from '@/components/analytics/StatsCards';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminDashboard from '@/components/admin/AdminDashboard';
import ApiIntegrationsPage from '@/components/admin/ApiIntegrationsPage';
import MonetizationPage from '@/components/admin/MonetizationPage';
import SeoContentPage from '@/components/admin/SeoContentPage';
import SettingsPage from '@/components/admin/SettingsPage';
import SocialIntegrationsPage from '@/components/admin/SocialIntegrationsPage';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LogOut } from 'lucide-react';

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const { user, signOut, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleAdminClick = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    if (!isAdmin) {
      return; // Usuário não é admin
    }
    
    setShowAdmin(true);
  };

  const handleBackToPublic = () => {
    setShowAdmin(false);
    setActiveSection('dashboard');
  };

  const handleLogout = async () => {
    await signOut();
    setShowAdmin(false);
  };

  // Renderizar área administrativa (apenas para admins autenticados)
  if (showAdmin && user && isAdmin) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AdminSidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            onLogout={handleLogout}
          />
          <div className="flex-1 flex flex-col">
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-16 items-center px-6 justify-between">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleBackToPublic}
                  className="mr-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Site
                </Button>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    Olá, {user.email}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1 p-6 overflow-auto">
              {activeSection === 'dashboard' && <AdminDashboard />}
              {activeSection === 'traffic' && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold">Análise de Tráfego</h1>
                  <StatsCards />
                  <TrendChart title="Visitantes" description="Análise detalhada do tráfego" />
                </div>
              )}
              {activeSection === 'seo' && <SeoContentPage />}
              {activeSection === 'social' && <SocialIntegrationsPage />}
              {activeSection === 'monetization' && <MonetizationPage />}
              {activeSection === 'apis' && <ApiIntegrationsPage />}
              {activeSection === 'settings' && <SettingsPage />}
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }

  // Renderizar página pública
  return (
    <div className="min-h-screen bg-background">
      <Header onAdminClick={handleAdminClick} />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubra as <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tendências</span> do Momento
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Acompanhe em tempo real o que está movimentando o mundo. Dados atualizados do Google Trends com análises profundas e insights valiosos.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white text-lg px-8 py-3">
                Explorar Tendências
              </Button>
              {!user && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-3"
                  onClick={() => navigate('/auth')}
                >
                  Criar Conta
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 -mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <StatsCards />
          </div>
        </section>

        {/* Trending Section */}
        <TrendingSection />

        {/* Social Trends Section */}
        <SocialTrendsSection />

        {/* Analytics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Análises <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Detalhadas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Visualize a evolução das tendências com gráficos interativos
              </p>
            </div>
            <TrendChart />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fique sempre por dentro das tendências
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {user 
                ? 'Explore todas as funcionalidades do TrendPulse'
                : 'Crie sua conta e receba alertas personalizados sobre as tendências que importam para você'
              }
            </p>
            {user ? (
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Explorar Recursos
              </Button>
            ) : (
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-3"
                onClick={() => navigate('/auth')}
              >
                Começar Agora
              </Button>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
