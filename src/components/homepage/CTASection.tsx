import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
      <div className="w-full bg-background relative flex flex-col items-center justify-center py-8 pb-4 space-y-5">
          <div className="space-y-3 w-full flex items-center justify-center">
          <Button
            className="w-[90%] h-14 md:w-1/3 bg-[#0D47A1] text-white font-semibold text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200">
              Become a Verified Landlord
          </Button>
          </div>
          <div className="text-center md:text-right flex flex-wrap">
            <p className="font-medium mb-2 text-sm md:text-xl">
              Already have an account?
            </p>
            <span className="text-vetarent-orange hover:text-vetarent-blue font-semibold cursor-pointer hover:underline text-sm md:text-xl ml-2">
              Login
            </span>
          </div>
      </div> 
  )
}

export default CTASection;