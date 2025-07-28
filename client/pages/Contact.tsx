import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  Car,
  Home,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LiquidChrome from "@/components/LiquidChrome";

export default function Contact() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add actual form submission logic here
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["Main: +2347025340480", "Emergency: +2347025340480"],
      description: "Available 24/7 for emergency services",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@rvjc.co.uk", "emergency@rvjc.co.uk"],
      description: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["30,Mobolaji Bank Anthony Way", "Ikeja Lagos"],
      description: "Serving nationwide with local expertise",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "24/7 Emergency Service"],
      description: "Emergency response available anytime",
    },
  ];

  const serviceTypes = [
    { value: "", label: "Select a service..." },
    { value: "bulk-delivery", label: "Bulk Oil Delivery" },
    {
      value: "tank-maintenance",
      label: "Storage Tank Installation & Maintenance",
    },
    { value: "lubricant-solutions", label: "Lubricant Solutions" },
    { value: "oil-disposal", label: "Used Oil Collection & Disposal" },
    {
      value: "emergency-service",
      label: "Emergency Fueling & On-Site Service",
    },
    { value: "consultation", label: "Consultation Services" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcdf7b030fec349e498124f4ef8b7abf7%2F3c53530fe1d345289e8f669fefdff8f9?format=webp&width=800"
              alt="RV J&C OIL LTD"
              className="h-8"
            />
            <span className="text-lg md:text-xl font-bold text-gold">
              RV J&C OIL LTD
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Sales", href: "/sales" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="hover:text-gold transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gold p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-dark-bg/95 backdrop-blur-sm border-t border-dark-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "About", href: "/about" },
                  { name: "Sales", href: "/sales" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block py-2 hover:text-gold transition-colors border-b border-dark-border/50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <LiquidChrome
          baseColor={[0.8, 0.6, 0.1]}
          speed={0.3}
          amplitude={0.3}
          frequencyX={1.5}
          frequencyY={1.5}
          interactive={false}
        />
      </div>
      <div className="absolute inset-0 bg-dark-bg/80" />

      <motion.div
        className="relative z-10 container mx-auto px-4 pt-24 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-gold/20 text-gold border-gold/30"
          >
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your petroleum oil needs? We're here to help with
            expert consultation and reliable service.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full bg-dark-card border-dark-border hover:border-gold/30 transition-colors duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 rounded-full bg-gold/20 text-gold w-fit mb-3">
                    {info.icon}
                  </div>
                  <CardTitle className="text-gold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-semibold mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Service Types */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-dark-card border-dark-border">
              <CardHeader>
                <CardTitle className="text-2xl text-gold flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gold mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-dark-bg border-dark-border focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gold mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-dark-bg border-dark-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gold mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="bg-dark-bg border-dark-border focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gold mb-2 block">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-dark-bg border border-dark-border rounded-md focus:border-gold focus:outline-none"
                      >
                        {serviceTypes.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gold mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your petroleum oil needs, project details, or any questions you have..."
                      rows={5}
                      required
                      className="bg-dark-bg border-dark-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-dark-bg font-semibold"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Types */}
          <motion.div variants={itemVariants}>
            <Card className="bg-dark-card border-dark-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gold">
                  Our Service Areas
                </CardTitle>
                <p className="text-muted-foreground">
                  We provide comprehensive petroleum oil services for various
                  sectors:
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gold">
                        Commercial & Industrial
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Manufacturing plants, warehouses, commercial buildings,
                        and industrial facilities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gold">
                        Fleet & Transportation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Vehicle fleets, transportation companies, and logistics
                        operations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Home className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gold">Residential</h3>
                      <p className="text-sm text-muted-foreground">
                        Heating oil delivery, residential tank maintenance, and
                        home heating solutions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dark-border pt-6">
                  <h3 className="font-semibold text-gold mb-3">
                    Emergency Services Available
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    <Badge
                      variant="outline"
                      className="border-gold/30 text-gold justify-start"
                    >
                      24/7 Emergency Response
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gold/30 text-gold justify-start"
                    >
                      Rapid On-Site Service
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gold/30 text-gold justify-start"
                    >
                      Emergency Fuel Delivery
                    </Badge>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10"
                    onClick={() => navigate("/services")}
                  >
                    View All Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="bg-gradient-to-r from-gold/10 to-yellow-400/10 border-gold/30 p-8">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-gold">
                Need Immediate Assistance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                For urgent petroleum oil needs or emergency services, contact us
                directly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-dark-bg font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => navigate("/services")}
                >
                  View Services
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => navigate("/payment")}
                >
                  Get Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-dark-card border-t border-dark-border py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-4 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="text-3xl font-bold text-gold mb-6"
                whileHover={{ scale: 1.05 }}
              >
                RV J&C OIL LTD
              </motion.div>
              <p className="text-muted-foreground mb-6 text-lg">
                Nigeria's premier oil company delivering quality petroleum
                products with reliability and excellence across the nation.
              </p>
            </motion.div>

            {[
              {
                title: "Services",
                items: [
                  "Oil Exploration",
                  "Refinery Operations",
                  "Distribution",
                  "Consulting",
                ],
              },
              {
                title: "Company",
                items: ["About Us", "Careers", "News", "Investors"],
              },
              {
                title: "Support",
                items: [
                  "Contact",
                  "Documentation",
                  "Privacy Policy",
                  "Terms of Service",
                ],
              },
            ].map((column, columnIndex) => (
              <motion.div key={columnIndex} variants={itemVariants}>
                <h4 className="font-semibold mb-6 text-xl">{column.title}</h4>
                <ul className="space-y-3">
                  {column.items.map((item, index) => (
                    <motion.li key={index}>
                      <motion.a
                        href="#"
                        className="text-muted-foreground hover:text-gold transition-colors text-lg"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-dark-border mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg">
              &copy; 2024 RV J&C OIL LTD. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
