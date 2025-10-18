import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const SMQSubsections = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  const subsections: Record<string, { title: string; items: { id: string; title: string; description: string }[] }> = {
    "politique-qualite": {
      title: "Politique Qualité",
      items: [
        { id: "engagement", title: "Engagement Direction", description: "L'engagement de la direction générale" },
        { id: "objectifs", title: "Objectifs Qualité", description: "Nos objectifs annuels et stratégiques" },
        { id: "revue-direction", title: "Revue de Direction", description: "Processus de revue et amélioration" }
      ]
    },
    "procedures": {
      title: "Procédures et Processus",
      items: [
        { id: "production", title: "Procédures Production", description: "Processus de fabrication du chocolat" },
        { id: "reception", title: "Réception Matières", description: "Contrôle et stockage des matières premières" },
        { id: "expedition", title: "Expédition", description: "Préparation et livraison des commandes" },
        { id: "maintenance", title: "Maintenance", description: "Entretien préventif et curatif des équipements" }
      ]
    },
    "certifications": {
      title: "Certifications",
      items: [
        { id: "iso22000", title: "ISO 22000", description: "Sécurité des denrées alimentaires" },
        { id: "haccp", title: "HACCP", description: "Analyse des dangers et points critiques" },
        { id: "rse", title: "RSE", description: "Responsabilité sociale et environnementale" }
      ]
    },
    "audits": {
      title: "Audits et Contrôles",
      items: [
        { id: "internes", title: "Audits Internes", description: "Programme d'audits semestriels" },
        { id: "externes", title: "Audits Externes", description: "Audits de certification" },
        { id: "fournisseurs", title: "Audits Fournisseurs", description: "Évaluation de nos partenaires" }
      ]
    },
    "formation": {
      title: "Formation du Personnel",
      items: [
        { id: "hygiene", title: "Hygiène", description: "Bonnes pratiques d'hygiène" },
        { id: "securite", title: "Sécurité", description: "Sécurité au travail et prévention" },
        { id: "qualite", title: "Qualité", description: "Sensibilisation qualité" },
        { id: "technique", title: "Formations Techniques", description: "Compétences métiers spécifiques" }
      ]
    },
    "amelioration": {
      title: "Amélioration Continue",
      items: [
        { id: "non-conformites", title: "Non-Conformités", description: "Gestion et traitement des NC" },
        { id: "actions-correctives", title: "Actions Correctives", description: "Plan d'actions correctives" },
        { id: "kpi", title: "Indicateurs", description: "Suivi des indicateurs de performance" }
      ]
    },
    "documentation": {
      title: "Gestion Documentaire",
      items: [
        { id: "creation", title: "Création Documents", description: "Processus de création documentaire" },
        { id: "validation", title: "Validation", description: "Circuit de validation et approbation" },
        { id: "archivage", title: "Archivage", description: "Système d'archivage et traçabilité" }
      ]
    }
  };

  const currentSection = section ? subsections[section] : null;

  if (!currentSection) {
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

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {currentSection.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            Sélectionnez une sous-section pour voir les détails
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSection.items.map((item, index) => (
            <Card
              key={item.id}
              className="cursor-pointer transition-all hover:shadow-elegant hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/smq/${section}/${item.id}`)}
            >
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-accent font-medium flex items-center gap-2">
                  Voir les détails
                  <span>→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SMQSubsections;
