import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building2, Battery, Settings, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import residentialSolar from '@/assets/residential-solar.jpg';
import commercialSolar from '@/assets/commercial-solar.jpg';
import batteryStorage from '@/assets/battery-storage.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Solar Solutions
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Comprehensive solar energy services tailored to your needs, from residential installations to large-scale commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Residential Solar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={residentialSolar}
                  alt="Modern home with solar panels"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Home className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Residential Solar Installation
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Custom solar systems designed specifically for your home to maximize energy production and minimize electricity costs. Our residential solutions include:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Free home energy assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Premium quality solar panels with 25-year warranty</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Professional installation by certified technicians</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Ongoing monitoring and support</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Commercial Solar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Commercial Solar Solutions
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Power your business with scalable solar energy systems that reduce operational costs and demonstrate your commitment to sustainability.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Custom commercial energy solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Scalable systems for businesses of all sizes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Tax incentives and rebate assistance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Minimal disruption to operations</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Request Consultation
                  </Button>
                </Link>
              </div>
              <div>
                <img
                  src={commercialSolar}
                  alt="Commercial building with solar installation"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Battery Storage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={batteryStorage}
                  alt="Solar battery storage system"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Battery className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Battery Storage Systems
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Store excess solar power for nighttime use and emergencies. Never worry about power outages again with our advanced battery storage solutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Store energy for use anytime, day or night</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Backup power during outages</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Maximize your energy independence</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronDown className="text-primary mr-2 flex-shrink-0 mt-1 rotate-[-90deg]" size={20} />
                    <span className="text-muted-foreground">Smart energy management technology</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Maintenance and Monitoring */}
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Maintenance and Monitoring
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  24/7 real-time monitoring and comprehensive maintenance services ensure your solar system operates at peak efficiency for years to come.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Real-time Monitoring</h3>
                    <p className="text-muted-foreground">Track your energy production and consumption through our mobile app</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Preventive Maintenance</h3>
                    <p className="text-muted-foreground">Regular inspections and cleaning to maximize performance</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fast Repairs</h3>
                    <p className="text-muted-foreground">Quick response times for any issues or concerns</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Performance Guarantee</h3>
                    <p className="text-muted-foreground">We ensure your system meets expected energy production</p>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Schedule Service
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about solar energy
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border-2">
                <AccordionTrigger className="text-left font-semibold">
                  How much can I save with solar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most homeowners save between 40-60% on their electricity bills. The exact savings depend on your current energy usage, system size, and local electricity rates. Our team provides a detailed cost-benefit analysis during your free consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border-2">
                <AccordionTrigger className="text-left font-semibold">
                  How long does installation take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Residential installations typically take 1-3 days, while commercial projects may take 1-2 weeks depending on size and complexity. The entire process from consultation to activation usually takes 4-8 weeks, including permits and inspections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border-2">
                <AccordionTrigger className="text-left font-semibold">
                  Do you offer warranties?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer a comprehensive 25-year warranty on solar panels, 10-year warranty on inverters, and 10-year workmanship guarantee on all installations. Battery storage systems come with a 10-year warranty as well.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border-2">
                <AccordionTrigger className="text-left font-semibold">
                  What happens during power outages?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Standard grid-tied systems shut down during outages for safety. However, if you add battery storage, you can have backup power to run essential appliances during outages, maintaining electricity even when the grid is down.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border-2">
                <AccordionTrigger className="text-left font-semibold">
                  Are there any tax incentives available?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! The federal solar Investment Tax Credit (ITC) allows you to deduct 30% of your solar system cost from your federal taxes. Many states and local utilities also offer additional rebates and incentives. We'll help you navigate all available programs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
