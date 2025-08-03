
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { heroData } from "@/lib/data"
import { BarChart, Cloud, Headset, ShieldCheck } from "lucide-react"

const icons = {
  cloud: Cloud,
  headset: Headset,
  shield: ShieldCheck,
  chart: BarChart,
}

export function Hero() {

  return (
    <section className="bg-[radial-gradient(circle_at_center,_#103C36_0%,_#072530_60%)] h-[830px] sm:h-[930px] border box-border rounded-none md:rounded-[20px] relative lg:m-[20px] m-0">
      {/* Background Image */}
      <img
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/box.svg"
      />

      <div className="relative z-10">
        {/* Hero Content */}
        <div className="w-full text-white pt-28 sm:pt-16 md:pt-20 lg:pt-[100px]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-0 sm:py-12 md:py-16 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  {heroData.title}
                </h1>
                <div className="mt-4 text-lg md:text-xl text-gray-300">
                  {heroData.subtitle.text}
                  <span className="text-verit-green font-semibold">{heroData.subtitle.highlight}</span>
                  {heroData.subtitle.extra}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-gradient-to-r from-verit-green to-[#0C8B4F] hover:opacity-90 px-8 py-3 rounded-[14px] text-base font-semibold">
                    View Plans
                  </Button>
                  <Button variant="ghost" className="text-white border-gray-500 hover:bg-gray-800 hover:text-white bg-transparent px-8 py-3 text-base">
                    Start Free Trial
                  </Button>
                </div>
              </div>

              {/* Right Column - Preview Card */}
              <div className="hidden lg:flex justify-center">
                <Card className="bg-white text-gray-900 p-6 rounded-2xl w-full max-w-sm shadow-2xl transform -rotate-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{heroData.previewCard.planName}</h3>
                    <div className="bg-green-100 text-verit-green text-xs font-bold px-3 py-1 rounded-full">
                      {heroData.previewCard.badge}
                    </div>
                  </div>
                  <div className="my-6 text-center">
                    <span className="text-5xl font-extrabold">${heroData.previewCard.price}</span>
                    <span className="text-gray-500">/user/month</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {heroData.previewCard.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-verit-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r w-full my-4 from-verit-green to-[#0C8B4F] hover:opacity-90 px-8 py-3 rounded-[14px] text-base font-semibold">
                    Get Started
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-[18px] space-y-4 sm:space-y-6 lg:space-y-14">
          <div className="flex justify-between gap-4 sm:gap-6">
            {heroData.benefits.slice(0, 2).map((benefit) => {
              const Icon = icons[benefit.icon as keyof typeof icons]
              return (
                <div key={benefit.text} className="flex flex-col items-center justify-center px-3 lg:px-[42px] py-3 sm:py-4 lg:py-[24px] rounded-[14px] bg-white/10 border border-white/10 text-white transition-all duration-300 backdrop-blur-md w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-auto z-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-white" />
                  <div className="text-center text-xs sm:text-sm font-medium whitespace-normal sm:whitespace-nowrap">
                    {benefit.text}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-between sm:justify-center gap-4 md:gap-8 lg:gap-24 xl:gap-[220px]">
            {heroData.benefits.slice(2, 4).map((benefit) => {
              const Icon = icons[benefit.icon as keyof typeof icons]
              return (
                <div key={benefit.text} className="flex flex-col items-center justify-center px-3 lg:px-[42px] py-3 sm:py-4 lg:py-[24px] rounded-[14px] bg-white/10 border border-white/10 text-white transition-all duration-300 backdrop-blur-md w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-auto z-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-white" />
                  <div className="text-center text-xs sm:text-sm font-medium whitespace-normal sm:whitespace-nowrap">
                    {benefit.text}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Globe Image Placeholder */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-1 w-full overflow-hidden flex justify-center">
          <div className="max-w-[150%] lg:w-[880px] xl:w-[1050px] h-[340px] bg-gradient-to-t from-transparent to-white/5 rounded-full opacity-20"></div>
        </div>


      </div>
    </section>
  )
}
