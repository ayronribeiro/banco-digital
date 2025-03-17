"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Bell,
  CreditCard,
  DollarSign,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  PieChart,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/dashboard/inicio", icon: Home, label: "Início" },
    { href: "/dashboard", icon: BarChart3, label: "Visão Geral" },
    { href: "/dashboard/cartoes", icon: CreditCard, label: "Cartões" },
    { href: "/dashboard/transferencias", icon: DollarSign, label: "Transferências" },
    { href: "/dashboard/investimentos", icon: PieChart, label: "Investimentos" },
  ]

  const bottomNavItems = [
    { href: "/dashboard/configuracoes", icon: Settings, label: "Configurações" },
    { href: "/", icon: LogOut, label: "Sair" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-accent/50 to-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[240px] sm:w-[300px] bg-gradient-to-b from-background to-accent/20"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center gap-2 py-4 font-bold text-xl text-primary">
                    <CreditCard className="h-6 w-6" />
                    <span>BancoDigital</span>
                  </div>
                  <div className="flex-1">
                    <nav className="grid gap-2 py-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                            isActive(item.href)
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="border-t py-4">
                    <nav className="grid gap-2">
                      {bottomNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                            isActive(item.href)
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-primary">
              <CreditCard className="h-6 w-6" />
              <span className="hidden md:inline-block">BancoDigital</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative hover:bg-primary/10 hover:text-primary border-primary/20"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-auto">
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer hover:bg-accent">
                    <div className="flex w-full justify-between">
                      <span className="font-medium">Transferência recebida</span>
                      <span className="text-xs text-muted-foreground">Hoje, 10:45</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Você recebeu R$ 1.250,00 de Maria Oliveira</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer hover:bg-accent">
                    <div className="flex w-full justify-between">
                      <span className="font-medium">Fatura disponível</span>
                      <span className="text-xs text-muted-foreground">Ontem, 08:30</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Sua fatura de R$ 2.500,00 está disponível para pagamento
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer hover:bg-accent">
                    <div className="flex w-full justify-between">
                      <span className="font-medium">Novo investimento</span>
                      <span className="text-xs text-muted-foreground">15/03, 14:22</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Conheça nossos novos fundos de investimento</span>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center cursor-pointer hover:bg-accent">
                  <span className="w-full text-center text-primary">Ver todas as notificações</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex gap-2 hover:bg-primary/10 hover:text-primary border-primary/20"
                >
                  <User className="h-4 w-4" />
                  <span>Ayron Rivero</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard/configuracoes" className="w-full">
                  <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/cartoes" className="w-full">
                  <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Meus Cartões</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/configuracoes" className="w-full">
                  <DropdownMenuItem className="cursor-pointer hover:bg-accent">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/" className="w-full">
                  <DropdownMenuItem className="cursor-pointer text-red-500 hover:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[240px] flex-col border-r bg-gradient-to-b from-background to-accent/20 lg:flex fixed top-16 bottom-0">
          <div className="flex-1 overflow-y-auto">
            <nav className="grid gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="grid gap-2 p-4">
              {bottomNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex-1 lg:ml-[240px] p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

