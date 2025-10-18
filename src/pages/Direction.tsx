import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
import { toast } from "sonner";

const Direction = () => {
  const handleFileUpload = (memberName: string) => {
    // Placeholder - will need Lovable Cloud for actual file upload
    toast.info(`Fonctionnalité d'upload de fichiers pour ${memberName} à venir`);
  };

  const orgChart = {
    direction: {
      title: "Direction Générale",
      members: [
        { name: "Ahmed Bennani", role: "Directeur Général" }
      ]
    },
    departments: [
      {
        title: "Direction Production",
        members: [
          { name: "Fatima Zahra El Amrani", role: "Directrice Production" },
          { name: "Omar Rachidi", role: "Chef d'Équipe Production" }
        ]
      },
      {
        title: "Direction Qualité",
        members: [
          { name: "Karim Alaoui", role: "Responsable Qualité" },
          { name: "Salma Tazi", role: "Contrôleur Qualité" }
        ]
      },
      {
        title: "Direction Commerciale",
        members: [
          { name: "Mehdi Chraibi", role: "Directeur Commercial" },
          { name: "Nadia Bennani", role: "Responsable Ventes" }
        ]
      },
      {
        title: "Direction RH",
        members: [
          { name: "Laila Idrissi", role: "Responsable RH" },
          { name: "Youssef Mansouri", role: "Assistant RH" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Organigramme de Direction
          </h1>
          <p className="text-lg text-muted-foreground">
            L'équipe de direction de Sweetchocolat
          </p>
        </div>

        {/* Direction Générale */}
        <div className="max-w-md mx-auto mb-12 animate-fade-in">
          <Card className="bg-gradient-to-br from-accent to-accent/70 border-none shadow-elegant">
            <CardHeader>
              <CardTitle className="text-center text-primary-foreground text-xl">
                {orgChart.direction.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orgChart.direction.members.map((member) => (
                <div key={member.name} className="bg-primary-foreground rounded-lg p-4">
                  <h3 className="font-bold text-primary text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                  <Button 
                    onClick={() => handleFileUpload(member.name)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Joindre un fichier
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {orgChart.departments.map((dept, index) => (
            <Card 
              key={dept.title}
              className="shadow-card-custom animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="bg-gradient-cream">
                <CardTitle className="text-primary text-lg">
                  {dept.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {dept.members.map((member) => (
                  <div key={member.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleFileUpload(member.name)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Fichiers (0)
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-chocolate text-primary-foreground rounded-2xl p-8 animate-fade-in">
          <p className="text-lg">
            <strong>Note :</strong> La gestion complète des fichiers nécessite l'activation de Lovable Cloud. 
            Chaque membre pourra alors télécharger et gérer ses documents de manière sécurisée.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Direction;
