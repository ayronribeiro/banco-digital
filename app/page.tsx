import Link from "next/link"
import { ArrowRight, BarChart3, CreditCard, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <CreditCard className="h-6 w-6" />
            <span>BancoDigital</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="hidden md:flex">
                Entrar
              </Button>
            </Link>
            <Link href="/login">
              <Button className="hidden md:flex">Abrir Conta</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <CreditCard className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Seu dinheiro, seu controle
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Gerencie suas finanças com facilidade e segurança. Abra sua conta digital hoje mesmo e descubra um
                    novo jeito de cuidar do seu dinheiro.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button className="group relative overflow-hidden rounded-lg bg-primary text-primary-foreground shadow-md transition-all duration-300 hover:shadow-xl">
                      <span className="relative z-10">Começar Agora</span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </Link>
                  <Link href="#saiba-mais">
                    <Button
                      variant="outline"
                      className="group relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <span className="relative z-10 flex items-center">
                        Saiba Mais
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-b from-primary/20 to-primary/5 p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[250px] w-[250px] rounded-full bg-background p-4 shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-foreground/30">
                        <CreditCard className="h-24 w-24 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="saiba-mais">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Soluções financeiras completas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra como podemos ajudar você a alcançar seus objetivos financeiros com nossas soluções
                  personalizadas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-primary opacity-10"></div>
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <CreditCard className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Conta Digital</h3>
                </div>
                <p className="text-muted-foreground">
                  Abra sua conta 100% digital, sem taxas de manutenção e com rendimento superior à poupança.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-primary opacity-10"></div>
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <BarChart3 className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Investimentos</h3>
                </div>
                <p className="text-muted-foreground">
                  Invista seu dinheiro com segurança e rentabilidade. Opções para todos os perfis de investidor.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-primary opacity-10"></div>
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <Shield className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Segurança</h3>
                </div>
                <p className="text-muted-foreground">
                  Proteção total para suas transações com as mais avançadas tecnologias de segurança digital.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <CreditCard className="h-6 w-6" />
            <span>BancoDigital</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BancoDigital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Termos
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

