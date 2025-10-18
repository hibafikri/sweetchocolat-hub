import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SMQDetail = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  const content: Record<string, { title: string; content: string[] }> = {
    "politique-qualite": {
      title: "Politique Qualité",
      content: [
        "Notre politique qualité s'articule autour de trois piliers fondamentaux : l'excellence des produits, la satisfaction client et l'amélioration continue.",
        "Nous nous engageons à respecter toutes les normes de sécurité alimentaire et les réglementations en vigueur.",
        "Chaque membre de notre équipe est formé et responsabilisé dans la démarche qualité.",
        "Nos objectifs qualité sont mesurés et révisés annuellement pour garantir notre progression."
      ]
    },
    "procedures": {
      title: "Procédures et Processus",
      content: [
        "Nos procédures couvrent l'ensemble de la chaîne de valeur : de l'approvisionnement en matières premières à la livraison du produit fini.",
        "Chaque processus est documenté, avec des instructions de travail claires et accessibles.",
        "Les points critiques de contrôle sont identifiés et surveillés en temps réel.",
        "Des revues de processus trimestrielles permettent d'optimiser nos opérations."
      ]
    },
    "certifications": {
      title: "Certifications",
      content: [
        "Sweetchocolat est certifiée ISO 22000 pour la sécurité des denrées alimentaires.",
        "Nous maintenons également la certification HACCP pour tous nos processus de production.",
        "Notre démarche RSE est certifiée par des organismes indépendants.",
        "Audits annuels de renouvellement et de surveillance par des organismes certificateurs accrédités."
      ]
    },
    "audits": {
      title: "Audits et Contrôles",
      content: [
        "Programme d'audits internes semestriels couvrant tous les départements.",
        "Audits fournisseurs annuels pour garantir la qualité de nos approvisionnements.",
        "Contrôles qualité à chaque étape de la production avec traçabilité complète.",
        "Plans d'action systématiques suite aux constats d'audit avec suivi rigoureux."
      ]
    },
    "formation": {
      title: "Formation du Personnel",
      content: [
        "Programme d'intégration complet pour tous les nouveaux collaborateurs.",
        "Formations continues sur les bonnes pratiques d'hygiène et de fabrication.",
        "Sessions de sensibilisation à la qualité et à la sécurité alimentaire.",
        "Développement des compétences techniques par des formations spécialisées."
      ]
    },
    "amelioration": {
      title: "Amélioration Continue",
      content: [
        "Système de gestion des non-conformités avec analyse des causes racines.",
        "Actions correctives et préventives documentées et suivies jusqu'à leur clôture.",
        "Boîte à idées permettant à chaque collaborateur de contribuer à l'amélioration.",
        "Indicateurs de performance suivis mensuellement par la direction."
      ]
    }
  };

  const currentContent = section ? content[section] : null;

  if (!currentContent) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Section non trouvée</h1>
          <Button onClick={() => navigate("/smq")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au SMQ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <Button 
          variant="outline" 
          onClick={() => navigate("/smq")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au SMQ
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-in">
            {currentContent.title}
          </h1>

          <div className="bg-card rounded-2xl shadow-card-custom p-8 space-y-6 animate-fade-in">
            {currentContent.content.map((paragraph, index) => (
              <div 
                key={index}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-gold rounded-xl p-6 animate-fade-in">
            <p className="text-foreground text-center font-medium">
              Pour plus d'informations sur cette section, contactez notre responsable qualité.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SMQDetail;
