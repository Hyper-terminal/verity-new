import { Card } from "@/components/ui/card"
import { Cpu, Database, AppWindow } from "lucide-react"
import { addOnsData } from "@/lib/data"

const icons = {
  ram: Cpu,
  storage: Database,
  apps: AppWindow,
}

const AddOnCard = ({ addon }: { addon: (typeof addOnsData)[0] }) => {
  const Icon = icons[addon.id as keyof typeof icons]
  return (
    <Card className="bg-white p-8 rounded-[20px] text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="inline-block bg-gradient-to-r from-verit-green to-[#0C8B4F] p-4 rounded-full mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{addon.title}</h3>
      <p className="text-gray-600 text-base lg:text-lg font-medium">{addon.price}</p>
    </Card>
  )
}

export function AddOns() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-gray-900 leading-tight mb-6">Add-Ons</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Enhance your VeritSpace experience with these flexible add-ons. Add-on fees cover the cost of dedicated
            hardware resources.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {addOnsData.map((addon) => (
            <AddOnCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  )
}
