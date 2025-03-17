"use client"
import Link from "next/link"
import { CreditCard, DollarSign, Download, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Olá, Ayron Rivero</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex gap-2 hover:bg-primary/10 hover:text-primary border-primary/20"
          >
            <Download className="h-4 w-4" />
            <span>Extrato</span>
          </Button>
          <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            <span>Nova Transferência</span>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors">
          <CardHeader className="bg-primary/10 p-4">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">R$ 12.580,45</div>
            <p className="text-xs text-muted-foreground">Atualizado em 17/03/2023</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-green-500/10 hover:border-green-500/30 transition-colors">
          <CardHeader className="bg-green-500/10 p-4">
            <CardTitle className="text-sm font-medium">Receitas do Mês</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-500">R$ 8.250,00</div>
            <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-red-500/10 hover:border-red-500/30 transition-colors">
          <CardHeader className="bg-red-500/10 p-4">
            <CardTitle className="text-sm font-medium">Despesas do Mês</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-500">R$ 3.420,75</div>
            <p className="text-xs text-muted-foreground">-5% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-secondary/10 hover:border-secondary/30 transition-colors">
          <CardHeader className="bg-secondary/10 p-4">
            <CardTitle className="text-sm font-medium">Investimentos</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-secondary">R$ 45.320,18</div>
            <p className="text-xs text-muted-foreground">+2.5% de rendimento</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="transacoes" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px] bg-accent">
          <TabsTrigger
            value="transacoes"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Transações
          </TabsTrigger>
          <TabsTrigger
            value="cartoes"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Cartões
          </TabsTrigger>
          <TabsTrigger
            value="investimentos"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Investimentos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="transacoes" className="mt-4">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Últimas Transações</CardTitle>
              <CardDescription>Visualize suas transações recentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Transferência Recebida</p>
                      <p className="text-sm text-muted-foreground">Maria Oliveira</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-500">+ R$ 1.250,00</p>
                    <p className="text-xs text-muted-foreground">Hoje, 10:45</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Pagamento com Cartão</p>
                      <p className="text-sm text-muted-foreground">Supermercado Extra</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-500">- R$ 345,78</p>
                    <p className="text-xs text-muted-foreground">Ontem, 18:30</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Transferência Enviada</p>
                      <p className="text-sm text-muted-foreground">Carlos Santos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-500">- R$ 850,00</p>
                    <p className="text-xs text-muted-foreground">15/03, 14:22</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Pagamento de Conta</p>
                      <p className="text-sm text-muted-foreground">Energia Elétrica</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-500">- R$ 210,45</p>
                    <p className="text-xs text-muted-foreground">14/03, 09:15</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary border-primary/20">
                Ver Todas
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary border-primary/20">
                Filtrar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="cartoes" className="mt-4">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Seus Cartões</CardTitle>
              <CardDescription>Gerencie seus cartões de crédito e débito</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground shadow-lg">
                    <div className="absolute right-4 top-4">
                      <CreditCard className="h-8 w-8" />
                    </div>
                    <div className="mt-4 space-y-6">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-12 rounded bg-primary-foreground/20"></div>
                        <div className="h-8 w-12 rounded bg-primary-foreground/20"></div>
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Número do Cartão</p>
                        <p className="text-xl font-medium tracking-widest">**** **** **** 5678</p>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs opacity-80">TITULAR</p>
                          <p className="font-medium">AYRON RIVERO</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-80">VALIDADE</p>
                          <p className="font-medium">12/28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-lg border bg-card p-4 shadow-sm border-primary/10 hover:border-primary/30 transition-colors">
                    <p className="text-sm font-medium">Limite Disponível</p>
                    <p className="text-2xl font-bold">R$ 7.500,00</p>
                    <p className="text-xs text-muted-foreground">de R$ 10.000,00</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4 shadow-sm border-red-500/10 hover:border-red-500/30 transition-colors">
                    <p className="text-sm font-medium">Fatura Atual</p>
                    <p className="text-2xl font-bold text-red-500">R$ 2.500,00</p>
                    <p className="text-xs text-muted-foreground">Vencimento: 10/04/2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary border-primary/20">
                Bloquear Cartão
              </Button>
              <Link href="/dashboard/cartoes">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Ver Detalhes
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="investimentos" className="mt-4">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Seus Investimentos</CardTitle>
              <CardDescription>Acompanhe o desempenho dos seus investimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4 shadow-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">CDB Banco Digital</p>
                      <p className="text-sm text-muted-foreground">Renda Fixa</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$ 25.000,00</p>
                      <p className="text-sm text-green-500">+12,5% a.a.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm border-secondary/10 hover:border-secondary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tesouro Direto</p>
                      <p className="text-sm text-muted-foreground">Tesouro IPCA+</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$ 15.320,18</p>
                      <p className="text-sm text-green-500">IPCA + 5,5% a.a.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fundo de Ações</p>
                      <p className="text-sm text-muted-foreground">Renda Variável</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">R$ 5.000,00</p>
                      <p className="text-sm text-red-500">-2,3% (30d)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary border-primary/20">
                Ver Todos
              </Button>
              <Link href="/dashboard/investimentos">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Ver Detalhes
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

