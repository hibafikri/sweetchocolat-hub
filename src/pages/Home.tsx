import Navigation from "@/components/Navigation";
import { Building2, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Employés", value: "40" },
    { icon: MapPin, label: "Localisation", value: "Casablanca" },
    { icon: Building2, label: "Secteur", value: "Chocolaterie" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Sweetchocolat Factory" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground animate-fade-in">
              <h1 className="text-5xl font-bold mb-4">
                Bienvenue chez Sweetchocolat
              </h1>
              <p className="text-xl mb-6 opacity-95">
                L'Excellence du Chocolat - Tradition et Innovation depuis Casablanca
              </p>
              <p className="text-lg opacity-90">
                Découvrez notre engagement envers la qualité et notre système de management reconnu.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-8 shadow-card-custom text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  Sweetchocolat est une entreprise marocaine spécialisée dans la production 
                  de chocolat de haute qualité. Implantée à Casablanca, notre équipe de 40 
                  professionnels passionnés s'engage chaque jour à créer des produits d'exception.
                </p>
                <p>
                  Notre système de management de la qualité (SMQ) certifié garantit l'excellence 
                  de nos processus et la satisfaction de nos clients. Nous combinons savoir-faire 
                  traditionnel et technologies modernes pour offrir des chocolats qui ravissent 
                  les papilles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-chocolate text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Qualité",
                  description: "Engagement absolu envers l'excellence de nos produits"
                },
                {
                  title: "Innovation",
                  description: "Recherche constante de nouvelles saveurs et techniques"
                },
                {
                  title: "Durabilité",
                  description: "Respect de l'environnement et sourcing responsable"
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center animate-slide-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="opacity-90">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2025 Sweetchocolat - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
