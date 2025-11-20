import Link from "next/link"
import { ArrowRight, Phone, MapPin, Activity, Droplets, Apple, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MedicineCard } from "@/components/medicine-card"
import { medicines, healthTips, emergencyContacts } from "@/lib/data"

export default function Home() {
  // Show first 4 medicines for the featured section
  const featuredMedicines = medicines.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary/30 to-background pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/medical-pattern.png')] opacity-5 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                Trusted Healthcare Partner
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Find Trusted Medicines with <span className="text-primary">Clear Details</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access a comprehensive catalog of medicines, health tips, and emergency contacts all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="h-12 px-8 text-base" asChild>
                  <Link href="/medicines">
                    Browse Medicines
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent" asChild>
                  <Link href="#emergency">Emergency Contacts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Medicines */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Popular Medicines</h2>
              <p className="text-muted-foreground">Commonly searched medicines and treatments.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/medicines">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/medicines">View All Medicines</Link>
            </Button>
          </div>
        </section>

        {/* Health Tips Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Health & Wellness Tips</h2>
              <p className="text-muted-foreground">Simple habits for a healthier lifestyle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthTips.map((tip, index) => {
                const Icon =
                  {
                    Droplets,
                    Apple,
                    Activity,
                    Moon,
                  }[tip.icon] || Activity

                return (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm">{tip.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Emergency & Hospitals Section */}
        <section id="emergency" className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Emergency Numbers */}
            <div className="bg-destructive/5 border-destructive/20 border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/10 rounded-full text-destructive">
                  <Phone className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-destructive">Emergency Helpline</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-background p-4 rounded-xl border flex justify-between items-center">
                    <span className="font-medium">{contact.label}</span>
                    <span className="text-xl font-bold text-destructive">{contact.number}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                * These numbers are for immediate emergency assistance. Please verify local emergency numbers for your
                specific region.
              </p>
            </div>

            {/* Nearest Hospitals */}
            <div className="bg-secondary/10 border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Nearest Hospitals</h2>
              </div>

              <div className="space-y-4">
                {[
                  { name: "City General Hospital", dist: "1.2 km", open: "24/7" },
                  { name: "Sunrise Medical Center", dist: "2.5 km", open: "24/7" },
                  { name: "Heart & Lung Institute", dist: "3.8 km", open: "8 AM - 10 PM" },
                  { name: "Community Health Clinic", dist: "0.8 km", open: "9 AM - 6 PM" },
                ].map((hospital, index) => (
                  <div key={index} className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0">
                    <div>
                      <h4 className="font-semibold">{hospital.name}</h4>
                      <p className="text-sm text-muted-foreground">{hospital.open}</p>
                    </div>
                    <div className="text-sm font-medium bg-background px-3 py-1 rounded-full border">
                      {hospital.dist}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
