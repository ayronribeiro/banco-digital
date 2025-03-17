"use client"

import { useState } from "react"
import { ChevronDown, Plus, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function InvestimentosPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Investimentos</h1>
        <p className="text-muted-foreground">Acompanhe e gerencie seus investimentos</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Investido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 45.320,18</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3.5 w-3.5" />
              +2.5% este mês
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Rendimento Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 1.125,45</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3.5 w-3.5" />
              +0.8% em relação ao mês anterior
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Rendimento Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 5.320,18</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-green-500">
              <TrendingUp className="h-3.5 w-3.5" />
              +11.7% desde o início
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="carteira" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="carteira">Minha Carteira</TabsTrigger>
          <TabsTrigger value="oportunidades">Oportunidades</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="carteira" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Distribuição da Carteira</CardTitle>
                <Select defaultValue="valor">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Visualização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valor">Por Valor</SelectItem>
                    <SelectItem value="tipo">Por Tipo</SelectItem>
                    <SelectItem value="risco">Por Risco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Distribuição dos seus investimentos por categoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full max-w-[300px] aspect-square rounded-full border-8 border-background relative">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary"></div>
                    <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-green-500"></div>
                    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-amber-500"></div>
                    <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-500"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background rounded-full w-[70%] h-[70%] flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="text-xl font-bold">R$ 45.320,18</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium">Renda Fixa</span>
                      </div>
                      <span className="text-sm font-medium">R$ 25.000,00 (55%)</span>
                    </div>
                    <Progress value={55} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Tesouro Direto</span>
                      </div>
                      <span className="text-sm font-medium">R$ 15.320,18 (34%)</span>
                    </div>
                    <Progress value={34} className="h-2 bg-muted [&>div]:bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm font-medium">Fundos</span>
                      </div>
                      <span className="text-sm font-medium">R$ 3.000,00 (7%)</span>
                    </div>
                    <Progress value={7} className="h-2 bg-muted [&>div]:bg-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium">Ações</span>
                      </div>
                      <span className="text-sm font-medium">R$ 2.000,00 (4%)</span>
                    </div>
                    <Progress value={4} className="h-2 bg-muted [&>div]:bg-blue-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen} className="w-full">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>CDB Banco Digital</CardTitle>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-1">
                        {isDetailsOpen ? "Ocultar Detalhes" : "Mostrar Detalhes"}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isDetailsOpen ? "rotate-180" : ""}`} />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CardDescription>Renda Fixa | 12,5% a.a.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Valor investido</span>
                      <span className="font-medium">R$ 25.000,00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rendimento</span>
                      <span className="font-medium text-green-500">+ R$ 3.125,00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Data de aplicação</span>
                      <span className="font-medium">10/01/2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Vencimento</span>
                      <span className="font-medium">10/01/2024</span>
                    </div>
                  </div>
                </CardContent>
                <CollapsibleContent>
                  <div className="px-6 pb-6 pt-2">
                    <div className="rounded-lg border p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Liquidez</span>
                        <span className="text-sm">Diária</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Imposto de Renda</span>
                        <span className="text-sm">15% sobre o rendimento</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Garantia</span>
                        <span className="text-sm">FGC até R$ 250.000,00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Risco</span>
                        <span className="text-sm">Baixo</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Resgatar</Button>
                  <Button>Aplicar Mais</Button>
                </CardFooter>
              </Card>
            </Collapsible>

            <Card>
              <CardHeader>
                <CardTitle>Tesouro IPCA+</CardTitle>
                <CardDescription>Tesouro Direto | IPCA + 5,5% a.a.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Valor investido</span>
                    <span className="font-medium">R$ 15.320,18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rendimento</span>
                    <span className="font-medium text-green-500">+ R$ 1.845,20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Data de aplicação</span>
                    <span className="font-medium">15/02/2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Vencimento</span>
                    <span className="font-medium">15/08/2026</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Resgatar</Button>
                <Button>Aplicar Mais</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Fundo de Ações</CardTitle>
                <CardDescription>Renda Variável | -2,3% (30d)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Valor investido</span>
                    <span className="font-medium">R$ 5.000,00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rendimento</span>
                    <span className="font-medium text-red-500">- R$ 115,00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Data de aplicação</span>
                    <span className="font-medium">05/03/2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Liquidez</span>
                    <span className="font-medium">D+3</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Resgatar</Button>
                <Button>Aplicar Mais</Button>
              </CardFooter>
            </Card>

            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>Novo Investimento</CardTitle>
                <CardDescription>Explore novas oportunidades de investimento</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
                <p className="text-center text-muted-foreground mb-4">
                  Diversifique sua carteira com novas opções de investimento
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ver Oportunidades</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="oportunidades" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Oportunidades de Investimento</CardTitle>
                <Select defaultValue="recomendados">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recomendados">Recomendados</SelectItem>
                    <SelectItem value="rendafixa">Renda Fixa</SelectItem>
                    <SelectItem value="rendavariavel">Renda Variável</SelectItem>
                    <SelectItem value="fundos">Fundos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Investimentos selecionados com base no seu perfil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">CDB Banco Digital Plus</h3>
                      <p className="text-sm text-muted-foreground">Renda Fixa | 13,2% a.a.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Baixo Risco
                      </div>
                      <Button size="sm">Investir</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rentabilidade</span>
                      <span className="text-sm font-medium">13,2% a.a.</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Vencimento</span>
                      <span className="text-sm font-medium">2 anos</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Aplicação mínima</span>
                      <span className="text-sm font-medium">R$ 1.000,00</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Tesouro Selic 2026</h3>
                      <p className="text-sm text-muted-foreground">Tesouro Direto | SELIC + 0,1% a.a.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Baixo Risco
                      </div>
                      <Button size="sm">Investir</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rentabilidade</span>
                      <span className="text-sm font-medium">SELIC + 0,1% a.a.</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Vencimento</span>
                      <span className="text-sm font-medium">2026</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Aplicação mínima</span>
                      <span className="text-sm font-medium">R$ 104,54</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Fundo Multimercado</h3>
                      <p className="text-sm text-muted-foreground">Fundo de Investimento | +15,7% (12m)</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                        Médio Risco
                      </div>
                      <Button size="sm">Investir</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rentabilidade</span>
                      <span className="text-sm font-medium">+15,7% (12 meses)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Liquidez</span>
                      <span className="text-sm font-medium">D+4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Aplicação mínima</span>
                      <span className="text-sm font-medium">R$ 500,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todas as Oportunidades
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="historico" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Histórico de Investimentos</CardTitle>
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="aplicacoes">Aplicações</SelectItem>
                    <SelectItem value="resgates">Resgates</SelectItem>
                    <SelectItem value="rendimentos">Rendimentos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Histórico de movimentações dos seus investimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Março 2023</h3>
                  <div className="space-y-px rounded-lg border">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-500/10 p-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Rendimento CDB</p>
                          <p className="text-sm text-muted-foreground">CDB Banco Digital</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+ R$ 250,00</p>
                        <p className="text-xs text-muted-foreground">15/03/2023</p>
                      </div>
                    </div>
                    <div className="border-t"></div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-red-500/10 p-2">
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Desvalorização</p>
                          <p className="text-sm text-muted-foreground">Fundo de Ações</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">- R$ 115,00</p>
                        <p className="text-xs text-muted-foreground">10/03/2023</p>
                      </div>
                    </div>
                    <div className="border-t"></div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Plus className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Aplicação</p>
                          <p className="text-sm text-muted-foreground">Fundo de Ações</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ 5.000,00</p>
                        <p className="text-xs text-muted-foreground">05/03/2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Fevereiro 2023</h3>
                  <div className="space-y-px rounded-lg border">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-500/10 p-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Rendimento Tesouro</p>
                          <p className="text-sm text-muted-foreground">Tesouro IPCA+</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+ R$ 145,20</p>
                        <p className="text-xs text-muted-foreground">28/02/2023</p>
                      </div>
                    </div>
                    <div className="border-t"></div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Plus className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Aplicação</p>
                          <p className="text-sm text-muted-foreground">Tesouro IPCA+</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ 15.320,18</p>
                        <p className="text-xs text-muted-foreground">15/02/2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Baixar Extrato Completo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

