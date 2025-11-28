"use client"

import { Card } from "@/components/ui/card"
import { Zap, Brain, Clock, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description:
      "Advanced language models understand your brand voice and create content that resonates with your audience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate complete blog posts, social media content, and email campaigns in mere seconds.",
  },
  {
    icon: Clock,
    title: "Save Hours Daily",
    description: "Automate your content creation workflow and focus on strategy instead of writing.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Get real-time analytics on content performance and AI-powered recommendations for improvement.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Modern Creators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale your content production without compromising quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="relative p-6 sm:p-8 border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300 group"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 h-px w-12 bg-gradient-to-r from-primary to-transparent group-hover:w-24 transition-all duration-500" />

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
