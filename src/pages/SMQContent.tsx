import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SMQContent = () => {
  const { section, subsection } = useParams();
  const navigate = useNavigate();

  const content: Record<string, Record<string, { title: string; content: string[] }>> = {
    "politique-qualite": {
      "engagement": {
        title: "Engagement de la Direction",
        content: [
          "La direction de Sweetchocolat s'engage formellement à mettre en œuvre tous les moyens nécessaires pour garantir la qualité et la sécurité de nos produits.",
          "Nous nous engageons à fournir les ressources humaines, matérielles et financières nécessaires au bon fonctionnement du système qualité.",
          "La direction s'assure de la communication de la politique qualité à tous les niveaux de l'organisation.",
          "Des revues régulières permettent de vérifier l'efficacité de nos engagements et d'ajuster les objectifs."
        ]
      },
      "objectifs": {
        title: "Objectifs Qualité",
        content: [
          "Atteindre un taux de satisfaction client supérieur à 95% sur l'année.",
          "Réduire le taux de non-conformité produit à moins de 0.5%.",
          "Former 100% du personnel aux bonnes pratiques d'hygiène.",
          "Obtenir le renouvellement de toutes nos certifications dans les délais."
        ]
      },
      "revue-direction": {
        title: "Revue de Direction",
        content: [
          "La revue de direction se tient deux fois par an, en juin et décembre.",
          "Elle réunit l'ensemble de l'équipe de direction et les responsables qualité.",
          "L'ordre du jour couvre : résultats des audits, réclamations clients, indicateurs de performance, efficacité des actions correctives.",
          "Les décisions prises sont documentées et communiquées à l'ensemble du personnel."
        ]
      }
    },
    "procedures": {
      "production": {
        title: "Procédures de Production",
        content: [
          "Le processus de production débute par la vérification de la conformité des matières premières reçues.",
          "Chaque lot de production suit une fiche de fabrication détaillée avec points de contrôle identifiés.",
          "Les paramètres critiques (température, temps, pH) sont enregistrés en continu.",
          "Un contrôle qualité final est réalisé avant conditionnement et expédition."
        ]
      },
      "reception": {
        title: "Réception des Matières Premières",
        content: [
          "Tout lot reçu fait l'objet d'un contrôle visuel et documentaire à la réception.",
          "Des analyses physico-chimiques sont réalisées sur échantillon pour valider la conformité.",
          "Les matières premières validées sont stockées dans des zones dédiées avec traçabilité complète.",
          "Un registre de réception est tenu à jour pour garantir la traçabilité."
        ]
      },
      "expedition": {
        title: "Expédition des Produits",
        content: [
          "Avant expédition, vérification de la conformité des produits finis aux spécifications.",
          "Respect strict de la chaîne du froid pour les produits sensibles.",
          "Emballage adapté pour garantir l'intégrité du produit pendant le transport.",
          "Documents de transport incluant les certificats de conformité et traçabilité."
        ]
      },
      "maintenance": {
        title: "Maintenance des Équipements",
        content: [
          "Plan de maintenance préventive établi pour tous les équipements de production.",
          "Interventions planifiées et enregistrées dans un registre de maintenance.",
          "Formation du personnel de maintenance aux bonnes pratiques d'hygiène.",
          "Qualification des équipements après intervention majeure."
        ]
      }
    },
    "certifications": {
      "iso22000": {
        title: "Certification ISO 22000",
        content: [
          "Sweetchocolat est certifiée ISO 22000 depuis 2020.",
          "Cette norme garantit la maîtrise de la sécurité des denrées alimentaires tout au long de la chaîne.",
          "Audit de renouvellement annuel réalisé par un organisme certificateur accrédité.",
          "Périmètre : fabrication et conditionnement de produits chocolatés."
        ]
      },
      "haccp": {
        title: "Système HACCP",
        content: [
          "Analyse des dangers biologiques, chimiques et physiques réalisée sur tous nos processus.",
          "Identification de 5 points critiques de contrôle (CCP) maîtrisés en permanence.",
          "Plan de surveillance et de vérification documenté et appliqué.",
          "Formation HACCP obligatoire pour tout le personnel de production."
        ]
      },
      "rse": {
        title: "Engagement RSE",
        content: [
          "Sourcing responsable : 80% de nos matières premières certifiées équitables.",
          "Réduction de 30% de notre consommation énergétique en 3 ans.",
          "Programme de recyclage et valorisation de 95% de nos déchets.",
          "Actions sociales : formation continue et amélioration des conditions de travail."
        ]
      }
    },
    "audits": {
      "internes": {
        title: "Audits Internes",
        content: [
          "Programme d'audits internes couvrant tous les processus sur un cycle de 6 mois.",
          "Auditeurs internes formés et qualifiés selon ISO 19011.",
          "Rapports d'audit documentant les constats, observations et recommandations.",
          "Plan d'actions systématique avec suivi jusqu'à clôture des écarts."
        ]
      },
      "externes": {
        title: "Audits Externes",
        content: [
          "Audits de certification annuels par organisme accrédité COFRAC.",
          "Audits clients réalisés selon demande avec transparence totale.",
          "Préparation rigoureuse incluant revue documentaire et inspection terrain.",
          "Suivi des recommandations dans les délais impartis."
        ]
      },
      "fournisseurs": {
        title: "Audits Fournisseurs",
        content: [
          "Évaluation annuelle de nos fournisseurs critiques sur site.",
          "Grille d'audit standardisée couvrant qualité, hygiène, traçabilité.",
          "Notation des fournisseurs et plan d'amélioration si nécessaire.",
          "Réévaluation en cas de non-conformité majeure détectée."
        ]
      }
    },
    "formation": {
      "hygiene": {
        title: "Formation Hygiène",
        content: [
          "Formation obligatoire à l'embauche sur les bonnes pratiques d'hygiène.",
          "Recyclage annuel pour maintenir le niveau de compétence.",
          "Thèmes : hygiène personnelle, nettoyage, contaminations croisées.",
          "Évaluation des connaissances par QCM et mise en situation."
        ]
      },
      "securite": {
        title: "Formation Sécurité",
        content: [
          "Formation sécurité au travail intégrant les risques spécifiques au secteur alimentaire.",
          "Exercices d'évacuation incendie semestriels.",
          "Formation aux premiers secours pour les équipiers désignés.",
          "Sensibilisation continue aux risques psychosociaux."
        ]
      },
      "qualite": {
        title: "Sensibilisation Qualité",
        content: [
          "Sessions de sensibilisation trimestrielles sur les enjeux qualité.",
          "Partage des résultats qualité et des actions d'amélioration.",
          "Implication du personnel dans la démarche qualité par des groupes de travail.",
          "Reconnaissance des meilleures initiatives qualité."
        ]
      },
      "technique": {
        title: "Formations Techniques",
        content: [
          "Formation spécifique à chaque poste de travail avec accompagnement terrain.",
          "Mise à jour des compétences lors de l'introduction de nouvelles technologies.",
          "Parcours de formation évolutif selon l'ancienneté et les responsabilités.",
          "Partenariat avec des centres de formation spécialisés."
        ]
      }
    },
    "amelioration": {
      "non-conformites": {
        title: "Gestion des Non-Conformités",
        content: [
          "Système de déclaration des non-conformités accessible à tous les collaborateurs.",
          "Analyse systématique des causes racines par méthode des 5 pourquoi.",
          "Classification des NC selon leur gravité et leur fréquence.",
          "Base de données centralisée pour analyse des tendances."
        ]
      },
      "actions-correctives": {
        title: "Actions Correctives",
        content: [
          "Plan d'actions documenté pour chaque non-conformité identifiée.",
          "Responsable et délai assignés pour chaque action.",
          "Suivi mensuel de l'avancement en comité qualité.",
          "Vérification de l'efficacité des actions mises en place."
        ]
      },
      "kpi": {
        title: "Indicateurs de Performance",
        content: [
          "Tableau de bord qualité actualisé mensuellement.",
          "Indicateurs suivis : taux de NC, satisfaction client, conformité production.",
          "Objectifs et seuils d'alerte définis pour chaque indicateur.",
          "Communication des résultats à l'ensemble du personnel."
        ]
      }
    },
    "documentation": {
      "creation": {
        title: "Création de Documents",
        content: [
          "Modèles standardisés pour tous les types de documents qualité.",
          "Rédaction par les responsables de processus concernés.",
          "Respect de la structure : objet, domaine d'application, références, contenu.",
          "Versioning et historique des modifications documentés."
        ]
      },
      "validation": {
        title: "Circuit de Validation",
        content: [
          "Revue par le responsable qualité avant diffusion.",
          "Approbation par la direction pour les documents stratégiques.",
          "Circuit de validation défini selon le type et l'importance du document.",
          "Délai maximum de validation fixé à 15 jours."
        ]
      },
      "archivage": {
        title: "Archivage et Traçabilité",
        content: [
          "Système de gestion documentaire électronique garantissant la traçabilité.",
          "Documents obsolètes archivés avec mention 'périmé' pour éviter toute utilisation.",
          "Durée de conservation définie selon les exigences réglementaires.",
          "Accès contrôlé selon les niveaux d'habilitation."
        ]
      }
    }
  };

  const currentContent = section && subsection ? content[section]?.[subsection] : null;

  if (!currentContent) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Contenu non trouvé</h1>
          <Button onClick={() => navigate(`/smq/${section}`)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
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
          onClick={() => navigate(`/smq/${section}`)}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à {section}
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
              Pour plus d'informations sur ce sujet, contactez notre responsable qualité.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SMQContent;
