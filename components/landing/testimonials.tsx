import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { testimonialsData } from "@/lib/data"

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-verit-green/10 text-verit-green text-sm font-semibold rounded-full mb-6">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight mb-6">
            Trusted by Accounting & Tax Firms Nationwide
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover how we've helped firms transform their operations and achieve greater success
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <Card 
              key={testimonial.author} 
              className="group relative p-8 rounded-[20px] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0 relative z-10">
                {/* Quote decoration */}
                <div className="absolute -top-2 -left-2 text-6xl text-verit-green/10 font-serif leading-none">
                  "
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative">
                  <p className="italic">"{testimonial.quote}"</p>
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-verit-green to-[#0C8B4F] rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-verit-green to-[#0C8B4F] rounded-full group-hover:w-20 transition-all duration-500"></div>
              </CardContent>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-verit-green/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
            </Card>
          ))}
        </div>
        
        {/* Bottom trust indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-[20px] border border-gray-100 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">500+ Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-gray-700 font-medium">99.9% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
