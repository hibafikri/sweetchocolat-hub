import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FileText, Award, ClipboardCheck, Users, Target, Shield } from "lucide-react";

const SMQ = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "politique-qualite",
      icon: Target,
      title: "Politique Qualité",
      description: "Notre engagement envers l'excellence et la satisfaction client",
      color: "from-accent to-accent/70"
    },
    {
      id: "procedures",
      icon: FileText,
      title: "Procédures et Processus",
      description: "Documentation complète de nos processus qualité",
      color: "from-primary to-primary/70"
    },
    {
      id: "certifications",
      icon: Award,
      title: "Certifications",
      description: "Nos certifications et conformités réglementaires",
      color: "from-secondary to-secondary/70"
    },
    {
      id: "audits",
      icon: ClipboardCheck,
      title: "Audits et Contrôles",
      description: "Programme d'audits internes et externes",
      color: "from-accent to-accent/70"
    },
    {
      id: "formation",
      icon: Users,
      title: "Formation du Personnel",
      description: "Plans de formation et développement des compétences",
      color: "from-primary to-primary/70"
    },
    {
      id: "amelioration",
      icon: Shield,
      title: "Amélioration Continue",
      description: "Actions correctives et préventives",
      color: "from-secondary to-secondary/70"
    },
    {
      id: "documentation",
      icon: FileText,
      title: "Gestion Documentaire",
      description: "Organisation et archivage de la documentation qualité",
      color: "from-accent to-accent/70"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Système de Management de la Qualité
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre approche structurée pour garantir l'excellence de nos produits 
            et services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className="cursor-pointer transition-all hover:shadow-elegant hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/smq/${section.id}`)}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4`}>
                  <section.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-accent font-medium flex items-center gap-2">
                  En savoir plus
                  <span>→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-cream rounded-2xl p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Notre Engagement Qualité
          </h2>
          <p className="text-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Chez Sweetchocolat, la qualité n'est pas un objectif, c'est une culture. 
            Notre système de management de la qualité conforme aux normes internationales 
            nous permet d'assurer la cohérence et l'excellence de nos produits à chaque étape 
            de la production.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SMQ;
