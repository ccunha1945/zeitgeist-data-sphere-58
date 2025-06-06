
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Eye, Globe, Users } from 'lucide-react';

const statsData = [
  {
    title: 'Total de Pesquisas',
    value: '2.4M',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: Eye,
    description: 'Últimas 24h'
  },
  {
    title: 'Tendências Ativas',
    value: '147',
    change: '+8',
    changeType: 'positive' as const,
    icon: TrendingUp,
    description: 'Agora mesmo'
  },
  {
    title: 'Países Ativos',
    value: '89',
    change: '+3',
    changeType: 'positive' as const,
    icon: Globe,
    description: 'Cobertura global'
  },
  {
    title: 'Usuários Online',
    value: '15.2K',
    change: '-2.3%',
    changeType: 'negative' as const,
    icon: Users,
    description: 'Conectados agora'
  }
];

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="trend-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span 
                  className={`flex items-center ${
                    stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
                  }`}
                >
                  {stat.change}
                </span>
                <span>•</span>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
