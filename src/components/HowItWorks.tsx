import { motion } from "framer-motion";
import { Target, Tool, LineChart, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Define Your Goals",
    description: "Set clear objectives for your traceability program.",
    icon: Target,
  },
  {
    title: "Integrate Tools",
    description: "Implement our frameworks seamlessly into your workflow.",
    icon: Tool,
  },
  {
    title: "Monitor Risks",
    description: "Track and analyze potential issues in real-time.",
    icon: LineChart,
  },
  {
    title: "Improve & Adapt",
    description: "Continuously refine your approach based on insights.",
    icon: RefreshCw,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">Process</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simplifying Supply Chain Traceability
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-2rem)] w-[calc(100%-4rem)] h-[2px] bg-primary/10">
                  <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 rounded-full bg-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};