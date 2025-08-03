import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users } from "lucide-react"

export function Cta() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-verit-green rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-verit-green/20 text-verit-green text-sm font-semibold rounded-full border border-verit-green/30 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            Ready to Transform?
          </span>
        </div>
        
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Ready for <span className="bg-gradient-to-r from-verit-green to-green-400 bg-clip-text text-transparent">Peak Performance</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          Stop letting slow software hold you back. Join thousands of high-performing firms who trust VeritSpace to
          accelerate their workflow.
        </p>
        
        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-verit-green to-[#0C8B4F] rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Firms Trust Us</div>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">99.999%</div>
              <div className="text-gray-400 text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="group bg-gradient-to-r from-verit-green to-[#0C8B4F] hover:opacity-90 px-8 py-4 rounded-[16px] text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Choose Your Plan
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-[16px] text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
