import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const hospitals = [
  {
    id: 1,
    name: "Anukriti Hospital And ICU",
    location: "Tarsali, Vadodara",
    address: "Opp. Tarsali ITI, Tarsali Road, Vadodara, Gujarat 390009",
    type: "Multispeciality",
    rating: 4.5,
    phone: "+91 265 263 1234",
    timing: "24 Hours",
    features: ["ICU", "Pediatrics", "Cardiology", "Emergency"],
    isNearby: true,
  },
  {
    id: 2,
    name: "Nitya Hospital",
    location: "Tarsali Ring Road, Vadodara",
    address: "Danteshwar Tarsali Ring Road, Near Sushen Circle, Vadodara",
    type: "Orthopedic & Trauma Center",
    rating: 4.7,
    phone: "+91 98765 43210",
    timing: "24 Hours",
    features: ["Joint Replacement", "Trauma Center", "Arthroscopy", "X-Ray"],
    isNearby: true,
  },
  {
    id: 3,
    name: "Sunshine Global Hospital",
    location: "Manjalpur, Vadodara",
    address: "Near Shreyas School, Manjalpur, Vadodara, Gujarat 390011",
    type: "Multispeciality",
    rating: 4.6,
    phone: "+91 265 266 1111",
    timing: "24 Hours",
    features: ["Critical Care", "Surgery", "Dialysis", "Pathology"],
    isNearby: true,
  },
  {
    id: 4,
    name: "Sterling Hospital",
    location: "Race Course Circle, Vadodara",
    address: "Race Course Circle, West, Vadodara, Gujarat 390007",
    type: "Super Speciality",
    rating: 4.8,
    phone: "+91 265 614 4444",
    timing: "24 Hours",
    features: ["Oncology", "Neurology", "Cardiology", "Organ Transplant"],
    isNearby: false,
  },
  {
    id: 5,
    name: "Bhailal Amin General Hospital",
    location: "Gorwa, Vadodara",
    address: "Alembic Road, Gorwa, Vadodara, Gujarat 390003",
    type: "Multispeciality",
    rating: 4.7,
    phone: "+91 265 228 0300",
    timing: "24 Hours",
    features: ["Kidney Transplant", "Cancer Care", "Emergency", "Diagnostics"],
    isNearby: false,
  },
]

export default function HospitalsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <Button variant="ghost" asChild className="mb-4 pl-0 hover:pl-2 transition-all">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tight">Nearby & Famous Hospitals</h1>
            <p className="text-muted-foreground mt-2">Find the best healthcare facilities in Tarsali and Vadodara.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="flex flex-col hover:shadow-lg transition-shadow border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{hospital.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {hospital.location}
                    </CardDescription>
                  </div>
                  {hospital.isNearby && (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    >
                      Nearby
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium text-foreground">{hospital.rating}</span>
                  <span>• {hospital.type}</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{hospital.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground">{hospital.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground">{hospital.timing}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {hospital.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs font-normal">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
