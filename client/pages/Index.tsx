import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronDown, Zap, Shield, Globe, Award, Users, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import LiquidChrome from "@/components/LiquidChrome";

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startCount = 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (end - startCount) + startCount));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isInView]);

  return { count, ref };
};

// Particle component
const Particle = ({ delay, x, y }: { delay: number, x: number, y: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, x],
      y: [0, y],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
    }}
  />
);

// Floating icons
const FloatingIcon = ({ icon: Icon, delay, x }: { icon: any, delay: number, x: number }) => (
  <motion.div
    className="absolute text-gold/20"
    initial={{ opacity: 0, y: 50 }}
    animate={{
      opacity: [0, 0.3, 0],
      y: [-50, -100, -150],
      x: [0, x],
      rotate: [0, 180, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
    }}
  >
    <Icon size={24} />
  </motion.div>
);

export default function Index() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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

  const handleCTAClick = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground overflow-x-hidden">
      {/* Animated Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-gold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcdf7b030fec349e498124f4ef8b7abf7%2F0e9cf1a782aa45bc943722aba5eb5aba?format=webp&width=800"
              alt="RVJ&C Oil Ltd"
              className="h-8"
            />
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "/about" },
              { name: "Sales", href: "/sales" },
              { name: "Contact", href: "#contact" }
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Epic Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg"
          style={{ y: y1, opacity }}
        />

        {/* Animated Grid Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `linear-gradient(rgba(255, 193, 7, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 193, 7, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.1}
            x={(i % 4 - 2) * 100}
            y={(Math.floor(i / 4) % 4 - 2) * 100}
          />
        ))}

        {/* Floating Icons */}
        <FloatingIcon icon={Zap} delay={0} x={50} />
        <FloatingIcon icon={Shield} delay={2} x={-30} />
        <FloatingIcon icon={Globe} delay={4} x={80} />
        <FloatingIcon icon={Award} delay={6} x={-60} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title with Stagger Animation */}
            <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
              <motion.span
                className="inline-block text-gold"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1
                }}
              >
                AETHER
              </motion.span>
              {" "}
              <motion.span
                className="inline-block text-gold"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1
                }}
              >
                HUB
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-gold"
                variants={itemVariants}
              >
                &
              </motion.span>
              {" "}
              <motion.span
                className="inline-block text-foreground hover:text-gold transition-colors"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1
                }}
              >
                OIL
              </motion.span>
              
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 2, duration: 1 }}
              />
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Revolutionizing
              </motion.span>
              {" "}energy solutions with cutting-edge technology and unmatched expertise.
              <br />
              <motion.span
                className="text-gold font-semibold"
                animate={{ 
                  scale: [1, 1.05, 1],
                  color: ["#FFC107", "#FFD54F", "#FFC107"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Where innovation meets excellence.
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 relative overflow-hidden group px-8 py-4 text-lg"
                  onClick={handleCTAClick}
                  disabled={isLoading}
                >
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full"
                        />
                        Processing...
                      </motion.div>
                    ) : (
                      <motion.span
                        key="text"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Explore Services
                      </motion.span>
                    )}
                  </AnimatePresence>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-gold-foreground px-8 py-4 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Learn More</span>
                  <motion.div
                    className="absolute inset-0 bg-gold"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gold" />
          </motion.div>
        </div>
      </section>

      {/* Animated Services Section */}
      <section id="services" className="py-20 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <LiquidChrome
            baseColor={[0.8, 0.6, 0.1]} // Gold oil color
            speed={0.5}
            amplitude={0.4}
            frequencyX={2}
            frequencyY={2}
            interactive={false}
          />
        </div>
        <div className="absolute inset-0 bg-dark-card/80" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold mb-6"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gold">Services</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Comprehensive energy solutions tailored to meet your specific needs
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, title: "Oil Exploration", desc: "Advanced exploration techniques using cutting-edge technology to locate and assess oil reserves." },
              { icon: Shield, title: "Refinery Operations", desc: "State-of-the-art refining processes ensuring maximum efficiency and environmental compliance." },
              { icon: Globe, title: "Distribution Network", desc: "Extensive distribution infrastructure delivering products safely and efficiently worldwide." },
              { icon: Users, title: "Consulting Services", desc: "Expert consultation for energy projects, regulatory compliance, and strategic planning." },
              { icon: Award, title: "Environmental Solutions", desc: "Sustainable practices and environmental protection measures for responsible energy production." },
              { icon: TrendingUp, title: "Technical Support", desc: "24/7 technical support and maintenance services for optimal operational performance." },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onHoverStart={() => setActiveService(index)}
                onHoverEnd={() => setActiveService(null)}
              >
                <Card className="bg-dark-bg border-dark-border hover:border-gold transition-all duration-300 relative overflow-hidden group h-full">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={activeService === index ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardContent className="p-8 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-gold" />
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-semibold mb-4 group-hover:text-gold transition-colors"
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.desc}
                    </motion.p>

                    {/* Animated border */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gold"
                      initial={{ width: 0 }}
                      animate={activeService === index ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Crude Oil Showcase */}
      <section className="py-20 bg-dark-bg relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            background: "linear-gradient(45deg, transparent 0%, rgba(255, 193, 7, 0.1) 50%, transparent 100%)"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Premium <span className="text-gold">Crude Oil</span> Trading</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              We specialize in sourcing, refining, and delivering the world's finest crude oil varieties.
              From light sweet crude to heavy sour blends, we provide premium petroleum solutions globally.
            </p>
          </motion.div>

          {/* Floating Oil Types Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "West Texas Intermediate (WTI)",
                grade: "Light Sweet Crude",
                api: "39.6° API",
                sulfur: "0.24% Sulfur",
                image: "🛢️",
                description: "Premium benchmark crude oil with exceptional refining yields"
              },
              {
                name: "Brent Crude",
                grade: "Light Sweet Crude",
                api: "38.3° API",
                sulfur: "0.37% Sulfur",
                image: "⚫",
                description: "North Sea crude oil, global pricing benchmark for Atlantic Basin"
              },
              {
                name: "Dubai Crude",
                grade: "Medium Sour Crude",
                api: "31° API",
                sulfur: "2.0% Sulfur",
                image: "🏜️",
                description: "Middle Eastern crude oil ideal for heavy fuel oil production"
              },
              {
                name: "Maya Heavy",
                grade: "Heavy Sour Crude",
                api: "22° API",
                sulfur: "3.3% Sulfur",
                image: "🌊",
                description: "Mexican crude perfect for specialized refinery operations"
              },
              {
                name: "Bonny Light",
                grade: "Light Sweet Crude",
                api: "37° API",
                sulfur: "0.14% Sulfur",
                image: "💎",
                description: "Nigerian premium crude with excellent gasoline yields"
              },
              {
                name: "Urals Crude",
                grade: "Medium Sour Crude",
                api: "32° API",
                sulfur: "1.3% Sulfur",
                image: "❄️",
                description: "Russian export blend ideal for European refineries"
              }
            ].map((oil, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <Card className="bg-dark-card border-dark-border hover:border-gold transition-all duration-500 overflow-hidden h-full relative">
                  {/* Floating Animation Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />

                  <CardContent className="p-6 relative z-10">
                    {/* Oil Icon with 3D Float */}
                    <motion.div
                      className="text-6xl mb-4 text-center"
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 0.8
                      }}

                    >
                      {oil.image}
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold mb-2 text-gold group-hover:text-gold/80 transition-colors"
                    >
                      {oil.name}
                    </motion.h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Grade:</span>
                        <span className="text-gold font-semibold">{oil.grade}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">API Gravity:</span>
                        <span className="font-semibold">{oil.api}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Sulfur Content:</span>
                        <span className="font-semibold">{oil.sulfur}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {oil.description}
                    </p>

                    {/* Floating border effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Trading Excellence Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "2.5M", label: "Barrels Daily Capacity", icon: "🛢️" },
              { number: "24/7", label: "Global Trading Operations", icon: "🌍" },
              { number: "99.9%", label: "Quality Assurance Rate", icon: "💎" },
              { number: "$50B+", label: "Annual Trading Volume", icon: "💰" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  y: -10
                }}
                className="relative group"
              >
                {/* Floating icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className="text-4xl font-bold text-gold mb-2"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>

                {/* 3D shadow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gold/5 rounded-lg -z-10"
                  animate={{
                    scale: [1, 1.02, 1],
                    y: [0, 2, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section id="gallery" className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Our <span className="text-gold">Projects</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our portfolio of successful energy projects around the world
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "North Sea Oil Platform",
                location: "Norwegian Continental Shelf",
                image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&auto=format",
                description: "Advanced offshore drilling platform producing 150,000 barrels daily"
              },
              {
                title: "Texas Refinery Complex",
                location: "Houston, Texas",
                image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&h=600&fit=crop&auto=format",
                description: "State-of-the-art refinery processing 500,000 barrels per day"
              },
              {
                title: "Crude Oil Storage Terminal",
                location: "Middle East",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
                description: "Strategic petroleum reserve with 50 million barrel capacity"
              },
              {
                title: "Pipeline Transportation",
                location: "Trans-Continental",
                image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&auto=format",
                description: "2,500-mile pipeline system transporting crude oil safely"
              },
              {
                title: "Petrochemical Plant",
                location: "Saudi Arabia",
                image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format",
                description: "Integrated facility producing refined petroleum products"
              },
              {
                title: "LNG Export Terminal",
                location: "Qatar",
                image: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800&h=600&fit=crop&auto=format",
                description: "Liquefied natural gas facility for global energy distribution"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="aspect-video relative overflow-hidden bg-dark-bg">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark overlay for better text readability */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Project Information Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-2 text-gold">{project.title}</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-gold mr-2" />
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Hover Reveal Effect */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-gold/90 backdrop-blur-sm rounded-full p-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Globe className="w-8 h-8 text-dark-bg" />
                    </motion.div>
                  </motion.div>

                  {/* Animated sweep overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <LiquidChrome
            baseColor={[0.6, 0.45, 0.08]} // Rich gold oil color
            speed={0.8}
            amplitude={0.6}
            frequencyX={3}
            frequencyY={3}
            interactive={true}
          />
        </div>
        <div className="absolute inset-0 bg-dark-bg/70" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Get In <span className="text-gold">Touch</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to start your next energy project? Contact us today for a consultation
            </p>
          </motion.div>
          
          <motion.div
            className="grid lg:grid-cols-2 gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, text: "15 Kofo Abayomi Street, Victoria Island, Lagos, Nigeria" },
                  { icon: Phone, text: "+234 903 770 9551" },
                  { icon: Mail, text: "info@rvjcoil.com" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 193, 7, 0.3)" }}
                    >
                      <item.icon className="w-6 h-6 text-gold" />
                    </motion.div>
                    <span className="text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <form className="space-y-6">
                {[
                  { placeholder: "First Name", type: "text" },
                  { placeholder: "Last Name", type: "text" },
                  { placeholder: "Email Address", type: "email" },
                ].map((field, index) => (
                  <motion.input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-dark-card border border-dark-border rounded-lg px-6 py-4 focus:outline-none focus:border-gold transition-colors text-lg"
                    whileFocus={{ scale: 1.02, borderColor: "#FFC107" }}
                  />
                ))}
                
                <motion.textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-6 py-4 focus:outline-none focus:border-gold resize-none transition-colors text-lg"
                  whileFocus={{ scale: 1.02, borderColor: "#FFC107" }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90 py-4 text-lg relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-dark-card border-t border-dark-border py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{
            background: "linear-gradient(0deg, #FFC107 0%, transparent 100%)"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
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
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcdf7b030fec349e498124f4ef8b7abf7%2F0e9cf1a782aa45bc943722aba5eb5aba?format=webp&width=800"
                  alt="RVJ&C Oil Ltd"
                  className="h-8"
                />
              </motion.div>
              <p className="text-muted-foreground mb-6 text-lg">
                Nigeria's premier oil company delivering quality petroleum products with reliability and excellence across the nation.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, color: "#FFC107" }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                  >
                    <Icon className="w-6 h-6 text-muted-foreground hover:text-gold transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {[
              { title: "Services", items: ["Oil Exploration", "Refinery Operations", "Distribution", "Consulting"] },
              { title: "Company", items: ["About Us", "Careers", "News", "Investors"] },
              { title: "Support", items: ["Contact", "Documentation", "Privacy Policy", "Terms of Service"] },
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
              &copy; 2024 RVJ&C Oil Ltd. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
