import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Building2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Medicine } from "@/lib/data"

interface MedicineCardProps {
  medicine: Medicine
}

export function MedicineCard({ medicine }: MedicineCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50">
      <div className="relative h-48 w-full bg-secondary/20 dark:bg-white p-4 flex items-center justify-center group-hover:bg-secondary/30 dark:group-hover:bg-white/90 transition-colors">
        <Image
          src={medicine.image || "/placeholder.svg"}
          alt={medicine.name}
          width={200}
          height={200}
          className="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
        />
        <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">₹{medicine.price.toFixed(2)}</Badge>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {medicine.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Building2 className="h-3 w-3" />
              <span className="line-clamp-1">{medicine.company}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <Badge
          variant="outline"
          className="mb-3 text-xs font-normal bg-secondary/50 border-secondary-foreground/10 text-secondary-foreground"
        >
          {medicine.disease}
        </Badge>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{medicine.description}</p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>Exp: {medicine.expiryDate}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full group-hover:bg-primary/90">
          <Link href={`/medicines/${medicine.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
