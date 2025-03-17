"use client"

import { useState } from "react"
import { Mail, Moon, Shield, Smartphone, Sun, Laptop, Tablet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ConfiguracoesPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Aqui você adicionaria a lógica para alternar o tema
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e configurações de conta</p>
      </div>

      <Tabs defaultValue="perfil" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-[600px]">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="aparencia">Aparência</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Atualize suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Ayron Rivero" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Foto de Perfil</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Alterar Foto
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500">
                      Remover
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" defaultValue="Ayron Rivero" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" defaultValue="123.456.789-00" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="ayron@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 98765-4321" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nascimento">Data de Nascimento</Label>
                  <Input id="nascimento" type="date" defaultValue="06-04-1995" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profissao">Profissão</Label>
                  <Input id="profissao" defaultValue="Engenheiro de Software" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
              <CardDescription>Atualize seu endereço de correspondência</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" defaultValue="01234-567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rua">Rua</Label>
                  <Input id="rua" defaultValue="Av. Paulista" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numero">Número</Label>
                  <Input id="numero" defaultValue="1000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input id="complemento" defaultValue="Apto 123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input id="bairro" defaultValue="Bela Vista" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" defaultValue="São Paulo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Input id="estado" defaultValue="SP" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alterar Senha</CardTitle>
              <CardDescription>Atualize sua senha de acesso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha Atual</Label>
                <Input id="senha-atual" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova Senha</Label>
                <Input id="nova-senha" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                <Input id="confirmar-senha" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Alterar Senha</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Autenticação de Dois Fatores</CardTitle>
              <CardDescription>Adicione uma camada extra de segurança à sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Autenticação por SMS</p>
                    <p className="text-sm text-muted-foreground">Receba um código por SMS para confirmar seu login</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Autenticação por Email</p>
                    <p className="text-sm text-muted-foreground">Receba um código por email para confirmar seu login</p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Aplicativo Autenticador</p>
                    <p className="text-sm text-muted-foreground">Use um aplicativo autenticador para gerar códigos</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Configurar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispositivos Conectados</CardTitle>
              <CardDescription>Gerencie os dispositivos que têm acesso à sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">iPhone 13 Pro</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brasil • Ativo agora</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Este Dispositivo
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Laptop className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">MacBook Pro</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brasil • Último acesso: Hoje, 10:30</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-red-500">
                  Desconectar
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Tablet className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">iPad Air</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brasil • Último acesso: 15/03/2023</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-red-500">
                  Desconectar
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-red-500">
                Desconectar Todos os Dispositivos
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>Escolha como deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Transações</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="transacoes-app" className="flex flex-col space-y-1">
                      <span>Notificações no App</span>
                      <span className="text-xs text-muted-foreground">Receba alertas no aplicativo</span>
                    </Label>
                    <Switch id="transacoes-app" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="transacoes-email" className="flex flex-col space-y-1">
                      <span>Email</span>
                      <span className="text-xs text-muted-foreground">Receba alertas por email</span>
                    </Label>
                    <Switch id="transacoes-email" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="transacoes-sms" className="flex flex-col space-y-1">
                      <span>SMS</span>
                      <span className="text-xs text-muted-foreground">Receba alertas por SMS</span>
                    </Label>
                    <Switch id="transacoes-sms" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="transacoes-push" className="flex flex-col space-y-1">
                      <span>Push</span>
                      <span className="text-xs text-muted-foreground">Receba notificações push</span>
                    </Label>
                    <Switch id="transacoes-push" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Segurança</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="seguranca-app" className="flex flex-col space-y-1">
                      <span>Notificações no App</span>
                      <span className="text-xs text-muted-foreground">Alertas de segurança no app</span>
                    </Label>
                    <Switch id="seguranca-app" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="seguranca-email" className="flex flex-col space-y-1">
                      <span>Email</span>
                      <span className="text-xs text-muted-foreground">Alertas de segurança por email</span>
                    </Label>
                    <Switch id="seguranca-email" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="seguranca-sms" className="flex flex-col space-y-1">
                      <span>SMS</span>
                      <span className="text-xs text-muted-foreground">Alertas de segurança por SMS</span>
                    </Label>
                    <Switch id="seguranca-sms" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Marketing</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="marketing-app" className="flex flex-col space-y-1">
                      <span>Notificações no App</span>
                      <span className="text-xs text-muted-foreground">Receba ofertas e novidades no app</span>
                    </Label>
                    <Switch id="marketing-app" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="marketing-email" className="flex flex-col space-y-1">
                      <span>Email</span>
                      <span className="text-xs text-muted-foreground">Receba ofertas e novidades por email</span>
                    </Label>
                    <Switch id="marketing-email" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="marketing-sms" className="flex flex-col space-y-1">
                      <span>SMS</span>
                      <span className="text-xs text-muted-foreground">Receba ofertas e novidades por SMS</span>
                    </Label>
                    <Switch id="marketing-sms" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Restaurar Padrões</Button>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tema</CardTitle>
              <CardDescription>Personalize a aparência do aplicativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    {isDarkMode ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <p className="font-medium">{isDarkMode ? "Modo Escuro" : "Modo Claro"}</p>
                    <p className="text-sm text-muted-foreground">
                      {isDarkMode ? "Tema escuro para ambientes com pouca luz" : "Tema claro para uso diurno"}
                    </p>
                  </div>
                </div>
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Idioma</CardTitle>
              <CardDescription>Escolha o idioma do aplicativo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="pt-br" name="idioma" className="h-4 w-4" defaultChecked />
                  <Label htmlFor="pt-br">Português (Brasil)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="en-us" name="idioma" className="h-4 w-4" />
                  <Label htmlFor="en-us">English (US)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="es" name="idioma" className="h-4 w-4" />
                  <Label htmlFor="es">Español</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="fr" name="idioma" className="h-4 w-4" />
                  <Label htmlFor="fr">Français</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Aplicar Idioma</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
              <CardDescription>Configurações de acessibilidade</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="fonte-grande" className="flex flex-col space-y-1">
                  <span>Fonte Grande</span>
                  <span className="text-xs text-muted-foreground">Aumenta o tamanho do texto</span>
                </Label>
                <Switch id="fonte-grande" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="contraste-alto" className="flex flex-col space-y-1">
                  <span>Alto Contraste</span>
                  <span className="text-xs text-muted-foreground">Melhora a visibilidade dos elementos</span>
                </Label>
                <Switch id="contraste-alto" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="animacoes-reduzidas" className="flex flex-col space-y-1">
                  <span>Reduzir Animações</span>
                  <span className="text-xs text-muted-foreground">Diminui ou remove animações</span>
                </Label>
                <Switch id="animacoes-reduzidas" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

