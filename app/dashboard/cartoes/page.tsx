"use client"

import { useState } from "react"
import { ChevronDown, CreditCard, DollarSign, Eye, EyeOff, Lock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Progress } from "@/components/ui/progress"

export default function CartoesPage() {
  const [showCardNumber, setShowCardNumber] = useState(false)
  const [isVirtualCardOpen, setIsVirtualCardOpen] = useState(false)

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Meus Cartões</h1>
        <p className="text-muted-foreground">Gerencie seus cartões de crédito e débito</p>
      </div>

      <Tabs defaultValue="credito" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="credito">Crédito</TabsTrigger>
          <TabsTrigger value="debito">Débito</TabsTrigger>
          <TabsTrigger value="virtual">Virtual</TabsTrigger>
        </TabsList>

        <TabsContent value="credito" className="mt-4 space-y-6">
          <div className="w-full max-w-md mx-auto">
            <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-foreground/70 p-6 text-primary-foreground shadow-lg">
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
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-medium tracking-widest">
                      {showCardNumber ? "5432 1098 7654 5678" : "**** **** **** 5678"}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full bg-primary-foreground/20 text-primary-foreground"
                      onClick={() => setShowCardNumber(!showCardNumber)}
                    >
                      {showCardNumber ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    </Button>
                  </div>
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

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Fatura Atual</CardTitle>
                <CardDescription>Período: 15/02 a 15/03</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Limite utilizado</span>
                    <span className="text-sm font-medium">R$ 2.500,00 de R$ 10.000,00</span>
                  </div>
                  <Progress value={25} className="h-2 mt-2" />
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Valor da fatura</span>
                      <span className="text-lg font-bold text-red-500">R$ 2.500,00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Vencimento</span>
                      <span className="text-xs font-medium">10/04/2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Status</span>
                      <span className="text-xs font-medium text-amber-500">Em aberto</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pagar Fatura</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Últimas Compras</CardTitle>
                <CardDescription>Transações recentes do cartão</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Supermercado Extra</p>
                      <p className="text-xs text-muted-foreground">Ontem, 18:30</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 345,78</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Farmácia São Paulo</p>
                      <p className="text-xs text-muted-foreground">15/03, 10:15</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 89,90</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Posto Ipiranga</p>
                      <p className="text-xs text-muted-foreground">14/03, 16:45</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 150,00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Netflix</p>
                      <p className="text-xs text-muted-foreground">10/03, 00:00</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 39,90</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Fatura Completa
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Cartão</CardTitle>
              <CardDescription>Opções de segurança e configurações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-start items-center">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>Bloquear Cartão</span>
                  <span className="text-xs text-muted-foreground">Bloqueio temporário</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-start items-center">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Alterar Senha</span>
                  <span className="text-xs text-muted-foreground">Senha de 4 dígitos</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-start items-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>Ajustar Limite</span>
                  <span className="text-xs text-muted-foreground">Solicitar aumento</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debito" className="mt-4 space-y-6">
          <div className="w-full max-w-md mx-auto">
            <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-800 p-6 text-primary-foreground shadow-lg">
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
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-medium tracking-widest">
                      {showCardNumber ? "4321 8765 9876 1234" : "**** **** **** 1234"}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full bg-primary-foreground/20 text-primary-foreground"
                      onClick={() => setShowCardNumber(!showCardNumber)}
                    >
                      {showCardNumber ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    </Button>
                  </div>
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

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Saldo em Conta</CardTitle>
                <CardDescription>Disponível para uso no débito</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Saldo disponível</span>
                      <span className="text-lg font-bold">R$ 12.580,45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Atualizado em</span>
                      <span className="text-xs font-medium">17/03/2023, 14:30</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button variant="outline" className="flex-1">
                  Depositar
                </Button>
                <Button className="flex-1">Transferir</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Últimas Transações</CardTitle>
                <CardDescription>Movimentações no débito</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Padaria São Bento</p>
                      <p className="text-xs text-muted-foreground">Hoje, 08:15</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 15,50</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Posto Shell</p>
                      <p className="text-xs text-muted-foreground">16/03, 18:30</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 200,00</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">Restaurante Sabor Brasil</p>
                      <p className="text-xs text-muted-foreground">16/03, 12:45</p>
                    </div>
                    <p className="font-medium text-red-500">- R$ 45,90</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Transferência Recebida</p>
                      <p className="text-xs text-muted-foreground">15/03, 10:30</p>
                    </div>
                    <p className="font-medium text-green-500">+ R$ 1.250,00</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Extrato Completo
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Cartão de Débito</CardTitle>
              <CardDescription>Opções de segurança e configurações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-start items-center">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>Bloquear Cartão</span>
                  <span className="text-xs text-muted-foreground">Bloqueio temporário</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-start items-center">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Alterar Senha</span>
                  <span className="text-xs text-muted-foreground">Senha de 4 dígitos</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-start items-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>Configurar Limites</span>
                  <span className="text-xs text-muted-foreground">Ajustar limites diários</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="virtual" className="mt-4 space-y-6">
          <Collapsible open={isVirtualCardOpen} onOpenChange={setIsVirtualCardOpen} className="w-full">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Cartão Virtual</CardTitle>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-1">
                      {isVirtualCardOpen ? "Ocultar Detalhes" : "Mostrar Detalhes"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isVirtualCardOpen ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CardDescription>Cartão virtual para compras online</CardDescription>
              </CardHeader>
              <CollapsibleContent>
                <CardContent>
                  <div className="w-full max-w-md mx-auto">
                    <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-primary-foreground shadow-lg">
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
                          <div className="flex items-center gap-2">
                            <p className="text-xl font-medium tracking-widest">
                              {showCardNumber ? "9876 5432 1098 7654" : "**** **** **** 7654"}
                            </p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-primary-foreground/20 text-primary-foreground"
                              onClick={() => setShowCardNumber(!showCardNumber)}
                            >
                              {showCardNumber ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <p className="text-xs opacity-80">TITULAR</p>
                            <p className="font-medium">AYRON RIVERO</p>
                          </div>
                          <div>
                            <p className="text-xs opacity-80">VALIDADE</p>
                            <p className="font-medium">03/24</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">CVV</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">{showCardNumber ? "123" : "***"}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-full"
                              onClick={() => setShowCardNumber(!showCardNumber)}
                            >
                              {showCardNumber ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Status</span>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Ativo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="grid w-full gap-2 md:grid-cols-2">
                  <Button variant="outline" className="w-full">
                    Bloquear Cartão
                  </Button>
                  <Button className="w-full">Gerar Novo Cartão</Button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Este cartão é exclusivo para compras online e pode ser bloqueado a qualquer momento.
                </p>
              </CardFooter>
            </Card>
          </Collapsible>

          <Card>
            <CardHeader>
              <CardTitle>Transações do Cartão Virtual</CardTitle>
              <CardDescription>Últimas compras realizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Amazon</p>
                    <p className="text-xs text-muted-foreground">15/03, 14:22</p>
                  </div>
                  <p className="font-medium text-red-500">- R$ 159,90</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Uber</p>
                    <p className="text-xs text-muted-foreground">12/03, 19:45</p>
                  </div>
                  <p className="font-medium text-red-500">- R$ 24,50</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">iFood</p>
                    <p className="text-xs text-muted-foreground">10/03, 20:15</p>
                  </div>
                  <p className="font-medium text-red-500">- R$ 45,80</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Spotify</p>
                    <p className="text-xs text-muted-foreground">05/03, 00:00</p>
                  </div>
                  <p className="font-medium text-red-500">- R$ 19,90</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todas as Transações
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Segurança do Cartão Virtual</CardTitle>
              <CardDescription>Configurações de segurança</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Notificações de compra</p>
                      <p className="text-xs text-muted-foreground">Receba alertas para cada transação</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ativar
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Bloqueio automático</p>
                      <p className="text-xs text-muted-foreground">Bloqueia após cada compra</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Desativar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

