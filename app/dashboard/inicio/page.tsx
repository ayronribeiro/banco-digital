import Link from "next/link"
import { ArrowRight, BarChart3, CreditCard, DollarSign, PieChart, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InicioPage() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Bem-vindo de volta, Ayron!</h1>
        <p className="text-muted-foreground">Confira o resumo da sua conta e as novidades do dia.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Acesso Rápido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="flex flex-col h-auto py-4 gap-2 bg-background/80 hover:bg-background"
              >
                <DollarSign className="h-5 w-5" />
                <span className="text-xs">Transferir</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col h-auto py-4 gap-2 bg-background/80 hover:bg-background"
              >
                <CreditCard className="h-5 w-5" />
                <span className="text-xs">Pagar</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col h-auto py-4 gap-2 bg-background/80 hover:bg-background"
              >
                <PieChart className="h-5 w-5" />
                <span className="text-xs">Investir</span>
              </Button>
              <Button
                variant="outline"
                className="flex flex-col h-auto py-4 gap-2 bg-background/80 hover:bg-background"
              >
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs">Extrato</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Saldo Disponível</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 12.580,45</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <span className="inline-block rounded-full bg-green-500 h-2 w-2"></span>
              Atualizado há 5 minutos
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full gap-1">
              Ver Extrato
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Fatura do Cartão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">R$ 2.500,00</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <span className="inline-block rounded-full bg-amber-500 h-2 w-2"></span>
              Vencimento em 10/04/2023
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full gap-1">
              Pagar Fatura
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Suas últimas 3 transações</CardDescription>
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
              <div className="flex items-center justify-between">
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
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="gap-1">
                Ver Todas
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Novidades</CardTitle>
            <CardDescription>Ofertas e informações para você</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Aumente seu limite de crédito</p>
                    <p className="text-sm text-muted-foreground">
                      Você está elegível para um aumento de limite. Clique para solicitar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <PieChart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Invista com rentabilidade</p>
                    <p className="text-sm text-muted-foreground">
                      Conheça nossos novos fundos de investimento com rentabilidade acima da média.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="gap-1">
              Ver Todas
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

