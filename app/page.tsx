import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Code, Smartphone, Database, Palette, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const teamMembers = [
    {
      name: "Marcos Vieira",
      role: "Team Lead & Developer",
      description:
        "Especialista em React, Node.js e arquitetura de sistemas. 8 anos de experiência liderando equipes de desenvolvimento.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "GCP", "Salesforce"],
      image: "/placeholder.svg?height=300&width=300",
      github: "#",
      linkedin: "#",
      email: "marcos.vieira@rdstation.com",
    },
    {
      name: "Lucas Tavares",
      role: "Tech Lead & Developer",
      description:
        "Apaixonado por criar interfaces incríveis e experiências de usuário memoráveis. Expert em React e design systems.",
      skills: ["React", "Next.js", "Tailwind", "Figma"],
      image: "/placeholder.svg?height=300&width=300",
      github: "#",
      linkedin: "#",
      email: "lucas.tavares@rdstation.com",
    },
    {
      name: "Daniel Matuoka",
      role: "Software Developer & Salesforce specialist",
      description:
        "Desenvolvedora mobile com foco em React Native e Flutter. Criando apps que conectam pessoas e negócios.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      image: "/placeholder.svg?height=300&width=300",
      github: "#",
      linkedin: "#",
      email: "daniel.matuoka@rdstation.com",
    },
    {
      name: "Gustavo Eyros",
      role: "Software Developer",
      description:
        "Especialista em APIs robustas e escaláveis. Domina tecnologias como Python, PostgreSQL e arquitetura de microsserviços.",
      skills: ["Python", "PostgreSQL", "Docker", "Kubernetes", "Typescript"],
      image: "/placeholder.svg?height=300&width=300",
      github: "#",
      linkedin: "#",
      email: "gustavo.eyros@rdstation.com",
    },
    {
      name: "Vyctoria Karina",
      role: "Software Developer",
      description:
        "Designer e desenvolvedora que une criatividade e código. Especialista em criar produtos digitais que encantam usuários.",
      skills: ["Figma", "React", "CSS", "Design Systems"],
      image: "/placeholder.svg?height=300&width=300",
      github: "#",
      linkedin: "#",
      email: "vyctoria.karina@rdstation.com",
    },
  ]

  const skillIcons = {
    React: <Code className="w-4 h-4" />,
    "React Native": <Smartphone className="w-4 h-4" />,
    "Node.js": <Database className="w-4 h-4" />,
    Python: <Database className="w-4 h-4" />,
    PostgreSQL: <Database className="w-4 h-4" />,
    Figma: <Palette className="w-4 h-4" />,
    AWS: <Shield className="w-4 h-4" />,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">DevTeam</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#team" className="text-slate-600 hover:text-blue-600 transition-colors">
                Equipe
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contato
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Fale Conosco
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">✨ Conheça nossa equipe</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Desenvolvedores
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Apaixonados
              </span>
              <br />
              por Tecnologia
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Somos um time de 5 desenvolvedores experientes, unidos pela paixão em criar soluções digitais inovadoras
              que transformam ideias em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Conheça a Equipe
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nossa Equipe</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cada membro da nossa equipe traz expertise única e paixão pelo desenvolvimento. Juntos, criamos soluções
              que fazem a diferença.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                        >
                          {skillIcons[skill as keyof typeof skillIcons] && (
                            <span className="mr-1">{skillIcons[skill as keyof typeof skillIcons]}</span>
                          )}
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Link
                      href={member.github}
                      className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="p-2 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Por que escolher nossa equipe?</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Combinamos experiência técnica sólida com criatividade e paixão pelo que fazemos. Nosso objetivo é
              transformar suas ideias em soluções digitais excepcionais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expertise Técnica</h3>
                <p className="opacity-90">Domínio das tecnologias mais modernas do mercado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Soluções Completas</h3>
                <p className="opacity-90">Do design à implementação, cuidamos de tudo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
                <p className="opacity-90">Código limpo, testado e documentado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Pronto para começar seu projeto?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Entre em contato conosco e vamos transformar sua ideia em realidade. Estamos ansiosos para conhecer seu
              projeto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevTeam</span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>&copy; 2024 DevTeam. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">Desenvolvido com ❤️ pela nossa equipe</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
