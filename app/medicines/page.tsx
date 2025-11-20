import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MedicineCard } from "@/components/medicine-card"
import { medicines } from "@/lib/data"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Separate component for the search functionality to wrap in Suspense
function MedicineGrid({ searchParams }: { searchParams: { search?: string } }) {
  const query = searchParams?.search?.toLowerCase() || ""

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(query) ||
      medicine.disease.toLowerCase().includes(query) ||
      medicine.company.toLowerCase().includes(query),
  )

  return (
    <>
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No medicines found</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn't find any medicines matching "{searchParams?.search}". Try searching for a different name,
            disease, or company.
          </p>
          <Button asChild className="mt-6 bg-transparent" variant="outline">
            <a href="/medicines">Clear Search</a>
          </Button>
        </div>
      )}
    </>
  )
}

export default async function MedicinesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>
}) {
  const resolvedSearchParams = await searchParams

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Medicines Catalog</h1>
            <p className="text-muted-foreground mt-1">
              Browse our comprehensive list of medicines and healthcare products.
            </p>
          </div>

          {/* Mobile-friendly search form for this page specifically */}
          <form className="w-full md:w-auto flex gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                name="search"
                type="search"
                placeholder="Search catalog..."
                className="pl-9"
                defaultValue={resolvedSearchParams?.search}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-[350px] rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          }
        >
          <MedicineGrid searchParams={resolvedSearchParams} />
        </Suspense>
      </main>

      <SiteFooter />
    </div>
  )
}
