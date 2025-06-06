
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Smartphone, 
  Camera, 
  MessageCircle, 
  Play, 
  Users,
  CheckCircle,
  AlertCircle,
  Settings,
  TrendingUp,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  connected: boolean;
  color: string;
  description: string;
  metrics?: {
    trends: number;
    lastSync: string;
    apiCalls: number;
    limit: number;
  };
}

const SocialIntegrationsPage = () => {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: Smartphone,
      connected: false,
      color: 'from-black to-red-500',
      description: 'Hashtags trending, sons virais, challenges populares',
      metrics: {
        trends: 0,
        lastSync: 'Nunca',
        apiCalls: 0,
        limit: 1000
      }
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Camera,
      connected: true,
      color: 'from-purple-500 to-pink-500',
      description: 'Stories em alta, Reels populares, hashtags trending',
      metrics: {
        trends: 156,
        lastSync: '5 min atrás',
        apiCalls: 847,
        limit: 1000
      }
    },
    {
      id: 'twitter',
      name: 'Twitter/X',
      icon: MessageCircle,
      connected: false,
      color: 'from-blue-400 to-blue-600',
      description: 'Trending topics, hashtags virais, mentions em alta',
      metrics: {
        trends: 0,
        lastSync: 'Nunca',
        apiCalls: 0,
        limit: 2000
      }
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: Play,
      connected: true,
      color: 'from-red-500 to-red-600',
      description: 'Vídeos em trending, creators em ascensão, palavras-chave populares',
      metrics: {
        trends: 89,
        lastSync: '2 min atrás',
        apiCalls: 234,
        limit: 1500
      }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Users,
      connected: false,
      color: 'from-blue-600 to-blue-700',
      description: 'Tópicos trending, páginas em crescimento, conteúdo viral',
      metrics: {
        trends: 0,
        lastSync: 'Nunca',
        apiCalls: 0,
        limit: 800
      }
    }
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [apiConfigs, setApiConfigs] = useState<Record<string, any>>({});

  const handleConnect = (platformId: string) => {
    console.log(`Conectando com ${platformId}...`);
    // Aqui seria implementada a lógica real de conexão
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, connected: true } : p
    ));
  };

  const handleDisconnect = (platformId: string) => {
    console.log(`Desconectando de ${platformId}...`);
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, connected: false } : p
    ));
  };

  const handleSync = (platformId: string) => {
    console.log(`Sincronizando ${platformId}...`);
    // Implementar lógica de sincronização
  };

  const connectedPlatforms = platforms.filter(p => p.connected);
  const disconnectedPlatforms = platforms.filter(p => !p.connected);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Integrações Sociais</h1>
          <p className="text-muted-foreground mt-2">
            Conecte e gerencie múltiplas plataformas sociais para expandir suas análises de tendências
          </p>
        </div>
        <Button onClick={() => window.location.reload()}>
          <TrendingUp className="h-4 w-4 mr-2" />
          Sincronizar Todas
        </Button>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Plataformas Conectadas</p>
                <p className="text-2xl font-bold text-green-600">{connectedPlatforms.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total de Trends</p>
                <p className="text-2xl font-bold">{platforms.reduce((acc, p) => acc + (p.metrics?.trends || 0), 0)}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Chamadas API Hoje</p>
                <p className="text-2xl font-bold">{platforms.reduce((acc, p) => acc + (p.metrics?.apiCalls || 0), 0)}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">{disconnectedPlatforms.length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="configure">Configurar</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Plataformas Conectadas */}
          {connectedPlatforms.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Plataformas Conectadas</CardTitle>
                <CardDescription>Plataformas ativas coletando dados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {connectedPlatforms.map((platform) => (
                  <div key={platform.id} className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color}`}>
                        <platform.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {platform.metrics?.trends} trends
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Última sync: {platform.metrics?.lastSync}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleSync(platform.id)}
                      >
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Sincronizar
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedPlatform(platform.id)}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Configurar
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDisconnect(platform.id)}
                      >
                        Desconectar
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Plataformas Disponíveis */}
          {disconnectedPlatforms.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-600">Plataformas Disponíveis</CardTitle>
                <CardDescription>Conecte novas plataformas para expandir sua coleta de dados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {disconnectedPlatforms.map((platform) => (
                  <div key={platform.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} opacity-50`}>
                        <platform.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                        <Badge variant="secondary" className="mt-2">Não conectado</Badge>
                      </div>
                    </div>
                    <Button onClick={() => handleConnect(platform.id)}>
                      Conectar
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="configure" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de API</CardTitle>
              <CardDescription>Configure as credenciais e parâmetros para cada plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedPlatform ? (
                <PlatformConfigForm 
                  platform={platforms.find(p => p.id === selectedPlatform)!}
                  onSave={(config) => {
                    setApiConfigs(prev => ({ ...prev, [selectedPlatform]: config }));
                    setSelectedPlatform('');
                  }}
                />
              ) : (
                <div className="text-center py-8">
                  <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Selecione uma plataforma para configurar</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Uso de API por Plataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platforms.filter(p => p.connected).map((platform) => (
                    <div key={platform.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <platform.icon className="h-4 w-4" />
                          {platform.name}
                        </span>
                        <span>{platform.metrics?.apiCalls}/{platform.metrics?.limit}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${platform.color}`}
                          style={{ 
                            width: `${((platform.metrics?.apiCalls || 0) / (platform.metrics?.limit || 1)) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trends Coletadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platforms.filter(p => p.connected).map((platform) => (
                    <div key={platform.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <platform.icon className="h-4 w-4" />
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{platform.metrics?.trends}</div>
                        <div className="text-xs text-muted-foreground">trends ativas</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Componente auxiliar para formulário de configuração
const PlatformConfigForm = ({ platform, onSave }: { platform: SocialPlatform; onSave: (config: any) => void }) => {
  const [config, setConfig] = useState({});

  const renderConfigFields = () => {
    switch (platform.id) {
      case 'tiktok':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tiktok-app-id">App ID</Label>
              <Input id="tiktok-app-id" placeholder="Seu TikTok App ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tiktok-secret">App Secret</Label>
              <Input id="tiktok-secret" type="password" placeholder="Seu TikTok App Secret" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tiktok-hashtags">Hashtags Monitoradas</Label>
              <Input id="tiktok-hashtags" placeholder="#trend, #viral, #fyp" />
            </div>
          </div>
        );
      case 'instagram':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ig-app-id">Facebook App ID</Label>
              <Input id="ig-app-id" placeholder="Seu Facebook App ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ig-secret">App Secret</Label>
              <Input id="ig-secret" type="password" placeholder="Seu App Secret" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ig-token">Access Token</Label>
              <Input id="ig-token" type="password" placeholder="Instagram Access Token" />
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Configuração para {platform.name} em desenvolvimento
              </AlertDescription>
            </Alert>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color}`}>
          <platform.icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{platform.name}</h3>
          <p className="text-sm text-muted-foreground">{platform.description}</p>
        </div>
      </div>

      {renderConfigFields()}

      <div className="flex space-x-4">
        <Button onClick={() => onSave(config)}>Salvar Configuração</Button>
        <Button variant="outline" onClick={() => window.history.back()}>Cancelar</Button>
      </div>
    </div>
  );
};

export default SocialIntegrationsPage;
