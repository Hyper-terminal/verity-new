'use client'
import { featuresData, pricingPlans } from "@/lib/data"
import { Check, X } from "lucide-react"
import { useRef, useEffect } from "react"

export function FeaturesTable() {
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const ctaContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tableContainer = tableContainerRef.current
    const ctaContainer = ctaContainerRef.current

    if (!tableContainer || !ctaContainer) return

    const handleTableScroll = () => {
      ctaContainer.scrollLeft = tableContainer.scrollLeft
    }

    const handleCtaScroll = () => {
      tableContainer.scrollLeft = ctaContainer.scrollLeft
    }

    tableContainer.addEventListener('scroll', handleTableScroll)
    ctaContainer.addEventListener('scroll', handleCtaScroll)

    return () => {
      tableContainer.removeEventListener('scroll', handleTableScroll)
      ctaContainer.removeEventListener('scroll', handleCtaScroll)
    }
  }, [])
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-gray-900 text-center mb-12 leading-tight">Compare Plans</h2>
        <div ref={tableContainerRef} className="overflow-x-auto bg-white rounded-[20px] shadow-xl border border-gray-100">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                <th className="sticky left-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-base font-bold text-white z-10 border-r border-gray-700 w-1/4 rounded-tl-[20px]">
                  Features
                </th>
                {pricingPlans.map((plan, index) => (
                  <th
                    key={plan.name}
                    className={`p-6 text-base font-bold text-center border-r border-gray-700 last:border-r-0 w-1/4 ${
                      plan.featured ? "bg-gradient-to-r from-verit-green to-[#0C8B4F] text-white" : "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
                    } ${index === pricingPlans.length - 1 ? "rounded-tr-[20px]" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span>{plan.name}</span>
                      {plan.featured && (
                        <span className="bg-white text-verit-green text-xs font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresData.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  }`}
                >
                  <td
                    className={`sticky left-0 p-6 font-semibold text-gray-900 z-10 border-r border-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    }`}
                  >
                    {feature.name}
                  </td>
                  <td className="p-6 text-center text-gray-700 font-medium border-r border-gray-100">
                    <div className="flex items-center justify-center gap-2">
                      {feature.core === "Add-on Available" ? (
                        <>
                          <X className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-500 text-sm">{feature.core}</span>
                        </>
                      ) : (
                        <>
                          <Check className="h-5 w-5 text-verit-green" />
                          <span>{feature.core}</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center text-gray-700 font-medium border-r border-gray-100 bg-green-50/30">
                    <div className="flex items-center justify-center gap-2">
                      {feature.pro === "Add-on Available" ? (
                        <>
                          <X className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-500 text-sm">{feature.pro}</span>
                        </>
                      ) : (
                        <>
                          <Check className="h-5 w-5 text-verit-green" />
                          <span className="font-semibold text-gray-900">{feature.pro}</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center text-gray-700 font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5 text-verit-green" />
                      <span>{feature.complete}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call-to-action buttons aligned with table columns */}
        <div ref={ctaContainerRef} className="mt-8 overflow-x-auto">
          <div className="min-w-[700px] flex">
            {/* Empty space for Features column */}
            <div className="w-1/4"></div>
            {/* Buttons aligned with plan columns */}
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="w-1/4 px-4 text-center">
                <button
                  className={`w-full py-3 px-6 rounded-[14px] font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-verit-green to-[#0C8B4F] text-white hover:opacity-90 shadow-lg"
                      : "bg-white text-verit-green border-2 border-verit-green hover:bg-green-50"
                  }`}
                >
                  Choose {plan.name}
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  Starting at <span className="font-bold text-gray-900">${plan.price}/user/mo</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
