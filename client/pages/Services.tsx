import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Settings,
  Wrench,
  Recycle,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Users,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LiquidChrome from "@/components/LiquidChrome";

export default function Services() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Bulk Oil Delivery",
      description:
        "Premium petroleum oils and lubricants delivered in bulk quantities to minimize downtime and keep your operations running smoothly.",
      features: [
        "Fleet management",
        "Factory operations",
        "Agricultural equipment",
        "Timely delivery schedules",
      ],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Storage Tank Installation & Maintenance",
      description:
        "Certified technicians handle installation, inspection, and maintenance of petroleum oil storage systems with full regulatory compliance.",
      features: [
        "Professional installation",
        "Regular inspections",
        "Safety compliance",
        "Environmental standards",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Lubricant Solutions",
      description:
        "Full line of industrial-grade lubricants and oils for machinery, vehicles, and production equipment with expert product selection.",
      features: [
        "Industrial-grade products",
        "Expert consultation",
        "Optimal performance",
        "Equipment longevity",
      ],
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Used Oil Collection & Disposal",
      description:
        "Safe and compliant used oil collection and disposal services that help you stay environmentally conscious and legally compliant.",
      features: [
        "Environmental responsibility",
        "Legal compliance",
        "Safe collection",
        "Proper disposal",
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Emergency Fueling & On-Site Service",
      description:
        "24/7 rapid-response team available for emergency fueling and service calls when uptime matters most.",
      features: [
        "24/7 availability",
        "Rapid response",
        "Emergency service",
        "On-site support",
      ],
    },
  ];

  const advantages = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Reliable & Timely Deliveries",
      description: "Dependable service when you need it",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professionals",
      description: "Trained and experienced team",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Top-Tier Products",
      description: "From trusted industry brands",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Emergency services available",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Fully Compliant",
      description: "Local, state, and federal regulations",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <LiquidChrome />

      <motion.div
        className="relative z-10 container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: 0 }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-gold/20 text-gold border-gold/30"
          >
            Professional Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
            Petroleum Oil Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Reliable Petroleum Oil Solutions for Industrial, Commercial, and
            Residential Needs
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            We provide comprehensive petroleum oil services tailored to meet the
            needs of a wide range of industries. From bulk delivery to tank
            maintenance, our experienced team ensures safe, efficient, and
            timely supply of high-quality petroleum oils and lubricants.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gold">
            Our Petroleum Oil Services Include:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-dark-card border-dark-border hover:border-gold/30 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gold/20 text-gold">
                        {service.icon}
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs border-gold/30 text-gold"
                      >
                        ✅
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-gold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gold">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 bg-dark-card border-dark-border hover:border-gold/30 transition-colors duration-300">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-gold/20 text-gold">
                      {advantage.icon}
                    </div>
                    <h3 className="font-semibold text-gold">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {advantage.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Audience Section */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <Card className="bg-dark-card border-dark-border p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4 text-gold">
                Serving All Your Needs
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a commercial operation or a homeowner looking for
                dependable heating oil service, we provide the petroleum oil
                solutions you can trust.
              </p>
              <div className="flex justify-center gap-4 mt-6 flex-wrap">
                <Badge variant="secondary" className="bg-gold/20 text-gold">
                  Commercial Operations
                </Badge>
                <Badge variant="secondary" className="bg-gold/20 text-gold">
                  Industrial Facilities
                </Badge>
                <Badge variant="secondary" className="bg-gold/20 text-gold">
                  Residential Services
                </Badge>
                <Badge variant="secondary" className="bg-gold/20 text-gold">
                  Agricultural Equipment
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="bg-gradient-to-r from-gold/10 to-yellow-400/10 border-gold/30 p-8">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-gold">
                Get a Quote Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's talk about your petroleum oil needs. Contact us to get a
                free quote or schedule a service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-gold">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">[Phone Number]</span>
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">[Email]</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-dark-bg font-semibold"
                  onClick={() => navigate("/payment")}
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => navigate("/sales")}
                >
                  View Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
