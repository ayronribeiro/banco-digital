"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Lock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando um tempo de carregamento
    setTimeout(() => {
      setIsLoading(false)
      // Redireciona para o dashboard após o login
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <CreditCard className="h-6 w-6" />
            <span>BancoDigital</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted">
        <div className="w-full max-w-md">
          <Card className="border-primary/10 shadow-lg transition-all duration-300 hover:shadow-xl">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">Acesso à Conta</CardTitle>
              <CardDescription className="text-center">
                Entre com suas credenciais para acessar sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link href="#" className="text-xs text-primary hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group relative overflow-hidden rounded-lg transition-all duration-300"
                  disabled={isLoading}
                >
                  <span className="relative z-10">{isLoading ? "Entrando..." : "Entrar"}</span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative flex items-center">
                <span className="h-px flex-1 bg-muted"></span>
                <span className="mx-2 text-xs text-muted-foreground">OU</span>
                <span className="h-px flex-1 bg-muted"></span>
              </div>
              <Button variant="outline" className="w-full">
                Entrar com Google
              </Button>
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <Link href="#" className="text-primary hover:underline">
                  Abra agora
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

