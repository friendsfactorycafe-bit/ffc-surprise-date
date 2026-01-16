import { GraduationCap } from "lucide-react"

export function ServiceBanner() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white py-4 md:py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-center">
          <GraduationCap className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-bounce" />
          <h3 className="text-sm md:text-lg font-bold">
            Study Abroad Consulting Services in Vadodara
            <span className="block md:inline md:ml-2">
              <em className="text-xs md:text-base not-italic">— Free Consultation & Expert Guidance</em>
            </span>
          </h3>
          <GraduationCap className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-bounce" />
        </div>
      </div>
    </div>
  )
}
