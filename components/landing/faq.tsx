import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/lib/data"

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-verit-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div> */}
      
      <div className="relative container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-verit-green/10 text-verit-green text-sm font-semibold rounded-full mb-6">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our cloud hosting solutions
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`} 
              className="group bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-lg lg:text-xl font-semibold text-left hover:no-underline px-8 py-6 group-hover:text-verit-green transition-colors duration-300 [&[data-state=open]]:text-verit-green">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-verit-green to-[#0C8B4F] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <span className="text-left">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-gray-600 px-8 pb-6 leading-relaxed">
                <div className="pl-12">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-verit-green/5 to-blue-500/5 rounded-[20px] border border-verit-green/20 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Still have questions?</h3>
              <p className="text-gray-600">Our support team is here to help you 24/7</p>
            </div>
            <button className="bg-gradient-to-r from-verit-green to-[#0C8B4F] text-white px-6 py-3 rounded-[14px] font-semibold hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
