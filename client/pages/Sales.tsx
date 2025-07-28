import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Truck,
  Zap,
  Shield,
  Droplets,
  Plus,
  Minus,
  X,
  Menu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LiquidChrome from "@/components/LiquidChrome";

interface CartItem {
  id: number;
  name: string;
  type: string;
  price: number;
  unit: string;
  image: string;
  quantity: number;
}

export default function Sales() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const categories = [
    { id: "all", name: "All Products", count: 12 },
    { id: "crude", name: "Crude Oil", count: 4 },
    { id: "refined", name: "Refined Products", count: 4 },
    { id: "specialty", name: "Specialty Oils", count: 4 },
  ];

  const oilProducts = [
    {
      id: 1,
      category: "crude",
      name: "Offshore Platform Crude Oil",
      type: "Deep Water Extraction",
      price: 32500,
      unit: "per barrel",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&auto=format",
      description:
        "Premium crude oil extracted from offshore platforms with advanced deep water drilling technology.",
      specifications: [
        "API Gravity: 39.6°",
        "Sulfur Content: 0.24%",
        "Pour Point: -35°C",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      category: "crude",
      name: "Deep Water Drilling Crude",
      type: "Gulf of Guinea Blend",
      price: 34100,
      unit: "per barrel",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
      description:
        "High-quality crude oil from deep water drilling operations in the Gulf of Guinea, Nigeria.",
      specifications: [
        "API Gravity: 38.3°",
        "Sulfur Content: 0.37%",
        "Pour Point: -30°C",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 3,
      category: "crude",
      name: "Nigerian FPSO Crude",
      type: "Floating Production Unit Oil",
      price: 31800,
      unit: "per barrel",
      image:
        "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&h=600&fit=crop&auto=format",
      description:
        "Premium crude oil from Nigerian coast FPSO vessels with 200,000 barrels daily capacity.",
      specifications: [
        "API Gravity: 31.0°",
        "Sulfur Content: 2.04%",
        "Pour Point: -6°C",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 4,
      category: "crude",
      name: "Nigerian Light Sweet Crude",
      type: "Premium Export Grade",
      price: 34850,
      unit: "per barrel",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
      description:
        "High-quality Nigerian light sweet crude oil, premium grade for international export markets.",
      specifications: [
        "API Gravity: 40.2°",
        "Sulfur Content: 0.18%",
        "Pour Point: -38°C",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 5,
      category: "refined",
      name: "Premium Motor Spirit (PMS)",
      type: "Premium Petrol",
      price: 395,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&h=600&fit=crop&auto=format",
      description:
        "High-octane premium motor spirit for automotive applications, meeting Nigerian fuel standards.",
      specifications: [
        "Octane Rating: 95 RON",
        "Ethanol Content: 10%",
        "Density: 0.75 g/ml",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 6,
      category: "refined",
      name: "Automotive Gas Oil (AGO)",
      type: "Diesel Fuel",
      price: 365,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format",
      description:
        "Clean-burning diesel fuel with low sulfur content for modern diesel engines and generators.",
      specifications: [
        "Sulfur Content: <10 ppm",
        "Cetane Number: 51",
        "Density: 0.84 g/ml",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 7,
      category: "refined",
      name: "Aviation Turbine Kerosene",
      type: "Jet A-1 Fuel",
      price: 465,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&auto=format",
      description:
        "High-grade kerosene-based jet fuel for commercial and private aviation in Nigeria.",
      specifications: [
        "Flash Point: 38°C min",
        "Freeze Point: -47°C",
        "Density: 0.80 g/ml",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 8,
      category: "refined",
      name: "Dual Purpose Kerosene (DPK)",
      type: "Household & Industrial",
      price: 298,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800&h=600&fit=crop&auto=format",
      description:
        "Multi-purpose kerosene for household cooking, lighting, and industrial applications.",
      specifications: [
        "Sulfur Content: 0.50%",
        "Viscosity: 11 cSt",
        "Flash Point: 60°C min",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 9,
      category: "specialty",
      name: "Industrial Hydraulic Oil",
      type: "Heavy-Duty Lubricant",
      price: 1450,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1590508669091-43e7b5bc37b6?w=800&h=600&fit=crop&auto=format",
      description:
        "Premium hydraulic fluid designed for industrial machinery and heavy equipment operations.",
      specifications: [
        "Viscosity: 46 cSt at 40°C",
        "Viscosity Index: 95",
        "Pour Point: -30°C",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 10,
      category: "specialty",
      name: "Pipeline Grade Lubricant",
      type: "Specialized Pipeline Oil",
      price: 1160,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&auto=format",
      description:
        "Specialized lubricant for Nigerian pipeline systems and maintenance operations.",
      specifications: [
        "Dielectric Strength: 70 kV",
        "Acid Value: <0.01 mg KOH/g",
        "Moisture: <10 ppm",
      ],
      inStock: false,
      featured: false,
    },
    {
      id: 11,
      category: "specialty",
      name: "Marine Diesel Oil",
      type: "Marine Grade Fuel",
      price: 2155,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1569163166731-de28039c3a85?w=800&h=600&fit=crop&auto=format",
      description:
        "High-purity marine grade oil for coastal and offshore vessel operations in Nigerian waters.",
      specifications: [
        "Purity: 99.9%",
        "Color: Water White",
        "Saybolt Color: +30",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 12,
      category: "specialty",
      name: "Offshore Platform Hydraulic Fluid",
      type: "Marine Platform Lubricant",
      price: 1970,
      unit: "per liter",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
      description:
        "Specialized hydraulic fluid for offshore drilling rigs and marine platform operations.",
      specifications: [
        "Viscosity: 68 cSt at 40°C",
        "Thermal Stability: 200°C",
        "Anti-wear: Excellent",
      ],
      inStock: true,
      featured: false,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? oilProducts
      : oilProducts.filter((product) => product.category === selectedCategory);

  const addToCart = (product: (typeof oilProducts)[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            type: product.type,
            price: product.price,
            unit: product.unit,
            image: product.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleGetStarted = () => {
    if (cart.length === 0) {
      alert("Please add items to your cart first");
      return;
    }
    navigate("/payment", { state: { cartItems: cart } });
  };

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
              { name: "Services", href: "/#services" },
              { name: "About", href: "/about" },
              { name: "Sales", href: "/sales" },
              { name: "Contact", href: "/#contact" },
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

          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setShowCart(!showCart)}
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge className="ml-2 bg-gold text-gold-foreground">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleGetStarted}
                className="bg-gold text-gold-foreground hover:bg-gold/90"
              >
                Get Started
              </Button>
            </motion.div>

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
                  { name: "Services", href: "/#services" },
                  { name: "About", href: "/about" },
                  { name: "Sales", href: "/sales" },
                  { name: "Contact", href: "/#contact" },
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

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex-1 bg-black/50"
              onClick={() => setShowCart(false)}
            />
            <motion.div
              className="w-96 bg-dark-card border-l border-dark-border h-full overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gold">
                    Shopping Cart
                  </h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-muted-foreground hover:text-gold"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 bg-dark-bg rounded-lg"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gold text-sm">
                              {item.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {item.type}
                            </p>
                            <p className="text-sm font-bold">
                              ₦{item.price.toLocaleString()} {item.unit}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-6 h-6 rounded bg-gold/20 text-gold hover:bg-gold hover:text-gold-foreground"
                              >
                                <Minus className="w-3 h-3 mx-auto" />
                              </button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-6 h-6 rounded bg-gold/20 text-gold hover:bg-gold hover:text-gold-foreground"
                              >
                                <Plus className="w-3 h-3 mx-auto" />
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto text-red-500 hover:text-red-400"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-dark-border pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-xl font-bold text-gold">
                          ₦{getTotalPrice().toLocaleString()}
                        </span>
                      </div>
                      <Button
                        onClick={handleGetStarted}
                        className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h1 className="text-6xl font-bold mb-6">
              Premium <span className="text-gold">Oil Products</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
              Discover our comprehensive range of high-quality oil products,
              from crude oil to specialized lubricants, all competitively priced
              for your business needs across Nigeria
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
                        <Badge
                          variant="secondary"
                          className="bg-green-600 text-white"
                        >
                          <Shield className="w-3 h-3 mr-1" />
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-dark-bg/90 text-gold text-lg font-bold px-3 py-2">
                        ₦{product.price.toLocaleString()} {product.unit}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <Droplets className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gold mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.type}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Specifications:
                      </h4>
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
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
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
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-gold">Our Products</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We provide premium quality oil products with competitive pricing
              and reliable delivery across Nigeria
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
                description:
                  "All products meet Nigerian and international standards with certified quality control",
              },
              {
                icon: Truck,
                title: "Nationwide Delivery",
                description:
                  "Fast and secure delivery across all Nigerian states with tracking capabilities",
              },
              {
                icon: Zap,
                title: "Competitive Pricing",
                description:
                  "Best market prices in Naira with flexible payment terms and bulk discounts",
              },
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
                <h3 className="text-xl font-semibold text-gold mb-3">
                  {feature.title}
                </h3>
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
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcdf7b030fec349e498124f4ef8b7abf7%2F3c53530fe1d345289e8f669fefdff8f9?format=webp&width=800"
                  alt="RV J&C OIL LTD"
                  className="h-8"
                />
              </motion.div>
              <p className="text-muted-foreground mb-6 text-lg">
                Nigeria's premier oil company delivering quality petroleum
                products with reliability and excellence across the nation.
              </p>
            </motion.div>

            {[
              {
                title: "Products",
                items: [
                  "Crude Oil",
                  "Refined Products",
                  "Specialty Oils",
                  "Lubricants",
                ],
              },
              {
                title: "Services",
                items: [
                  "Bulk Supply",
                  "Custom Blending",
                  "Quality Testing",
                  "Logistics",
                ],
              },
              {
                title: "Support",
                items: [
                  "Contact Sales",
                  "Technical Support",
                  "Documentation",
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
