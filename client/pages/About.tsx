import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  MapPin,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import LiquidChrome from "@/components/LiquidChrome";

export default function About() {
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcdf7b030fec349e498124f4ef8b7abf7%2F3c53530fe1d345289e8f669fefdff8f9?format=webp&width=800"
              alt="RV J&C OIL LTD"
              className="h-8"
            />
          </motion.div>
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

        </div>
      </nav>

      {/* About Hero Section */}
      <section className="pt-24 pb-20 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <LiquidChrome
            baseColor={[0.6, 0.45, 0.08]}
            speed={0.8}
            amplitude={0.6}
            frequencyX={3}
            frequencyY={3}
            interactive={true}
          />
        </div>
        <div className="absolute inset-0 bg-dark-card/70" />

        <div className="container mx-auto px-4 relative z-10">
          {/* About Hero */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">
              About <span className="text-gold">RV J&C OIL LTD</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
              A global leader in petroleum extraction, refining, and
              distribution, committed to powering the world's energy needs
            </p>
          </motion.div>

          {/* Main About Content */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6">
                Leading the Future of Energy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RV J&C OIL LTD is Nigeria's leading provider of high-grade
                  petroleum products for industrial and domestic energy needs
                  across a global range of industries. We deliver through
                  innovation, quality, sustainability and the highest level of
                  service. Our operations are committed to the strictest
                  environmental standards and international regulations.
                </p>
                <p>
                  At RV J&C OIL LTD, we leverage cutting-edge technology and
                  decades of expertise to extract, refine, and distribute
                  premium petroleum products. Our operations span across six
                  continents, ensuring reliable energy solutions that power
                  industries, communities, and economies worldwide.
                </p>
                <p>
                  Our deep commitment reaches as growing technological
                  efficiency to provide sustainable oil and energy solutions,
                  and highly renewable and profitable operations. Our strategic
                  partnerships with refineries, environmental and political
                  institutions strengthen our position. Our intensive research
                  experience in this business model is based on success and
                  sustainable growth.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop&auto=format"
                  alt="RV J&C OIL LTD Energy Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Blackboard Presentation */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12">
              RV J&C OIL LTD{" "}
              <span className="text-gold">Interactive Presentation</span>
            </h2>

            {/* Blackboard Container */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative border-8 border-gray-800 shadow-2xl">
              {/* Blackboard texture */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 1px, transparent 1px),
                    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(45deg, rgba(255,255,255,0.01) 50%, transparent 50%)
                  `,
                  backgroundSize: "15px 15px, 25px 25px, 8px 8px",
                }}
              />

              {/* Chalk dust effect */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 2px, transparent 2px)",
                    "radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1) 2px, transparent 2px)",
                    "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 2px, transparent 2px)",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Title - animated writing */}
              <motion.div
                className="absolute top-8 left-8 right-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-4xl font-bold text-white text-center"
                  style={{ fontFamily: "Courier New, monospace" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  viewport={{ once: true }}
                >
                  {/* Animated underline */}
                  <span className="relative">
                    RV J&C OIL LTD
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 3.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </span>
                </motion.h3>
              </motion.div>

              {/* Content sections with typewriter effect */}
              <div className="absolute top-24 left-8 right-8 bottom-8 grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Global Operations */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                    viewport={{ once: true }}
                  >
                    <motion.h4
                      className="text-xl font-bold text-gold mb-2"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      Global Operations:
                    </motion.h4>
                    <motion.ul
                      className="text-white space-y-1 text-sm"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      {[
                        "• 6 Continents",
                        "• 25+ Countries",
                        "• 50M+ Barrels Daily",
                        "• 24/7 Operations",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 4.5 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Technology */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h4
                      className="text-xl font-bold text-gold mb-2"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      Technology:
                    </motion.h4>
                    <motion.ul
                      className="text-white space-y-1 text-sm"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      {[
                        "• AI-Driven Extraction",
                        "• IoT Monitoring",
                        "• Automated Refineries",
                        "• Smart Pipelines",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 6.5 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Sustainability */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 8 }}
                    viewport={{ once: true }}
                  >
                    <motion.h4
                      className="text-xl font-bold text-gold mb-2"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      Sustainability:
                    </motion.h4>
                    <motion.ul
                      className="text-white space-y-1 text-sm"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      {[
                        "• Zero Emissions Target",
                        "• Clean Technology",
                        "• Carbon Neutral",
                        "• Renewable Integration",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 8.5 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Safety Record */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 10 }}
                    viewport={{ once: true }}
                  >
                    <motion.h4
                      className="text-xl font-bold text-gold mb-2"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      Safety Record:
                    </motion.h4>
                    <motion.ul
                      className="text-white space-y-1 text-sm"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      {[
                        "• Zero Accidents Goal",
                        "• ISO 45001 Certified",
                        "• 99.9% Safety Rate",
                        "• Best-in-Class Training",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 10.5 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </div>

              {/* Animated Diagrams */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 12 }}
                viewport={{ once: true }}
              >
                {/* Oil Flow Diagram */}
                <div className="flex items-center justify-center space-x-4 text-white">
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 12.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full mx-auto mb-1"></div>
                    <div className="text-xs">Extraction</div>
                  </motion.div>

                  <motion.div
                    className="w-8 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ delay: 13 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 13.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-gold rounded-full mx-auto mb-1"></div>
                    <div className="text-xs">Refining</div>
                  </motion.div>

                  <motion.div
                    className="w-8 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ delay: 14 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 14.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full mx-auto mb-1"></div>
                    <div className="text-xs">Distribution</div>
                  </motion.div>

                  <motion.div
                    className="w-8 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ delay: 15 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 15.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-gold rounded-full mx-auto mb-1"></div>
                    <div className="text-xs">Consumer</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Chalk and Eraser */}
              <motion.div
                className="absolute top-4 right-4 flex space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-8 bg-white rounded-sm opacity-80"></div>
                <div className="w-6 h-4 bg-gray-600 rounded opacity-60"></div>
              </motion.div>

              {/* Interactive hover effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(255,193,7,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 30% 30%, rgba(255,193,7,0.05) 0%, transparent 30%)",
                    "radial-gradient(circle at 70% 70%, rgba(255,193,7,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 50%, rgba(255,193,7,0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </div>

            <p className="text-center text-muted-foreground mt-6 text-lg">
              Interactive presentation showing our comprehensive oil operations
              and commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              We commit all our people, offices and projects to manufacture
              high-performance solutions for economic success, welcoming our
              people, customers and communities, and making positive steps
              toward cleaner environment solutions, safe operations, and
              protecting futures.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format"
                  alt="Safety Professional"
                  className="w-full rounded-lg"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                {[
                  {
                    icon: "🛡️",
                    title:
                      "Zero Threshold and zero harm to work with - No one should be injured, harmed, or penalized.",
                    color: "text-gold",
                  },
                  {
                    icon: "🤝",
                    title:
                      "Creating true relationships and strengthening opportunities - We create life-long business partnerships.",
                  },
                  {
                    icon: "⚡",
                    title:
                      "Working collectively towards changes - work together and achievements will be accelerated and optimized.",
                  },
                  {
                    icon: "🏆",
                    title:
                      "Step forward our way - We secure better living and provide excellent services.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{value.icon}</span>
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-1 ${value.color || "text-foreground"}`}
                      >
                        {value.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethics & Compliance */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gold text-dark-bg p-12 rounded-lg">
              <h2 className="text-4xl font-bold mb-6">Ethics & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4 text-lg">
                    Following business principles is paramount to our daily
                    business actions and the economic success of RV J&C OIL LTD.
                    Our success depends on the collective energy, innovation and
                    integrity of our employees and business partners. We support
                    our people to ask questions and to report any behavior that
                    does not follow:
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • Safety responsibility for everyone and ethical
                      operations
                    </li>
                    <li>• Observing applicable laws and regulations</li>
                    <li>• Transparent business and operational reporting</li>
                    <li>• Environmental protection and sustainability</li>
                    <li>• Occupational health and safety prevention</li>
                    <li>• Protecting assets and resources</li>
                    <li>• Performing fair and ethical business practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12">
              Company <span className="text-gold">Facts</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: "👥", number: "25,000+", label: "Global Employees" },
                { icon: "🏭", number: "49,000", label: "Metric Tons Daily" },
                { icon: "🌍", number: "25+", label: "Countries Served" },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark-bg p-8 rounded-lg border border-dark-border hover:border-gold transition-colors"
                >
                  <div className="text-5xl mb-4">{fact.icon}</div>
                  <div className="text-4xl font-bold text-gold mb-2">
                    {fact.number}
                  </div>
                  <div className="text-muted-foreground text-lg">
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl font-bold mb-6">Strategy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Our strategic effort is to improve the industry's leading
                extraction of high performance oil operations, which enables us
                to further enhance our competitive advantage through key
                priorities and innovative technologies.
              </p>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-3">
                Read More
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&auto=format"
                alt="Oil Platform Strategy"
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Documentation */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12">
              Company <span className="text-gold">Documentation</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "2023 Annual Report", bg: "bg-gold text-dark-bg" },
                {
                  title: "2023 Safety Report",
                  bg: "bg-dark-bg border border-gold text-gold",
                },
                { title: "Company Brochure", bg: "bg-gold text-dark-bg" },
                {
                  title: "Financial Information",
                  bg: "bg-dark-bg border border-gold text-gold",
                },
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg text-center cursor-pointer transition-all hover:scale-105 ${doc.bg}`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-lg font-semibold mb-2">{doc.title}</div>
                  <div className="text-sm">Download</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Operations Network */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12">
              Global <span className="text-gold">Operations Network</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Our worldwide infrastructure connects energy resources with global
              markets through strategic partnerships and cutting-edge
              technology.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Exploration & Production",
                  image:
                    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop&auto=format",
                  description:
                    "Advanced offshore and onshore drilling operations across 6 continents",
                  icon: "🛢️",
                },
                {
                  title: "Refining Operations",
                  image:
                    "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&h=300&fit=crop&auto=format",
                  description:
                    "State-of-the-art refineries processing millions of barrels daily",
                  icon: "🏭",
                },
                {
                  title: "Distribution Network",
                  image:
                    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop&auto=format",
                  description:
                    "Extensive pipeline and transportation infrastructure worldwide",
                  icon: "🚛",
                },
                {
                  title: "Technology Centers",
                  image:
                    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop&auto=format",
                  description:
                    "Research and development facilities driving innovation",
                  icon: "🔬",
                },
              ].map((operation, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-card rounded-lg overflow-hidden border border-dark-border hover:border-gold transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={operation.image}
                      alt={operation.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{operation.icon}</span>
                      <h3 className="text-xl font-bold text-gold">
                        {operation.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {operation.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Leading the future of energy with innovation, reliability, and
                sustainability.
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
