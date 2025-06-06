
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Eye, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrendData {
  id: string;
  title: string;
  category: string;
  searchVolume: string;
  growth: number;
  description: string;
  region: string;
  timeframe: string;
}

interface TrendCardProps {
  trend: TrendData;
  onClick?: () => void;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend, onClick }) => {
  const isGrowing = trend.growth >= 0;
  
  return (
    <Card className="trend-card cursor-pointer group" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {trend.title}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                {trend.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {trend.region}
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            {isGrowing ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={isGrowing ? "text-success" : "text-destructive"}>
              {Math.abs(trend.growth)}%
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {trend.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{trend.searchVolume}</span>
            </div>
            <span>•</span>
            <span>{trend.timeframe}</span>
          </div>
          
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Share className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Progress bar para indicar popularidade */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(trend.growth + 50, 100)}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendCard;
