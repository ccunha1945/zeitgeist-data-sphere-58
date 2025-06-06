
import { useState, useEffect } from 'react';
import { socialApiManager, TrendData, SocialPlatformAPI } from '@/services/socialApiService';

export const useSocialIntegrations = () => {
  const [platforms, setPlatforms] = useState<SocialPlatformAPI[]>([]);
  const [trends, setTrends] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Carregar plataformas disponíveis
  useEffect(() => {
    const loadPlatforms = async () => {
      try {
        const allPlatforms = socialApiManager.getAllPlatforms();
        setPlatforms(allPlatforms);
      } catch (err) {
        setError('Erro ao carregar plataformas');
        console.error(err);
      }
    };

    loadPlatforms();
  }, []);

  // Buscar trends de todas as plataformas conectadas
  const fetchAllTrends = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const allTrends = await socialApiManager.fetchAllTrends();
      setTrends(allTrends);
    } catch (err) {
      setError('Erro ao buscar tendências');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Conectar uma plataforma
  const connectPlatform = async (platformId: string, config: any) => {
    const platform = socialApiManager.getPlatform(platformId);
    if (!platform) {
      throw new Error('Plataforma não encontrada');
    }

    const success = await platform.connect(config);
    if (success) {
      // Atualizar estado local
      setPlatforms(prev => prev.map(p => 
        p.id === platformId ? { ...p, isConnected: true } : p
      ));
    }
    
    return success;
  };

  // Desconectar uma plataforma
  const disconnectPlatform = async (platformId: string) => {
    const platform = socialApiManager.getPlatform(platformId);
    if (!platform) {
      throw new Error('Plataforma não encontrada');
    }

    await platform.disconnect();
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, isConnected: false } : p
    ));
  };

  // Validar todas as conexões
  const validateConnections = async () => {
    const results = await socialApiManager.validateAllConnections();
    
    setPlatforms(prev => prev.map(p => ({
      ...p,
      isConnected: results[p.id] || false
    })));
    
    return results;
  };

  // Obter estatísticas agregadas
  const getStats = async () => {
    return await socialApiManager.getAggregatedStats();
  };

  // Filtrar trends por plataforma
  const getTrendsByPlatform = (platformId: string) => {
    return trends.filter(trend => trend.platform === platformId);
  };

  // Obter plataformas conectadas
  const getConnectedPlatforms = () => {
    return platforms.filter(p => p.isConnected);
  };

  return {
    platforms,
    trends,
    loading,
    error,
    fetchAllTrends,
    connectPlatform,
    disconnectPlatform,
    validateConnections,
    getStats,
    getTrendsByPlatform,
    getConnectedPlatforms
  };
};
