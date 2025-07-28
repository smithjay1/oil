import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Eye,
  Download,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import LiquidChrome from "@/components/LiquidChrome";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedImage, setSelectedImage] = useState(null);

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
    { id: "all", name: "All Images", count: 24 },
    { id: "offshore", name: "Offshore Platforms", count: 6 },
    { id: "refineries", name: "Refineries", count: 5 },
    { id: "pipelines", name: "Pipelines", count: 4 },
    { id: "storage", name: "Storage Facilities", count: 4 },
    { id: "transportation", name: "Transportation", count: 3 },
    { id: "team", name: "Our Team", count: 2 },
  ];

  const galleryImages = [
    // Offshore Platforms
    {
      id: 1,
      category: "offshore",
      title: "North Sea Oil Platform Alpha",
      location: "Norwegian Continental Shelf",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&auto=format",
      description:
        "Advanced offshore drilling platform producing 150,000 barrels daily with zero environmental incidents.",
    },
    {
      id: 2,
      category: "offshore",
      title: "Deep Water Exploration Rig",
      location: "Gulf of Mexico",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
      description:
        "State-of-the-art deep water drilling operation at 2000m depth.",
    },
    {
      id: 3,
      category: "offshore",
      title: "Floating Production Unit",
      location: "Brazilian Coast",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&h=600&fit=crop&auto=format",
      description: "FPSO vessel handling 200,000 barrels per day capacity.",
    },
    {
      id: 4,
      category: "offshore",
      title: "Offshore Wind & Oil Platform",
      location: "North Sea",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
      description: "Hybrid renewable energy and oil extraction platform.",
    },
    {
      id: 5,
      category: "offshore",
      title: "Jack-up Drilling Rig",
      location: "Persian Gulf",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
      description:
        "Mobile offshore drilling unit for shallow water operations.",
    },
    {
      id: 6,
      category: "offshore",
      title: "Subsea Installation",
      location: "North Atlantic",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format",
      description: "Underwater pipeline and equipment installation project.",
    },

    // Refineries
    {
      id: 7,
      category: "refineries",
      title: "Houston Refinery Complex",
      location: "Texas, USA",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&h=600&fit=crop&auto=format",
      description: "World-class refinery processing 500,000 barrels per day.",
    },
    {
      id: 8,
      category: "refineries",
      title: "Catalytic Cracking Unit",
      location: "Rotterdam, Netherlands",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format",
      description:
        "Advanced catalytic cracking technology for premium fuel production.",
    },
    {
      id: 9,
      category: "refineries",
      title: "Petrochemical Plant",
      location: "Saudi Arabia",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&auto=format",
      description:
        "Integrated petrochemical facility producing polymer feedstocks.",
    },
    {
      id: 10,
      category: "refineries",
      title: "Distillation Towers",
      location: "Singapore",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800&h=600&fit=crop&auto=format",
      description:
        "High-efficiency distillation columns for crude oil separation.",
    },
    {
      id: 11,
      category: "refineries",
      title: "Control Room Operations",
      location: "Abu Dhabi, UAE",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1590508669091-43e7b5bc37b6?w=800&h=600&fit=crop&auto=format",
      description:
        "24/7 automated control systems monitoring refinery operations.",
    },

    // Pipelines
    {
      id: 12,
      category: "pipelines",
      title: "Trans-Continental Pipeline",
      location: "North America",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&auto=format",
      description:
        "2,500-mile pipeline system transporting crude oil safely across continents.",
    },
    {
      id: 13,
      category: "pipelines",
      title: "Underwater Pipeline Installation",
      location: "Mediterranean Sea",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1569163166731-de28039c3a85?w=800&h=600&fit=crop&auto=format",
      description:
        "Subsea pipeline connecting offshore platforms to onshore facilities.",
    },
    {
      id: 14,
      category: "pipelines",
      title: "Pipeline Maintenance Crew",
      location: "Alaska, USA",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1521134834135-d9df83b1f34a?w=800&h=600&fit=crop&auto=format",
      description:
        "Specialized maintenance team ensuring pipeline integrity and safety.",
    },
    {
      id: 15,
      category: "pipelines",
      title: "Smart Pipeline Monitoring",
      location: "Various Locations",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1516639077915-d650d5c25f88?w=800&h=600&fit=crop&auto=format",
      description:
        "IoT sensors and AI monitoring for predictive pipeline maintenance.",
    },

    // Storage Facilities
    {
      id: 16,
      category: "storage",
      title: "Crude Oil Storage Terminal",
      location: "Cushing, Oklahoma",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
      description:
        "Strategic petroleum reserve with 50 million barrel storage capacity.",
    },
    {
      id: 17,
      category: "storage",
      title: "LNG Storage Tanks",
      location: "Qatar",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop&auto=format",
      description:
        "Liquefied natural gas storage facility for export operations.",
    },
    {
      id: 18,
      category: "storage",
      title: "Floating Storage Unit",
      location: "Persian Gulf",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop&auto=format",
      description: "Mobile floating storage and offloading vessel.",
    },
    {
      id: 19,
      category: "storage",
      title: "Underground Storage Caverns",
      location: "Louisiana, USA",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1582569706006-c00e49e7dd00?w=800&h=600&fit=crop&auto=format",
      description:
        "Salt dome storage caverns for strategic petroleum reserves.",
    },

    // Transportation
    {
      id: 20,
      category: "transportation",
      title: "Oil Tanker Fleet",
      location: "International Waters",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
      description:
        "VLCC tankers transporting crude oil across global shipping routes.",
    },
    {
      id: 21,
      category: "transportation",
      title: "Railway Tank Cars",
      location: "Canada",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f37f1ddc?w=800&h=600&fit=crop&auto=format",
      description:
        "Specialized rail transport for petroleum products distribution.",
    },
    {
      id: 22,
      category: "transportation",
      title: "Fuel Truck Fleet",
      location: "Distribution Centers",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1574018094792-b7c0d8f5ae3d?w=800&h=600&fit=crop&auto=format",
      description: "Last-mile distribution trucks delivering refined products.",
    },

    // Team
    {
      id: 23,
      category: "team",
      title: "Engineering Team",
      location: "R&D Center",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&auto=format",
      description:
        "Our world-class engineering team driving innovation in energy solutions.",
    },
    {
      id: 24,
      category: "team",
      title: "Safety Training Program",
      location: "Training Facility",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format",
      description:
        "Comprehensive safety training ensuring zero-accident workplace.",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
            RV J&C OIL LTD
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/#services" },
              { name: "About", href: "/about" },
              { name: "Gallery", href: "/gallery" },
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gold text-gold-foreground hover:bg-gold/90">
              Get Quote
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Gallery Hero Section */}
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
              Our <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
              Explore our comprehensive collection of oil industry operations,
              facilities, and achievements from around the world
            </p>
          </motion.div>

          {/* Filter and View Controls */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
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

            {/* View Mode Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">View:</span>
              <div className="flex border border-dark-border rounded-lg overflow-hidden">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-gold text-gold-foreground" : "bg-dark-bg text-muted-foreground"}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-gold text-gold-foreground" : "bg-dark-bg text-muted-foreground"}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className={`gap-6 ${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "flex flex-col"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`group cursor-pointer ${
                  viewMode === "list"
                    ? "flex gap-6 p-6 bg-dark-card rounded-lg border border-dark-border hover:border-gold"
                    : ""
                }`}
                whileHover={{ scale: viewMode === "grid" ? 1.02 : 1 }}
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className={`relative overflow-hidden rounded-lg ${
                    viewMode === "list"
                      ? "w-48 h-32 flex-shrink-0"
                      : "aspect-video"
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* View Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm rounded-full p-2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye className="w-4 h-4 text-dark-bg" />
                  </motion.div>

                  {viewMode === "grid" && (
                    <motion.div
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-white font-bold text-lg mb-1">
                        {image.title}
                      </h3>
                      <div className="flex items-center text-gold text-sm mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {image.location}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {image.date}
                      </div>
                    </motion.div>
                  )}
                </div>

                {viewMode === "list" && (
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gold mb-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {image.location}
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      {image.date}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {image.description}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gold text-gold-foreground hover:bg-gold/90"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="max-w-4xl w-full bg-dark-card rounded-lg overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gold mb-2">
                {selectedImage.title}
              </h3>
              <div className="flex items-center text-muted-foreground mb-4 gap-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedImage.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedImage.date}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedImage.description}
              </p>
              <div className="flex gap-3">
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download High Resolution
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
