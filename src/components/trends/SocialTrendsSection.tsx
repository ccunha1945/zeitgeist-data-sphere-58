
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Eye, Heart, Share, MessageCircle, Play } from 'lucide-react';

const socialTrendsData = {
  tiktok: [
    {
      id: '1',
      title: '#ReceitaFácil',
      type: 'hashtag',
      views: '45M',
      growth: 156,
      engagement: '12.5%',
      posts: '2.3K'
    },
    {
      id: '2',
      title: 'Som Trending Dance',
      type: 'audio',
      views: '28M',
      growth: 89,
      engagement: '8.7%',
      posts: '1.8K'
    },
    {
      id: '3',
      title: 'Challenge #Fitness2024',
      type: 'challenge',
      views: '67M',
      growth: 234,
      engagement: '15.2%',
      posts: '4.1K'
    }
  ],
  instagram: [
    {
      id: '1',
      title: '#Reels2024',
      type: 'hashtag',
      likes: '2.1M',
      growth: 78,
      engagement: '9.3%',
      posts: '856K'
    },
    {
      id: '2',
      title: 'Stories Trending',
      type: 'stories',
      likes: '1.5M',
      growth: 45,
      engagement: '6.8%',
      posts: '234K'
    },
    {
      id: '3',
      title: '#OOTD',
      type: 'hashtag',
      likes: '3.8M',
      growth: 123,
      engagement: '11.7%',
      posts: '1.2M'
    }
  ],
  twitter: [
    {
      id: '1',
      title: '#BreakingNews',
      type: 'hashtag',
      tweets: '45K',
      growth: 287,
      engagement: '7.2%',
      retweets: '12K'
    },
    {
      id: '2',
      title: 'Trending Topic',
      type: 'topic',
      tweets: '89K',
      growth: 156,
      engagement: '5.9%',
      retweets: '23K'
    },
    {
      id: '3',
      title: '#Tech2024',
      type: 'hashtag',
      tweets: '67K',
      growth: 198,
      engagement: '8.4%',
      retweets: '18K'
    }
  ],
  youtube: [
    {
      id: '1',
      title: 'Vídeo Viral da Semana',
      type: 'video',
      views: '12M',
      growth: 145,
      engagement: '14.2%',
      subscribers: '+45K'
    },
    {
      id: '2',
      title: '#Shorts Trending',
      type: 'shorts',
      views: '8.5M',
      growth: 89,
      engagement: '11.8%',
      subscribers: '+28K'
    },
    {
      id: '3',
      title: 'Canal em Ascensão',
      type: 'channel',
      views: '6.2M',
      growth: 267,
      engagement: '16.5%',
      subscribers: '+87K'
    }
  ]
};

const platformConfig = {
  tiktok: {
    name: 'TikTok',
    color: 'from-pink-500 to-red-500',
    icon: Play,
    metrics: ['views', 'posts', 'engagement']
  },
  instagram: {
    name: 'Instagram',
    color: 'from-purple-500 to-pink-500',
    icon: Heart,
    metrics: ['likes', 'posts', 'engagement']
  },
  twitter: {
    name: 'Twitter',
    color: 'from-blue-400 to-blue-600',
    icon: MessageCircle,
    metrics: ['tweets', 'retweets', 'engagement']
  },
  youtube: {
    name: 'YouTube',
    color: 'from-red-500 to-red-600',
    icon: Play,
    metrics: ['views', 'subscribers', 'engagement']
  }
};

const SocialTrendsSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('tiktok');

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'views': return Eye;
      case 'likes': return Heart;
      case 'posts': return Share;
      case 'tweets': return MessageCircle;
      case 'retweets': return Share;
      case 'subscribers': return Users;
      case 'engagement': return TrendingUp;
      default: return Eye;
    }
  };

  const formatMetricValue = (trend: any, metric: string) => {
    return trend[metric] || '0';
  };

  const renderTrendCard = (trend: any, platform: string) => {
    const config = platformConfig[platform as keyof typeof platformConfig];
    const IconComponent = config.icon;

    return (
      <Card key={trend.id} className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <CardTitle className="text-lg font-semibold">
                {trend.title}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  {trend.type}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`text-xs bg-gradient-to-r ${config.color} text-white border-0`}
                >
                  <IconComponent className="h-3 w-3 mr-1" />
                  {config.name}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-success">+{trend.growth}%</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3 text-sm">
            {config.metrics.map((metric) => {
              const IconComponent = getMetricIcon(metric);
              return (
                <div key={metric} className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <IconComponent className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="font-semibold">{formatMetricValue(trend, metric)}</div>
                  <div className="text-xs text-muted-foreground capitalize">{metric}</div>
                </div>
              );
            })}
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${config.color} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${Math.min(trend.growth, 100)}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              Redes Sociais
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tendências <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sociais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe o que está em alta nas principais redes sociais em tempo real
          </p>
        </div>

        {/* Tabs por Plataforma */}
        <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {Object.entries(platformConfig).map(([key, config]) => {
              const IconComponent = config.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{config.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(socialTrendsData).map(([platform, trends]) => (
            <TabsContent key={platform} value={platform}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trends.map((trend) => renderTrendCard(trend, platform))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-white">
            Ver Todas as Tendências Sociais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialTrendsSection;
