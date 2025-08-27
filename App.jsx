import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { CheckCircle, Download, Shield, Users, Brain, FileText, Phone, Mail, MapPin } from 'lucide-react';
import heroImage from './assets/hero-image.jpg';
import nr01Image from './assets/nr01-image.jpg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    telefone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert('Obrigado! Seu e-book será enviado para o email informado.');
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">
              Black Belt Consultoria
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> (61) 98178-9911</span>
              <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> blackbeltconsultoria01@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  🚨 Nova Legislação em Vigor - 2025
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  E-BOOK Gratuito:<br />
                  <span className="text-blue-600">NR-01 e Saúde Mental</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Guia Prático para a Gestão de Riscos Psicossociais e a Conformidade Empresarial
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Implementação prática da NR-01 atualizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Estratégias de gestão de riscos psicossociais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Conformidade legal e redução de passivos</span>
                </div>
              </div>

              {/* Formulário Mobile */}
              <div className="lg:hidden">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center text-green-700">
                      <Download className="w-6 h-6 mx-auto mb-2" />
                      Baixe Gratuitamente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="text"
                        name="nome"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu melhor e-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        type="text"
                        name="empresa"
                        placeholder="Nome da empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        type="text"
                        name="cargo"
                        placeholder="Seu cargo"
                        value={formData.cargo}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone (opcional)"
                        value={formData.telefone}
                        onChange={handleInputChange}
                      />
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3">
                        BAIXAR E-BOOK GRATUITO
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Bem-estar no trabalho" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">+500</div>
                <div className="text-sm text-gray-600">Empresas atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Desktop */}
      <section className="hidden lg:block py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-green-700 flex items-center justify-center">
                  <Download className="w-8 h-8 mr-3" />
                  Baixe Seu E-book Gratuito Agora
                </CardTitle>
                <CardDescription className="text-lg">
                  Preencha os dados abaixo e receba imediatamente em seu e-mail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                  <Input
                    type="text"
                    name="empresa"
                    placeholder="Nome da empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                  <Input
                    type="text"
                    name="cargo"
                    placeholder="Seu cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                  <Input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone (opcional)"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="h-12 md:col-span-2"
                  />
                  <Button type="submit" className="md:col-span-2 bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg">
                    BAIXAR E-BOOK GRATUITO AGORA
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Valor */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que este E-book é Essencial para sua Empresa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A nova NR-01 torna obrigatória a gestão de riscos psicossociais. Prepare sua empresa agora.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conformidade Legal</h3>
                <p className="text-gray-600">
                  Evite multas e processos trabalhistas com a implementação correta da NR-01
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Brain className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Saúde Mental</h3>
                <p className="text-gray-600">
                  Reduza absenteísmo e turnover com estratégias eficazes de bem-estar
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Produtividade</h3>
                <p className="text-gray-600">
                  Aumente o engajamento e performance das equipes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre a Black Belt */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={nr01Image} 
                alt="NR-01 e Saúde Mental Corporativa" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Sobre a Black Belt Consultoria
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundada por <strong>Carlos Honorato</strong> e <strong>Thyberê Mendes</strong>, 
                a Black Belt Consultoria é especializada em saúde mental corporativa e gestão de riscos psicossociais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong>Carlos Honorato:</strong> Ex-PRF e Exército, Psicanalista com mais de 7.000 atendimentos, 
                    Faixa Preta 4º grau em Jiu-Jitsu
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong>Thyberê Mendes:</strong> Especialista em gestão de projetos e desenvolvimento humano, 
                    experiência em ambientes de alta performance. Faixa Preta de Jiu-jitsu e Luta Livre
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800 font-medium">
                  "Nossa metodologia combina disciplina militar, expertise psicanalítica e gestão ágil 
                  para transformar a cultura organizacional e promover o bem-estar no trabalho."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do E-book */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo prático e aplicável desenvolvido por especialistas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Entendendo a NR-01 atualizada",
              "Identificação de riscos psicossociais",
              "Implementação do GRO",
              "Estratégias de prevenção",
              "Monitoramento e avaliação",
              "Cases de sucesso"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Não deixe sua empresa desprotegida
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A NR-01 já está em vigor. Baixe agora o e-book e prepare sua empresa 
            para a nova realidade da saúde mental no trabalho.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
            onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
          >
            BAIXAR E-BOOK GRATUITO
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Black Belt Consultoria</h3>
              <p className="text-gray-400">
                Especialistas em saúde mental corporativa e gestão de riscos psicossociais.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (61) 98178-9911
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  blackbeltconsultoria01@gmail.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Brasília, DF
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Consultoria em NR-01</li>
                <li>Gestão de Riscos Psicossociais</li>
                <li>Treinamentos Corporativos</li>
                <li>Mentoria Executiva</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Black Belt Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
