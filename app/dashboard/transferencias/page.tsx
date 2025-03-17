"use client"

import type React from "react"

import { useState } from "react"
import { ArrowDown, ArrowUp, Calendar, ChevronDown, Copy, DollarSign, Plus, Search, User, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

export default function TransferenciasPage() {
  const [isContactsOpen, setIsContactsOpen] = useState(false)
  const [transferValue, setTransferValue] = useState("")
  const [selectedContact, setSelectedContact] = useState<string | null>(null)

  const handleContactSelect = (name: string) => {
    setSelectedContact(name)
    setIsContactsOpen(false)
  }

  const formatCurrency = (value: string) => {
    // Remove tudo que não for número
    const numericValue = value.replace(/\D/g, "")

    // Converte para número e formata como moeda
    const amount = Number.parseFloat(numericValue) / 100
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setTransferValue(value)
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Transferências</h1>
        <p className="text-muted-foreground">Envie e receba dinheiro de forma rápida e segura</p>
      </div>

      <Tabs defaultValue="nova" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="nova">Nova Transferência</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
          <TabsTrigger value="agendadas">Agendadas</TabsTrigger>
        </TabsList>

        <TabsContent value="nova" className="mt-4 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Transferir Dinheiro</CardTitle>
                <CardDescription>Preencha os dados para transferência</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="destinatario">Para quem você quer transferir?</Label>
                  <div className="relative">
                    <Input
                      id="destinatario"
                      placeholder="Nome, CPF, chave Pix ou dados bancários"
                      value={selectedContact || ""}
                      onChange={(e) => setSelectedContact(e.target.value)}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setIsContactsOpen(!isContactsOpen)}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <Collapsible open={isContactsOpen} onOpenChange={setIsContactsOpen}>
                    <CollapsibleContent className="mt-2 rounded-md border bg-background p-2">
                      <div className="mb-2">
                        <div className="relative">
                          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Buscar contato" className="pl-8" />
                        </div>
                      </div>
                      <div className="space-y-1 max-h-48 overflow-y-auto">
                        {["Maria Oliveira", "Carlos Santos", "Ana Pereira", "Pedro Almeida", "Juliana Costa"].map(
                          (name) => (
                            <Button
                              key={name}
                              variant="ghost"
                              className="w-full justify-start text-left"
                              onClick={() => handleContactSelect(name)}
                            >
                              <User className="mr-2 h-4 w-4" />
                              {name}
                            </Button>
                          ),
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Qual valor você quer transferir?</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="valor"
                      className="pl-10 text-lg font-bold"
                      value={transferValue ? formatCurrency(transferValue) : ""}
                      onChange={handleValueChange}
                      placeholder="R$ 0,00"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de transferência</Label>
                  <Select defaultValue="pix">
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pix">Pix</SelectItem>
                      <SelectItem value="ted">TED</SelectItem>
                      <SelectItem value="doc">DOC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data">Data da transferência</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="data"
                      type="date"
                      className="pl-10"
                      defaultValue={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full">Transferir Agora</Button>
                <p className="text-xs text-muted-foreground text-center">
                  Transferências Pix são processadas instantaneamente, 24 horas por dia.
                </p>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contatos Frequentes</CardTitle>
                  <CardDescription>Pessoas para quem você transfere com frequência</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {["Maria O.", "Carlos S.", "Ana P.", "Pedro A."].map((name) => (
                      <Button
                        key={name}
                        variant="outline"
                        className="flex flex-col h-auto py-4 gap-2 justify-center items-center"
                        onClick={() => handleContactSelect(name)}
                      >
                        <div className="rounded-full bg-primary/10 p-2">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs">{name}</span>
                      </Button>
                    ))}
                    <Button variant="outline" className="flex flex-col h-auto py-4 gap-2 justify-center items-center">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Plus className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs">Adicionar</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Minhas Chaves Pix</CardTitle>
                  <CardDescription>Compartilhe para receber transferências</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">CPF</p>
                          <p className="text-xs text-muted-foreground">123.456.789-00</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-xs text-muted-foreground">ayron@email.com</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Gerenciar Chaves Pix
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="historico" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Histórico de Transferências</CardTitle>
                <Select defaultValue="30dias">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7dias">Últimos 7 dias</SelectItem>
                    <SelectItem value="15dias">Últimos 15 dias</SelectItem>
                    <SelectItem value="30dias">Últimos 30 dias</SelectItem>
                    <SelectItem value="90dias">Últimos 90 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Todas as suas transferências recentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Hoje</h3>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-500/10 p-2">
                          <ArrowDown className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Transferência Recebida</p>
                          <p className="text-sm text-muted-foreground">Maria Oliveira</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+ R$ 1.250,00</p>
                        <p className="text-xs text-muted-foreground">10:45</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Ontem</h3>
                  <div className="space-y-px rounded-lg border">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-red-500/10 p-2">
                          <ArrowUp className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Transferência Enviada</p>
                          <p className="text-sm text-muted-foreground">Carlos Santos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">- R$ 350,00</p>
                        <p className="text-xs text-muted-foreground">18:30</p>
                      </div>
                    </div>
                    <div className="border-t"></div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-red-500/10 p-2">
                          <ArrowUp className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Transferência Enviada</p>
                          <p className="text-sm text-muted-foreground">Ana Pereira</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">- R$ 120,00</p>
                        <p className="text-xs text-muted-foreground">14:15</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">15/03/2023</h3>
                  <div className="space-y-px rounded-lg border">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-red-500/10 p-2">
                          <ArrowUp className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Transferência Enviada</p>
                          <p className="text-sm text-muted-foreground">Carlos Santos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">- R$ 850,00</p>
                        <p className="text-xs text-muted-foreground">14:22</p>
                      </div>
                    </div>
                    <div className="border-t"></div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-500/10 p-2">
                          <ArrowDown className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Transferência Recebida</p>
                          <p className="text-sm text-muted-foreground">Pedro Almeida</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+ R$ 500,00</p>
                        <p className="text-xs text-muted-foreground">09:30</p>
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

        <TabsContent value="agendadas" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transferências Agendadas</CardTitle>
              <CardDescription>Transferências programadas para datas futuras</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Aluguel</p>
                        <p className="text-sm text-muted-foreground">Ana Pereira</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-500">- R$ 1.200,00</p>
                      <p className="text-xs text-muted-foreground">05/04/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Cancelar
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Conta de Luz</p>
                        <p className="text-sm text-muted-foreground">Companhia Elétrica</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-500">- R$ 210,45</p>
                      <p className="text-xs text-muted-foreground">10/04/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Cancelar
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Internet</p>
                        <p className="text-sm text-muted-foreground">Provedor de Internet</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-red-500">- R$ 99,90</p>
                      <p className="text-xs text-muted-foreground">15/04/2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Cancelar
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar Todas</Button>
              <Button>Agendar Nova</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

