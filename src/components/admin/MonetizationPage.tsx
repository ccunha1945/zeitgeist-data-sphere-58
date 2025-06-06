
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  DollarSign, 
  TrendingUp, 
  Eye, 
  MousePointer, 
  Settings, 
  PlusCircle,
  ExternalLink,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

const MonetizationPage: React.FC = () => {
  const [adSenseEnabled, setAdSenseEnabled] = useState(true);
  const [affiliateEnabled, setAffiliateEnabled] = useState(true);
  const [sponsoredEnabled, setSponsoredEnabled] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Monetização</h1>
          <p className="text-muted-foreground">
            Gerencie anúncios, links de afiliados e receitas do TrendPulse
          </p>
        </div>
        <Button className="gradient-primary text-white">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nova Campanha
        </Button>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold text-green-600">R$ 12.847,50</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-600">+23.5%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">RPM Médio</p>
                <p className="text-2xl font-bold">R$ 4,20</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-600">+8.2%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">CTR Médio</p>
                <p className="text-2xl font-bold">2.8%</p>
              </div>
              <MousePointer className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-red-600">-1.2%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Impressões</p>
                <p className="text-2xl font-bold">3.2M</p>
              </div>
              <Eye className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-600">+45.1%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="adsense" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="adsense">Google AdSense</TabsTrigger>
          <TabsTrigger value="affiliate">Links Afiliados</TabsTrigger>
          <TabsTrigger value="sponsored">Conteúdo Patrocinado</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
        </TabsList>

        {/* Google AdSense Tab */}
        <TabsContent value="adsense" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Configurações do AdSense</span>
                  <Switch checked={adSenseEnabled} onCheckedChange={setAdSenseEnabled} />
                </CardTitle>
                <CardDescription>
                  Configure suas unidades de anúncio e otimizações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="adsense-id">ID do Publisher</Label>
                  <Input 
                    id="adsense-id" 
                    placeholder="pub-1234567890123456"
                    defaultValue="pub-8976543210987654"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Unidades de Anúncio Ativas</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Banner Header</p>
                        <p className="text-sm text-muted-foreground">728x90 - Leaderboard</p>
                      </div>
                      <Badge variant="secondary">Ativo</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Sidebar</p>
                        <p className="text-sm text-muted-foreground">300x250 - Medium Rectangle</p>
                      </div>
                      <Badge variant="secondary">Ativo</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">In-Content</p>
                        <p className="text-sm text-muted-foreground">336x280 - Large Rectangle</p>
                      </div>
                      <Badge variant="outline">Pausado</Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurar Unidades
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance AdSense</CardTitle>
                <CardDescription>Métricas dos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-green-600">R$ 8.420,30</p>
                    <p className="text-sm text-muted-foreground">Receita AdSense</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold">R$ 3,85</p>
                    <p className="text-sm text-muted-foreground">RPM</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold">2.6%</p>
                    <p className="text-sm text-muted-foreground">CTR</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold">2.1M</p>
                    <p className="text-sm text-muted-foreground">Impressões</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Otimizações Sugeridas</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">Ativar anúncios responsivos automáticos</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Target className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Melhorar posicionamento mobile</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Affiliate Links Tab */}
        <TabsContent value="affiliate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Gerenciar Links Afiliados</span>
                  <Switch checked={affiliateEnabled} onCheckedChange={setAffiliateEnabled} />
                </CardTitle>
                <CardDescription>
                  Configure seus programas de afiliados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Adicionar Novo Link
                </Button>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Amazon Associates</p>
                      <p className="text-sm text-muted-foreground">15 links ativos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">R$ 1.250,80</p>
                      <p className="text-xs text-muted-foreground">Este mês</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Hotmart</p>
                      <p className="text-sm text-muted-foreground">8 links ativos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">R$ 890,40</p>
                      <p className="text-xs text-muted-foreground">Este mês</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Monetizze</p>
                      <p className="text-sm text-muted-foreground">12 links ativos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">R$ 650,90</p>
                      <p className="text-xs text-muted-foreground">Este mês</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurar Novo Link</CardTitle>
                <CardDescription>
                  Adicione um novo link de afiliado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="affiliate-name">Nome do Programa</Label>
                  <Input id="affiliate-name" placeholder="Ex: Amazon Associates" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="affiliate-url">URL do Link</Label>
                  <Input id="affiliate-url" placeholder="https://..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="affiliate-category">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="financas">Finanças</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="affiliate-description">Descrição</Label>
                  <Textarea 
                    id="affiliate-description" 
                    placeholder="Descreva o produto ou serviço..."
                    rows={3}
                  />
                </div>

                <Button className="w-full">Salvar Link</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Sponsored Content Tab */}
        <TabsContent value="sponsored" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Conteúdo Patrocinado</span>
                  <Switch checked={sponsoredEnabled} onCheckedChange={setSponsoredEnabled} />
                </CardTitle>
                <CardDescription>
                  Gerencie parcerias e conteúdo patrocinado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 border-2 border-dashed rounded-lg">
                  <p className="text-muted-foreground mb-4">Nenhum conteúdo patrocinado ativo</p>
                  <Button>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Criar Primeira Campanha
                  </Button>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Propostas Pendentes</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">TechCorp Brasil</p>
                        <p className="text-sm text-muted-foreground">Proposta para review de produto</p>
                      </div>
                      <Badge variant="outline">Pendente</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">EduPlatform</p>
                        <p className="text-sm text-muted-foreground">Banner promocional</p>
                      </div>
                      <Badge variant="outline">Em análise</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nova Campanha Patrocinada</CardTitle>
                <CardDescription>
                  Configure uma nova parceria
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sponsor-name">Nome do Anunciante</Label>
                  <Input id="sponsor-name" placeholder="Nome da empresa" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign-type">Tipo de Campanha</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banner">Banner Display</SelectItem>
                      <SelectItem value="native">Conteúdo Nativo</SelectItem>
                      <SelectItem value="video">Vídeo Promocional</SelectItem>
                      <SelectItem value="article">Artigo Patrocinado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Data de Início</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Data de Término</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign-value">Valor da Campanha</Label>
                  <Input id="campaign-value" placeholder="R$ 0,00" />
                </div>

                <Button className="w-full">Criar Campanha</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Relatório de Receitas
                </CardTitle>
                <CardDescription>Análise detalhada por fonte de receita</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Google AdSense</span>
                    <div className="text-right">
                      <span className="font-medium">R$ 8.420,30</span>
                      <div className="w-32 bg-muted rounded-full h-2 ml-auto">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Links Afiliados</span>
                    <div className="text-right">
                      <span className="font-medium">R$ 2.791,10</span>
                      <div className="w-32 bg-muted rounded-full h-2 ml-auto">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Conteúdo Patrocinado</span>
                    <div className="text-right">
                      <span className="font-medium">R$ 1.636,10</span>
                      <div className="w-32 bg-muted rounded-full h-2 ml-auto">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '13%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-2xl font-bold text-green-600">R$ 12.847,50</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metas de Monetização</CardTitle>
                <CardDescription>Acompanhe o progresso das suas metas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Meta Mensal</span>
                      <span className="text-sm font-medium">R$ 12.847 / R$ 15.000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full" style={{ width: '86%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">86% da meta atingida</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">RPM Alvo</span>
                      <span className="text-sm font-medium">R$ 4,20 / R$ 5,00</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">84% do alvo atingido</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">CTR Objetivo</span>
                      <span className="text-sm font-medium">2.8% / 3.5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">80% do objetivo atingido</p>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Relatório Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MonetizationPage;
