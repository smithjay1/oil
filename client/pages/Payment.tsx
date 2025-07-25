import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Truck, Phone, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LiquidChrome from "@/components/LiquidChrome";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProduct = location.state?.selectedProduct;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    country: "",
    quantity: 1,
    paymentMethod: "",
    specialRequirements: "",
  });

  const [errors, setErrors] = useState({});

  if (!selectedProduct) {
    return (
      <div className="min-h-screen bg-dark-bg text-foreground flex items-center justify-center">
        <Card className="bg-dark-card border-dark-border p-8 text-center">
          <h2 className="text-2xl font-bold text-gold mb-4">No Product Selected</h2>
          <p className="text-muted-foreground mb-6">Please select a product from our sales page first.</p>
          <Button onClick={() => navigate('/sales')} className="bg-gold text-gold-foreground hover:bg-gold/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sales
          </Button>
        </Card>
      </div>
    );
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.includes('@')) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required";
    if (formData.quantity < 1) newErrors.quantity = "Quantity must be at least 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotal = () => {
    return (selectedProduct.price * formData.quantity).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `
🛢️ *AETHER HUB & OIL - New Order Request*

*Product Details:*
• Product: ${selectedProduct.name}
• Type: ${selectedProduct.type}
• Unit Price: $${selectedProduct.price} ${selectedProduct.unit}
• Quantity: ${formData.quantity}
• Total Amount: $${calculateTotal()}

*Customer Information:*
• Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company}

*Delivery Address:*
${formData.address}
${formData.city}, ${formData.country}

*Payment Method:* ${formData.paymentMethod}

${formData.specialRequirements ? `*Special Requirements:*\n${formData.specialRequirements}` : ''}

Please confirm this order and provide payment instructions.
    `.trim();

    // Note: Replace this with the actual WhatsApp number
    const whatsappNumber = "1234567890"; // User will provide this
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
            AETHER HUB & OIL
          </motion.div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/sales')}
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sales
          </Button>
        </div>
      </nav>

      {/* Payment Hero Section */}
      <section className="pt-24 pb-12 bg-dark-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <LiquidChrome
            baseColor={[0.6, 0.45, 0.08]}
            speed={0.3}
            amplitude={0.3}
            frequencyX={1.5}
            frequencyY={1.5}
            interactive={false}
          />
        </div>
        <div className="absolute inset-0 bg-dark-card/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Secure <span className="text-gold">Checkout</span></h1>
            <p className="text-muted-foreground text-lg">
              Complete your order details to proceed with your purchase
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-12 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Order Summary */}
            <motion.div variants={itemVariants} className="lg:order-2">
              <Card className="bg-dark-card border-dark-border sticky top-32">
                <CardHeader>
                  <CardTitle className="text-xl text-gold flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg text-gold">{selectedProduct.name}</h3>
                    <p className="text-muted-foreground text-sm">{selectedProduct.type}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge className="bg-gold text-gold-foreground">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      In Stock
                    </Badge>
                  </div>

                  <Separator className="bg-dark-border" />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Unit Price:</span>
                      <span className="font-semibold">${selectedProduct.price} {selectedProduct.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-semibold">{formData.quantity}</span>
                    </div>
                    <Separator className="bg-dark-border" />
                    <div className="flex justify-between text-lg font-bold text-gold">
                      <span>Total:</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-dark-bg rounded-lg">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Shield className="w-4 h-4 mr-2 text-green-500" />
                      Secure Payment Processing
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Truck className="w-4 h-4 mr-2 text-gold" />
                      Fast & Reliable Delivery
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <Card className="bg-dark-card border-dark-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-gold">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-dark-bg border-dark-border focus:border-gold"
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-dark-bg border-dark-border focus:border-gold"
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-dark-bg border-dark-border focus:border-gold"
                          placeholder="your.email@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-dark-bg border-dark-border focus:border-gold"
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-dark-bg border-dark-border focus:border-gold"
                        placeholder="Your Company Name"
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Information */}
                <Card className="bg-dark-card border-dark-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-gold">Delivery Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="bg-dark-bg border-dark-border focus:border-gold"
                        placeholder="Street address, building, suite"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="bg-dark-bg border-dark-border focus:border-gold"
                          placeholder="City"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger className="bg-dark-bg border-dark-border focus:border-gold">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-card border-dark-border">
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Details */}
                <Card className="bg-dark-card border-dark-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-gold">Order Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Input
                          id="quantity"
                          type="number"
                          min="1"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                          className="bg-dark-bg border-dark-border focus:border-gold"
                        />
                        {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                      </div>
                      <div>
                        <Label htmlFor="paymentMethod">Payment Method *</Label>
                        <Select onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                          <SelectTrigger className="bg-dark-bg border-dark-border focus:border-gold">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-card border-dark-border">
                            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                            <SelectItem value="letter-of-credit">Letter of Credit</SelectItem>
                            <SelectItem value="cash-advance">Cash in Advance</SelectItem>
                            <SelectItem value="open-account">Open Account</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                      <Textarea
                        id="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                        className="bg-dark-bg border-dark-border focus:border-gold"
                        placeholder="Any special delivery instructions, quality requirements, or other notes..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gold text-gold-foreground hover:bg-gold/90 px-12 py-4 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Complete Order via WhatsApp
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
