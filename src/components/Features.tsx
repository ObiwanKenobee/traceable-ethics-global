import { motion } from "framer-motion";
import { BarChart3, Globe2, GitFork, Rocket, Users } from "lucide-react";

const features = [
  {
    title: "Traceability Tools",
    description: "Customizable and real-time risk visualization for every step in your supply chain.",
    icon: BarChart3,
  },
  {
    title: "Global Trace Protocol Document",
    description: "Your roadmap to creating and managing traceability programs.",
    icon: Globe2,
  },
  {
    title: "Open-Source Resources",
    description: "Free access to our tools and frameworks for immediate implementation.",
    icon: GitFork,
  },
  {
    title: "Pilot Projects",
    description: "Testing groundbreaking methodologies in high-risk sectors.",
    icon: Rocket,
  },
  {
    title: "Collaboration & Support",
    description: "Engaging brands, experts, and organizations to refine and expand traceability practices.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-lg shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};