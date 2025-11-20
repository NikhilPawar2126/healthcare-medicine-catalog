import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Building2, AlertCircle, CheckCircle2, Thermometer, Beaker } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { medicines } from "@/lib/data"

export async function generateStaticParams() {
  return medicines.map((medicine) => ({
    id: medicine.id,
  }))
}

export default async function MedicineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const medicine = medicines.find((m) => m.id === id)

  if (!medicine) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
          <Link href="/medicines">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Medicines
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Image & Key Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Changed background to white in dark mode for better image visibility */}
            <div className="bg-secondary/20 dark:bg-white rounded-3xl p-8 flex items-center justify-center border">
              <Image
                src={medicine.image || "/placeholder.svg"}
                alt={medicine.name}
                width={400}
                height={400}
                className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                priority
              />
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="text-muted-foreground">Price</span>
                  <span className="text-2xl font-bold text-primary">₹{medicine.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="text-muted-foreground">Expiry Date</span>
                  <span className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {medicine.expiryDate}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Manufacturer</span>
                  <span className="font-medium flex items-center gap-2 text-right">
                    <Building2 className="h-4 w-4" />
                    {medicine.company}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="text-sm px-3 py-1">{medicine.disease}</Badge>
                <span className="text-muted-foreground text-sm">ID: #{medicine.id}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">{medicine.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{medicine.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ingredients */}
              <div className="bg-background border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Ingredients</h3>
                </div>
                <ul className="space-y-2">
                  {medicine.details.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="block w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Side Effects */}
              <div className="bg-background border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Side Effects</h3>
                </div>
                <ul className="space-y-2">
                  {medicine.details.sideEffects.map((effect, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="block w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dosage */}
              <div className="bg-background border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Dosage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{medicine.details.dosage}</p>
              </div>

              {/* Storage */}
              <div className="bg-background border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg">
                    <Thermometer className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Storage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{medicine.details.storage}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
