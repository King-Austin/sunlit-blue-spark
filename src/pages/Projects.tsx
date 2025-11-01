import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import residentialSolar from '@/assets/residential-solar.jpg';
import commercialSolar from '@/assets/commercial-solar.jpg';
import solarFarm from '@/assets/solar-farm.jpg';
import heroSolar from '@/assets/hero-solar.jpg';
import batteryStorage from '@/assets/battery-storage.jpg';
import installationTeam from '@/assets/installation-team.jpg';
import { MapPin, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: residentialSolar,
      title: 'Modern Residential Installation',
      location: 'Lekki, Lagos',
      description: 'Installed a 12kW solar system powering a beautiful family home, reducing electricity costs by 65%.',
      capacity: '12kW',
    },
    {
      id: 2,
      image: commercialSolar,
      title: 'Corporate Office Complex',
      location: 'Victoria Island, Lagos',
      description: 'Large-scale 200kW installation providing clean energy for a modern office building with backup power.',
      capacity: '200kW',
    },
    {
      id: 3,
      image: solarFarm,
      title: 'Community Solar Installation',
      location: 'Ikoyi, Lagos',
      description: 'Large-scale solar installation providing clean energy to residential estates in the community.',
      capacity: '5MW',
    },
    {
      id: 4,
      image: heroSolar,
      title: 'Luxury Home Retrofit',
      location: 'Banana Island, Lagos',
      description: '15kW rooftop system with battery storage for complete energy independence and backup power.',
      capacity: '15kW + Storage',
    },
    {
      id: 5,
      image: batteryStorage,
      title: 'Commercial Battery Solution',
      location: 'Ikeja, Lagos',
      description: 'Advanced battery storage system for a retail center, ensuring uninterrupted power during outages.',
      capacity: '500kWh Storage',
    },
    {
      id: 6,
      image: installationTeam,
      title: 'Multi-Family Complex',
      location: 'Ajah, Lagos',
      description: '75kW installation across apartment buildings, providing sustainable energy for 50+ families.',
      capacity: '75kW',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Featured Projects
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful solar installations across residential, commercial, and community projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Zap size={14} />
                    <span>{project.capacity}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Real results from real projects making a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg text-primary-foreground/90">Projects Completed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50MW</div>
              <div className="text-lg text-primary-foreground/90">Total Capacity Installed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">₦15M</div>
              <div className="text-lg text-primary-foreground/90">Customer Savings</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg text-primary-foreground/90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of satisfied customers who have made the switch to clean, affordable solar energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2349017813274" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-accent shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all font-semibold h-12 rounded-md px-10 text-base">
                  Get Your Free Quote
                </button>
              </a>
              <a href="/services">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all h-12 rounded-md px-10 text-base">
                  View Our Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
