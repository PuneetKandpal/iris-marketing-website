import { BarChart3, Zap, Shield, Globe, Cpu, Layers } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Dive deep into your data with customizable dashboards and real-time reporting.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automated Workflows",
    description: "Save time by automating repetitive tasks across your entire organization.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and SOC2 compliance to keep your data protected.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global CDN",
    description: "Lightning-fast performance for your users, wherever they are in the world.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI-Powered Insights",
    description: "Leverage machine learning to predict trends and identify opportunities.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Seamless API",
    description: "Connect your custom tools directly to our robust REST and GraphQL APIs.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium mb-4">Features built for scale</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to manage your business operations from a single dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 border rounded-2xl bg-card hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
