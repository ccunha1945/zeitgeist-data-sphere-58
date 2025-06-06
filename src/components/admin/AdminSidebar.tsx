
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Settings, 
  Users, 
  Globe,
  Calendar,
  Search
} from 'lucide-react';

const menuItems = [
  {
    title: "Dashboard",
    url: "#dashboard",
    icon: TrendingUp,
  },
  {
    title: "Análise de Tráfego",
    url: "#traffic",
    icon: Users,
  },
  {
    title: "SEO & Conteúdo",
    url: "#seo",
    icon: Search,
  },
  {
    title: "Monetização",
    url: "#monetization",
    icon: Calendar,
  },
  {
    title: "APIs & Integrações",
    url: "#apis",
    icon: Globe,
  },
  {
    title: "Configurações",
    url: "#settings",
    icon: Settings,
  },
];

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  onLogout 
}) => {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-primary">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold">TrendPulse</h2>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administração</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const sectionId = item.url.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      onClick={() => onSectionChange(sectionId)}
                      className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onLogout}
          className="w-full"
        >
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
