"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechCorp",
    content: "ContentFlow has cut our content creation time in half. The AI understands our brand voice perfectly.",
    avatar: "👩‍💼",
  },
  {
    name: "James Rivera",
    role: "Content Creator",
    company: "Creative Co",
    content: "I used to spend 6 hours on blog posts. Now I can create 3 quality posts in the same time.",
    avatar: "👨‍🎨",
  },
  {
    name: "Lisa Wang",
    role: "Entrepreneur",
    company: "Digital Plus",
    content: "The best investment for my content strategy. The ROI is incredible and my engagement is up 200%.",
    avatar: "👩‍💼",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Loved by Content Creators</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their experience with ContentFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
