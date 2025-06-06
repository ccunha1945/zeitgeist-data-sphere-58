
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  Globe, 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Share2,
  CheckCircle,
  AlertCircle,
  Key,
  Link,
  Database
} from 'lucide-react';

const ApiIntegrationsPage = () => {
  const [integrations, setIntegrations] = useState({
    googleTrends: { connected: false, apiKey: '' },
    googleAnalytics: { connected: true, trackingId: 'GA-XXXX-1' },
    googleAdSense: { connected: false, publisherId: '' },
    socialMedia: { connected: false, tokens: {} }
  });

  const handleConnect = (service: string) => {
    console.log(`Conectando com ${service}...`);
    // Aqui seria implementada a lógica de conexão real
  };

  const handleDisconnect = (service: string) => {
    console.log(`Desconectando de ${service}...`);
    // Aqui seria implementada a lógica de desconexão
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">APIs & Integrações</h1>
        <p className="text-muted-foreground mt-2">
          Configure e gerencie todas as integrações de APIs necessárias para o funcionamento do TrendPulse
        </p>
      </div>

      {/* Google Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Serviços Google
          </CardTitle>
          <CardDescription>
            Integrações essenciais com os serviços do Google para coleta de dados e monetização
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Google Trends */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <h3 className="font-semibold">Google Trends API</h3>
                  <Badge variant={integrations.googleTrends.connected ? "default" : "secondary"}>
                    {integrations.googleTrends.connected ? "Conectado" : "Desconectado"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Coleta automática de dados de tendências de pesquisa
                </p>
              </div>
              <Button 
                onClick={() => handleConnect('googleTrends')}
                variant={integrations.googleTrends.connected ? "outline" : "default"}
              >
                {integrations.googleTrends.connected ? "Configurar" : "Conectar"}
              </Button>
            </div>
            
            {!integrations.googleTrends.connected && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  A API do Google Trends é essencial para o funcionamento do sistema. Configure para começar a coletar dados.
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="trends-key">Chave da API</Label>
                <Input 
                  id="trends-key"
                  type="password" 
                  placeholder="Insira sua chave da API do Google Trends"
                  value={integrations.googleTrends.apiKey}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trends-region">Região Padrão</Label>
                <Input 
                  id="trends-region"
                  placeholder="BR (Brasil)"
                  defaultValue="BR"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Google Analytics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <h3 className="font-semibold">Google Analytics</h3>
                  <Badge variant={integrations.googleAnalytics.connected ? "default" : "secondary"}>
                    {integrations.googleAnalytics.connected ? "Conectado" : "Desconectado"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Análise detalhada de tráfego e comportamento dos usuários
                </p>
              </div>
              <Button 
                onClick={() => integrations.googleAnalytics.connected ? handleDisconnect('googleAnalytics') : handleConnect('googleAnalytics')}
                variant={integrations.googleAnalytics.connected ? "outline" : "default"}
              >
                {integrations.googleAnalytics.connected ? "Reconfigurar" : "Conectar"}
              </Button>
            </div>

            {integrations.googleAnalytics.connected && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">Conectado com sucesso</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  ID de Acompanhamento: {integrations.googleAnalytics.trackingId}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="analytics-id">ID de Acompanhamento</Label>
                <Input 
                  id="analytics-id"
                  placeholder="GA-XXXXXXXX-X"
                  defaultValue={integrations.googleAnalytics.trackingId}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="analytics-view">ID da Vista</Label>
                <Input 
                  id="analytics-view"
                  placeholder="ID da vista do Analytics"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Google AdSense */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <h3 className="font-semibold">Google AdSense</h3>
                  <Badge variant={integrations.googleAdSense.connected ? "default" : "secondary"}>
                    {integrations.googleAdSense.connected ? "Conectado" : "Desconectado"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Monetização através de anúncios contextuais
                </p>
              </div>
              <Button 
                onClick={() => handleConnect('googleAdSense')}
                variant={integrations.googleAdSense.connected ? "outline" : "default"}
              >
                {integrations.googleAdSense.connected ? "Configurar" : "Conectar"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adsense-publisher">ID do Editor</Label>
                <Input 
                  id="adsense-publisher"
                  placeholder="pub-XXXXXXXXXXXXXXXX"
                  value={integrations.googleAdSense.publisherId}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adsense-auto">Anúncios Automáticos</Label>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="auto-ads" className="rounded" />
                  <label htmlFor="auto-ads" className="text-sm">Ativar anúncios automáticos</label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media & External APIs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Redes Sociais & APIs Externas
          </CardTitle>
          <CardDescription>
            Integrações com redes sociais e outras APIs para enriquecer o conteúdo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Twitter/X API */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">Twitter/X API</h3>
                <p className="text-sm text-muted-foreground">
                  Incorporar tweets relacionados às tendências
                </p>
              </div>
              <Button variant="outline">Conectar</Button>
            </div>
          </div>

          <Separator />

          {/* YouTube API */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">YouTube Data API</h3>
                <p className="text-sm text-muted-foreground">
                  Exibir vídeos relacionados às tendências
                </p>
              </div>
              <Button variant="outline">Conectar</Button>
            </div>
          </div>

          <Separator />

          {/* News API */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">News API</h3>
                <p className="text-sm text-muted-foreground">
                  Notícias relacionadas às tendências de pesquisa
                </p>
              </div>
              <Button variant="outline">Conectar</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database & Storage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Banco de Dados & Armazenamento
          </CardTitle>
          <CardDescription>
            Configurações de armazenamento de dados e cache
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Cache de Tendências</h3>
              <div className="space-y-2">
                <Label htmlFor="cache-duration">Duração do Cache (minutos)</Label>
                <Input 
                  id="cache-duration"
                  type="number"
                  defaultValue="15"
                  min="5"
                  max="60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="auto-refresh">Atualização Automática</Label>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="auto-refresh" className="rounded" defaultChecked />
                  <label htmlFor="auto-refresh" className="text-sm">Ativar atualização automática</label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Armazenamento de Imagens</h3>
              <div className="space-y-2">
                <Label htmlFor="image-cdn">CDN de Imagens</Label>
                <Input 
                  id="image-cdn"
                  placeholder="https://cdn.exemplo.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-file-size">Tamanho Máximo (MB)</Label>
                <Input 
                  id="max-file-size"
                  type="number"
                  defaultValue="5"
                  min="1"
                  max="50"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status e Monitoramento */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Status das Integrações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800">Funcionando</span>
              </div>
              <p className="text-sm text-green-700">2 integrações ativas</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="font-medium text-yellow-800">Atenção</span>
              </div>
              <p className="text-sm text-yellow-700">1 integração pendente</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="font-medium text-red-800">Erro</span>
              </div>
              <p className="text-sm text-red-700">0 integrações com erro</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ações */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Testar Conexões</Button>
        <Button>Salvar Configurações</Button>
      </div>
    </div>
  );
};

export default ApiIntegrationsPage;
