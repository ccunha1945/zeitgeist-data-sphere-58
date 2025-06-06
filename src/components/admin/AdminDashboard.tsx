
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StatsCards from '../analytics/StatsCards';
import TrendChart from '../analytics/TrendChart';
import { AlertCircle, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral das métricas e performance do TrendPulse
        </p>
      </div>

      {/* Status Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="flex items-center space-x-3 p-4">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-green-800">Sistema Online</p>
              <p className="text-xs text-green-600">Todas as APIs funcionando</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="flex items-center space-x-3 p-4">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-blue-800">Dados Atualizados</p>
              <p className="text-xs text-blue-600">Última sync: há 2 min</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="flex items-center space-x-3 p-4">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <div>
              <p className="text-sm font-medium text-orange-800">Rate Limit: 80%</p>
              <p className="text-xs text-orange-600">Google Trends API</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart 
          title="Tráfego do Site" 
          description="Visitantes nas últimas 24h"
        />
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Receita de Anúncios</h3>
                <p className="text-sm text-muted-foreground">Últimos 7 dias</p>
              </div>
              <DollarSign className="h-5 w-5 text-green-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">R$ 2.847,50</div>
            <div className="text-sm text-muted-foreground mb-4">
              <span className="text-green-600">+15.3%</span> em relação à semana anterior
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AdSense</span>
                <span>R$ 1.920,30</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Afiliados</span>
                <span>R$ 687,90</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Patrocinados</span>
                <span>R$ 239,30</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Top Tendências - Hoje</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Copa do Mundo 2024', searches: '2.5M', category: 'Esportes', growth: 45 },
              { name: 'iPhone 16 Pro', searches: '1.8M', category: 'Tecnologia', growth: 78 },
              { name: 'Black Friday 2024', searches: '3.2M', category: 'Compras', growth: 156 },
              { name: 'Netflix Série', searches: '950K', category: 'Entretenimento', growth: 23 },
            ].map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="text-lg font-semibold text-muted-foreground">
                    #{index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{trend.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {trend.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {trend.searches} pesquisas
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">
                    +{trend.growth}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    crescimento
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
