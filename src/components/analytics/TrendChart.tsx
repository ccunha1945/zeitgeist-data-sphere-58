
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const mockChartData = [
  { time: '00:00', searches: 1200, mentions: 450 },
  { time: '04:00', searches: 890, mentions: 320 },
  { time: '08:00', searches: 2100, mentions: 680 },
  { time: '12:00', searches: 3400, mentions: 1200 },
  { time: '16:00', searches: 4200, mentions: 1800 },
  { time: '20:00', searches: 3800, mentions: 1500 },
  { time: '24:00', searches: 2200, mentions: 800 },
];

interface TrendChartProps {
  title?: string;
  description?: string;
}

const TrendChart: React.FC<TrendChartProps> = ({ 
  title = "Evolução das Tendências", 
  description = "Análise das últimas 24 horas" 
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="searchesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="mentionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="time" 
                className="text-xs"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                className="text-xs"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="searches"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#searchesGradient)"
                name="Pesquisas"
              />
              <Area
                type="monotone"
                dataKey="mentions"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
                fill="url(#mentionsGradient)"
                name="Menções"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legenda */}
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Pesquisas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm text-muted-foreground">Menções</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendChart;
