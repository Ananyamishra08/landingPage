"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-secondary/30 backdrop-blur-sm mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Powered by Advanced AI</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Create Amazing Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/70">
              10x Faster Than Before
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            ContentFlow uses cutting-edge AI to help marketers and creators generate high-quality, engaging content in
            seconds. Say goodbye to writer's block.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Creating Free
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-12 border-t border-border/40">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading brands</p>
            <div className="flex justify-center gap-8 flex-wrap opacity-60">
              {["TechCorp", "Creative Co", "Digital Plus", "Smart Media"].map((brand) => (
                <div key={brand} className="text-sm font-medium text-muted-foreground">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
