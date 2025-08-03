import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { pricingPlans } from "@/lib/data"

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight">Choose Your Plan</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">Flexible pricing options to fit your firm's needs.</p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col rounded-[20px] bg-white border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.featured ? "ring-2 ring-verit-green ring-opacity-50 md:scale-105 border-verit-green" : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-verit-green to-[#0C8B4F] text-white text-sm font-bold text-center py-2 rounded-t-[20px]">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="p-6 lg:p-8">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">{plan.name}</CardTitle>
                <p className="text-gray-600 mt-2 min-h-[3rem]">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-6 lg:p-8 pt-0 flex-grow">
                <div className="mb-8">
                  <span className="text-4xl lg:text-5xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500">/user/month</span>
                </div>
                
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-verit-green flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <div className="p-6 lg:p-8 pt-0">
                <Button
                  className={`w-full py-3 px-6 rounded-[14px] text-base font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-verit-green to-[#0C8B4F] text-white hover:opacity-90"
                      : "bg-white text-verit-green border-2 border-verit-green hover:bg-green-50"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-[20px] p-6 lg:p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg">
              <span className="text-verit-green font-semibold">Professional onboarding and implementation:</span> $200 setup fee per server ($500 for UltraTax)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
