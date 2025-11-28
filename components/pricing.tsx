"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individual creators",
    features: [
      "50 content pieces/month",
      "Basic AI templates",
      "Email support",
      "Standard analytics",
      "Single brand profile",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing teams",
    features: [
      "Unlimited content",
      "Advanced AI features",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom templates",
      "API access",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "Advanced security",
      "SLA guarantee",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 border transition-all duration-300 ${
                plan.featured
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 to-card/40 ring-1 ring-primary/20 scale-105"
                  : "border-border/60 bg-card/40 hover:border-primary/50"
              } backdrop-blur-sm`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.featured
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
