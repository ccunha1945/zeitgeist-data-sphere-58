
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TrendCard from './TrendCard';
import { RefreshCw, Filter, Globe } from 'lucide-react';

const mockTrends = [
  {
    id: '1',
    title: 'Copa do Mundo 2024',
    category: 'Esportes',
    searchVolume: '2.5M+',
    growth: 45,
    description: 'Milhões de pessoas estão acompanhando os jogos e resultados da Copa do Mundo.',
    region: 'Brasil',
    timeframe: 'Última hora'
  },
  {
    id: '2',
    title: 'iPhone 16 Pro',
    category: 'Tecnologia',
    searchVolume: '1.8M+',
    growth: 78,
    description: 'Novo lançamento da Apple gera grande interesse e especulações sobre recursos.',
    region: 'Global',
    timeframe: '2h atrás'
  },
  {
    id: '3',
    title: 'Netflix Série',
    category: 'Entretenimento',
    searchVolume: '950K+',
    growth: 23,
    description: 'Nova série original da Netflix conquista audiência mundial.',
    region: 'América Latina',
    timeframe: '4h atrás'
  },
  {
    id: '4',
    title: 'Black Friday 2024',
    category: 'Compras',
    searchVolume: '3.2M+',
    growth: 156,
    description: 'Promoções e ofertas especiais movimentam o comércio eletrônico.',
    region: 'Brasil',
    timeframe: '30min atrás'
  },
  {
    id: '5',
    title: 'Inteligência Artificial',
    category: 'Tecnologia',
    searchVolume: '1.4M+',
    growth: 89,
    description: 'Avanços em IA e suas aplicações continuam gerando interesse público.',
    region: 'Global',
    timeframe: '1h atrás'
  }
];

const categories = ['Todos', 'Tecnologia', 'Esportes', 'Entretenimento', 'Compras', 'Notícias'];

const TrendingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredTrends = selectedCategory === 'Todos' 
    ? mockTrends 
    : mockTrends.filter(trend => trend.category === selectedCategory);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simular chamada da API
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              Ao Vivo
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tendências em <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra o que está movimentando o mundo agora mesmo. Dados atualizados em tempo real.
          </p>
        </div>

        {/* Controles */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <Globe className="h-4 w-4 mr-2" />
              Região
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
          </div>
        </div>

        {/* Grid de Tendências */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrends.map((trend, index) => (
            <div key={trend.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <TrendCard 
                trend={trend} 
                onClick={() => console.log('Trend clicked:', trend.title)}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-white">
            Ver Todas as Tendências
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
