
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  FileText, 
  Globe, 
  TrendingUp, 
  Edit3, 
  Eye,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';

const SeoContentPage = () => {
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [autoSeo, setAutoSeo] = useState(true);

  const mockTrends = [
    { id: 1, title: 'Inteligência Artificial', status: 'published', seoScore: 95, views: 15420 },
    { id: 2, title: 'Copa do Mundo 2024', status: 'draft', seoScore: 78, views: 8920 },
    { id: 3, title: 'Black Friday', status: 'review', seoScore: 88, views: 12340 },
    { id: 4, title: 'iPhone 15', status: 'published', seoScore: 92, views: 18750 },
  ];

  const mockKeywords = [
    { keyword: 'tendências google', position: 3, volume: 8900, difficulty: 45 },
    { keyword: 'google trends brasil', position: 7, volume: 5600, difficulty: 52 },
    { keyword: 'pesquisas populares', position: 12, volume: 3400, difficulty: 38 },
    { keyword: 'trending topics', position: 5, volume: 7200, difficulty: 48 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="h-4 w-4" />;
      case 'draft': return <Edit3 className="h-4 w-4" />;
      case 'review': return <Eye className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">SEO & Conteúdo</h1>
          <p className="text-muted-foreground">Gerencie otimização e conteúdo das tendências</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Novo Conteúdo
        </Button>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Conteúdo</TabsTrigger>
          <TabsTrigger value="seo">SEO Global</TabsTrigger>
          <TabsTrigger value="keywords">Palavras-chave</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Gerenciamento de Conteúdo
                </CardTitle>
                <CardDescription>
                  Gerencie o conteúdo gerado automaticamente para as tendências
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        checked={autoSeo} 
                        onCheckedChange={setAutoSeo}
                        id="auto-content"
                      />
                      <Label htmlFor="auto-content">Geração automática de conteúdo</Label>
                    </div>
                    <Badge variant="secondary">Ativo</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {mockTrends.map((trend) => (
                      <div key={trend.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(trend.status)}
                            <Badge className={getStatusColor(trend.status)}>
                              {trend.status}
                            </Badge>
                          </div>
                          <div>
                            <h4 className="font-medium">{trend.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {trend.views.toLocaleString()} visualizações
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">SEO Score</div>
                            <div className="text-2xl font-bold text-primary">{trend.seoScore}</div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Edit3 className="h-4 w-4 mr-2" />
                            Editar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Configurações SEO Globais
                </CardTitle>
                <CardDescription>
                  Configure meta tags e otimizações gerais do site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="site-title">Título do Site</Label>
                    <Input 
                      id="site-title"
                      placeholder="TrendPulse - Tendências em Tempo Real"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="site-description">Descrição do Site</Label>
                    <Textarea 
                      id="site-description"
                      placeholder="Descubra as tendências mais populares do Google Trends em tempo real..."
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="keywords">Palavras-chave Principais</Label>
                    <Input 
                      id="keywords"
                      placeholder="google trends, tendências, pesquisas populares"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Configurações Avançadas</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-meta">Geração automática de meta tags</Label>
                      <Switch id="auto-meta" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="schema">Schema.org markup</Label>
                      <Switch id="schema" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sitemap">Sitemap automático</Label>
                      <Switch id="sitemap" defaultChecked />
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  Salvar Configurações SEO
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Monitoramento de Palavras-chave
              </CardTitle>
              <CardDescription>
                Acompanhe o desempenho das principais palavras-chave
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockKeywords.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.keyword}</h4>
                      <p className="text-sm text-muted-foreground">
                        Volume: {item.volume.toLocaleString()} | Dificuldade: {item.difficulty}%
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">#{item.position}</div>
                      <div className="text-sm text-muted-foreground">Posição</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Adicionar Nova Palavra-chave
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Performance SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Score SEO Médio</span>
                    <span className="text-2xl font-bold text-primary">88%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Páginas Indexadas</span>
                    <span className="text-2xl font-bold">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cliques Orgânicos</span>
                    <span className="text-2xl font-bold text-green-600">+23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Visibilidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Impressões</span>
                    <span className="text-2xl font-bold">45.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>CTR Médio</span>
                    <span className="text-2xl font-bold text-blue-600">3.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Posição Média</span>
                    <span className="text-2xl font-bold">7.2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SeoContentPage;
