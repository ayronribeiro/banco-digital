import Link from "next/link"
import { ArrowRight, FileQuestion, Mail, MessageSquare, Phone, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AjudaPage() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Central de Ajuda</h1>
        <p className="text-muted-foreground">Encontre respostas para suas dúvidas</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input className="pl-10 py-6 text-lg" placeholder="Buscar por dúvidas frequentes..." />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Chat Online
            </CardTitle>
            <CardDescription>Converse com um atendente em tempo real</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Disponível de segunda a sexta, das 8h às 20h, e aos sábados, das 9h às 15h.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Iniciar Chat</Button>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Atendimento Telefônico
            </CardTitle>
            <CardDescription>Fale com nossa central de atendimento</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ligue para 0800 123 4567, disponível 24 horas por dia, 7 dias por semana.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Ligar Agora</Button>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email
            </CardTitle>
            <CardDescription>Envie sua dúvida por email</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Responderemos em até 24 horas úteis após o recebimento.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Enviar Email</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Perguntas Frequentes</CardTitle>
          <CardDescription>Respostas para as dúvidas mais comuns</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como faço para alterar minha senha?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Para alterar sua senha, acesse a seção "Configurações" no menu principal, depois clique em "Segurança"
                  e selecione "Alterar Senha". Você precisará informar sua senha atual e a nova senha desejada.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como faço uma transferência via Pix?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Para fazer uma transferência via Pix, acesse a seção "Transferências" no menu principal, selecione
                  "Nova Transferência", escolha a opção "Pix" como tipo de transferência, informe a chave Pix do
                  destinatário (CPF, email, telefone ou chave aleatória), o valor desejado e confirme a operação.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como solicitar um aumento de limite do cartão de crédito?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Para solicitar um aumento de limite, acesse a seção "Cartões" no menu principal, selecione o cartão
                  desejado e clique em "Ajustar Limite". Preencha o formulário com o valor desejado e o motivo da
                  solicitação. A análise será feita em até 2 dias úteis.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Como bloquear meu cartão em caso de perda ou roubo?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Em caso de perda ou roubo, acesse imediatamente a seção "Cartões" no menu principal, selecione o
                  cartão e clique em "Bloquear Cartão". Você também pode ligar para nossa central de atendimento 24h no
                  número 0800 123 4567.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Como investir pelo aplicativo?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Para investir, acesse a seção "Investimentos" no menu principal, clique em "Ver Oportunidades" e
                  escolha a opção que melhor se adequa ao seu perfil. Informe o valor que deseja investir e confirme a
                  operação. Você pode acompanhar seus investimentos na aba "Minha Carteira".
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Como ativar notificações de transações?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Para ativar as notificações, acesse a seção "Configurações" no menu principal, depois clique em
                  "Notificações" e ative as opções desejadas em "Transações". Você pode escolher receber notificações
                  por app, email, SMS ou push.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <Link href="#" className="w-full">
            <Button variant="outline" className="w-full">
              Ver Todas as Perguntas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tutoriais e Guias</CardTitle>
          <CardDescription>Aprenda a usar todos os recursos do BancoDigital</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="#" className="group block">
              <div className="rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileQuestion className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium group-hover:text-primary">Primeiros Passos</h3>
                <p className="text-sm text-muted-foreground">Guia completo para novos usuários do BancoDigital</p>
              </div>
            </Link>
            <Link href="#" className="group block">
              <div className="rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium group-hover:text-primary">Cartões</h3>
                <p className="text-sm text-muted-foreground">Como gerenciar seus cartões de crédito e débito</p>
              </div>
            </Link>
            <Link href="#" className="group block">
              <div className="rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium group-hover:text-primary">Transferências</h3>
                <p className="text-sm text-muted-foreground">Como enviar e receber dinheiro de forma rápida e segura</p>
              </div>
            </Link>
            <Link href="#" className="group block">
              <div className="rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <PieChart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium group-hover:text-primary">Investimentos</h3>
                <p className="text-sm text-muted-foreground">Como começar a investir e diversificar sua carteira</p>
              </div>
            </Link>
            <Link href="#" className="group block">
              <div className="rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium group-hover:text-primary">Segurança</h3>
                <p className="text-sm text-muted-foreground">Dicas e práticas para manter sua conta segura</p>
              </div>
            </Link>
            <Link href="#" className="group block">
              <div className="rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-medium group-hover:text-primary">Configurações</h3>
                <p className="text-sm text-muted-foreground">
                  Como personalizar o aplicativo conforme suas preferências
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

