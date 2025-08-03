import { whyChooseUsData } from "@/lib/data"
import { Server, ShieldCheck, Clock, Scaling } from "lucide-react"

const icons = {
  server: Server,
  shield: ShieldCheck,
  clock: Clock,
  scaling: Scaling,
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-verit-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-verit-green/10 text-verit-green text-sm font-semibold rounded-full mb-6 animate-pulse">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            Why Firms Choose VeritSpace
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover what sets us apart in the competitive landscape of cloud hosting solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChooseUsData.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <div 
                key={item.title} 
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative text-center p-8 bg-white rounded-[24px] border border-gray-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-in-up">
                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-verit-green/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  
                  {/* Icon container */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-verit-green via-green-500 to-[#0C8B4F] p-5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-8 w-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-verit-green to-[#0C8B4F] rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 group-hover:text-verit-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-verit-green to-[#0C8B4F] rounded-full group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-verit-green/10 to-blue-500/10 rounded-full border border-verit-green/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-verit-green rounded-full animate-ping"></div>
            <span className="text-verit-green font-medium">Trusted by 500+ firms nationwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
