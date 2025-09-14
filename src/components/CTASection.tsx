import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
      <div className="w-full bg-background relative flex flex-col items-center justify-center py-8 pb-4 space-y-5">
          <div className="space-y-3 w-full flex items-center justify-center">
            <Button className="w-[90%] md:w-1/3 h-12 bg-gradient-to-b from-[#2e2cbf] to-[#2e2cbf] text-white font-semibold text-base rounded-none shadow-[inset_0_2px_6px_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.25)] hover:from-vetarent-orange hover:to-vetarent-orange/90">
              Become a Verified Landlord
            </Button>
          </div>
          <div className="text-center md:text-right flex">
            <p className="font-medium mb-2">
              Already have an account?
            </p>
            <span className="text-vetarent-orange hover:text-vetarent-blue font-semibold cursor-pointer hover:underline text-base ml-2">
              Login
            </span>
          </div>
      </div> 
  )
}

export default CTASection;