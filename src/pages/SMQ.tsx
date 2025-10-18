import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FileText, Award, ClipboardCheck, Users, Target, Shield } from "lucide-react";

const SMQ = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "gouvernance",
      icon: Shield,
      title: "Gouvernance et Organisation du SMQ",
      description: "Structure et organisation du système de management de la qualité",
      color: "from-accent to-accent/70"
    },
    {
      id: "contexte",
      icon: Target,
      title: "Contexte de l'organisme (Chapitre 4)",
      description: "Compréhension de l'organisation et de son contexte",
      color: "from-primary to-primary/70"
    },
    {
      id: "leadership",
      icon: Users,
      title: "Leadership (Chapitre 5)",
      description: "Engagement de la direction et politique qualité",
      color: "from-secondary to-secondary/70"
    },
    {
      id: "planification",
      icon: ClipboardCheck,
      title: "Planification (Chapitre 6)",
      description: "Actions face aux risques et opportunités",
      color: "from-accent to-accent/70"
    },
    {
      id: "support",
      icon: Award,
      title: "Support (Chapitre 7)",
      description: "Ressources, compétences et communication",
      color: "from-primary to-primary/70"
    },
    {
      id: "realisation",
      icon: FileText,
      title: "Réalisation des activités opérationnelles (Chapitre 8)",
      description: "Planification et maîtrise opérationnelles",
      color: "from-secondary to-secondary/70"
    },
    {
      id: "evaluation",
      icon: ClipboardCheck,
      title: "Évaluation de la performance (Chapitre 9)",
      description: "Surveillance, mesure, analyse et évaluation",
      color: "from-accent to-accent/70"
    },
    {
      id: "amelioration",
      icon: Target,
      title: "Amélioration (Chapitre 10)",
      description: "Non-conformités et amélioration continue",
      color: "from-primary to-primary/70"
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
