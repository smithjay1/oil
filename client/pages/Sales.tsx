import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Truck, Zap, Shield, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LiquidChrome from "@/components/LiquidChrome";

export default function Sales() {
  const [selectedCategory, setSelectedCategory] = useState("all");
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const categories = [
    { id: "all", name: "All Products", count: 10 },
    { id: "crude", name: "Crude Oil", count: 3 },
    { id: "refined", name: "Refined Products", count: 4 },
    { id: "specialty", name: "Specialty Oils", count: 3 }
  ];

  const oilProducts = [
    {
      id: 1,
      category: "crude",
      name: "West Texas Intermediate (WTI)",
      type: "Light Sweet Crude Oil",
      price: 78.50,
      unit: "per barrel",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&auto=format",
      description: "Premium light sweet crude oil with low sulfur content. Ideal for gasoline and diesel production.",
      specifications: ["API Gravity: 39.6°", "Sulfur Content: 0.24%", "Pour Point: -35°C"],
      inStock: true,
      featured: true
    },
    {
      id: 2,
      category: "crude",
      name: "Brent Crude Oil",
      type: "North Sea Blend",
      price: 82.30,
      unit: "per barrel",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
      description: "High-quality crude oil blend from the North Sea. Benchmark for global oil pricing.",
      specifications: ["API Gravity: 38.3°", "Sulfur Content: 0.37%", "Pour Point: -30°C"],
      inStock: true,
      featured: false
    },
    {
      id: 3,
      category: "crude",
      name: "Dubai Crude Oil",
      type: "Medium Sour Crude",
      price: 76.80,
      unit: "per barrel",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&h=600&fit=crop&auto=format",
      description: "Medium gravity crude oil from the Middle East. Excellent for refinery operations.",
      specifications: ["API Gravity: 31.0°", "Sulfur Content: 2.04%", "Pour Point: -6°C"],
      inStock: true,
      featured: false
    },
    {
      id: 4,
      category: "refined",
      name: "Premium Gasoline 95 RON",
      type: "Motor Fuel",
      price: 0.95,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&h=600&fit=crop&auto=format",
      description: "High-octane unleaded gasoline for automotive applications. Meets all international standards.",
      specifications: ["Octane Rating: 95 RON", "Ethanol Content: 10%", "Density: 0.75 g/ml"],
      inStock: true,
      featured: true
    },
    {
      id: 5,
      category: "refined",
      name: "Ultra Low Sulfur Diesel",
      type: "Automotive Diesel",
      price: 0.88,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format",
      description: "Clean-burning diesel fuel with ultra-low sulfur content for modern diesel engines.",
      specifications: ["Sulfur Content: <10 ppm", "Cetane Number: 51", "Density: 0.84 g/ml"],
      inStock: true,
      featured: false
    },
    {
      id: 6,
      category: "refined",
      name: "Jet Fuel A-1",
      type: "Aviation Fuel",
      price: 1.12,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&auto=format",
      description: "High-grade kerosene-based jet fuel for commercial and military aviation.",
      specifications: ["Flash Point: 38°C min", "Freeze Point: -47°C", "Density: 0.80 g/ml"],
      inStock: true,
      featured: false
    },
    {
      id: 7,
      category: "refined",
      name: "Marine Gas Oil",
      type: "Marine Fuel",
      price: 0.72,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800&h=600&fit=crop&auto=format",
      description: "Low-sulfur marine fuel compliant with IMO 2020 regulations for shipping industry.",
      specifications: ["Sulfur Content: 0.50%", "Viscosity: 11 cSt", "Flash Point: 60°C min"],
      inStock: true,
      featured: false
    },
    {
      id: 8,
      category: "specialty",
      name: "Hydraulic Oil ISO 46",
      type: "Industrial Lubricant",
      price: 3.50,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1590508669091-43e7b5bc37b6?w=800&h=600&fit=crop&auto=format",
      description: "Premium hydraulic fluid for industrial machinery and mobile equipment.",
      specifications: ["Viscosity: 46 cSt at 40°C", "Viscosity Index: 95", "Pour Point: -30°C"],
      inStock: true,
      featured: true
    },
    {
      id: 9,
      category: "specialty",
      name: "Transformer Oil",
      type: "Electrical Insulating Oil",
      price: 2.80,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&auto=format",
      description: "High-purity mineral oil for electrical transformers and switchgear insulation.",
      specifications: ["Dielectric Strength: 70 kV", "Acid Value: <0.01 mg KOH/g", "Moisture: <10 ppm"],
      inStock: false,
      featured: false
    },
    {
      id: 10,
      category: "specialty",
      name: "White Mineral Oil USP",
      type: "Food/Pharmaceutical Grade",
      price: 5.20,
      unit: "per liter",
      image: "https://images.unsplash.com/photo-1569163166731-de28039c3a85?w=800&h=600&fit=crop&auto=format",
      description: "USP/FDA approved white mineral oil for food processing and pharmaceutical applications.",
      specifications: ["Purity: 99.9%", "Color: Water White", "Saybolt Color: +30"],
      inStock: true,
      featured: false
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? oilProducts 
    : oilProducts.filter(product => product.category === selectedCategory);

  const handleGetQuote = (product: typeof oilProducts[0]) => {
    navigate('/payment', { state: { selectedProduct: product } });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-gold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            AETHER HUB & OIL
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/#services" },
              { name: "About", href: "/about" },
              { name: "Sales", href: "/sales" },
              { name: "Contact", href: "/#contact" }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="hover:text-gold transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90">
              Get Quote
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Sales Hero Section */}
      <section className="pt-24 pb-20 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <LiquidChrome
            baseColor={[0.6, 0.45, 0.08]}
            speed={0.5}
            amplitude={0.4}
            frequencyX={2}
            frequencyY={2}
            interactive={false}
          />
        </div>
        <div className="absolute inset-0 bg-dark-card/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">Premium <span className="text-gold">Oil Products</span></h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
              Discover our comprehensive range of high-quality oil products, from crude oil to specialized lubricants, all competitively priced for your business needs
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg border transition-all ${
                    selectedCategory === category.id
                      ? "bg-gold text-gold-foreground border-gold"
                      : "bg-dark-bg border-dark-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group"
              >
                <Card className="bg-dark-card border-dark-border hover:border-gold transition-all duration-300 overflow-hidden h-full">
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.featured && (
                        <Badge className="bg-gold text-gold-foreground">
                          <Zap className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {product.inStock ? (
                        <Badge variant="secondary" className="bg-green-600 text-white">
                          <Shield className="w-3 h-3 mr-1" />
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          Out of Stock
                        </Badge>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-dark-bg/90 text-gold text-lg font-bold px-3 py-2">
                        ${product.price} {product.unit}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <Droplets className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{product.type}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Specifications:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {product.specifications.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button 
                        className="flex-1 bg-gold text-gold-foreground hover:bg-gold/90" 
                        onClick={() => handleGetQuote(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? 'Get Quote' : 'Out of Stock'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-gold">Our Products</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We provide premium quality oil products with competitive pricing and reliable delivery
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "All products meet international standards with certified quality control"
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "Fast and secure delivery to your location with tracking capabilities"
              },
              {
                icon: Zap,
                title: "Competitive Pricing",
                description: "Best market prices with flexible payment terms and bulk discounts"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-gold-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                AETHER HUB & OIL
              </motion.div>
              <p className="text-muted-foreground mb-6 text-lg">
                Leading the future of energy with innovation, reliability, and sustainability.
              </p>
            </motion.div>
            
            {[
              { title: "Products", items: ["Crude Oil", "Refined Products", "Specialty Oils", "Lubricants"] },
              { title: "Services", items: ["Bulk Supply", "Custom Blending", "Quality Testing", "Logistics"] },
              { title: "Support", items: ["Contact Sales", "Technical Support", "Documentation", "Terms of Service"] },
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
              &copy; 2024 AETHER HUB & OIL. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
