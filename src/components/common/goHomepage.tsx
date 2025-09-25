"use client"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation";

export default function GohomePage() {
  const router = useRouter();

  const goHome = async () => {
    router.push('/')
  }

  return (
    <Button
      onClick={goHome}
      className="mt-6 px-4 py-2 bg-vetarent-blue text-white rounded-lg hover:bg-vetarent-blue/20"
    >
      go home
    </Button>
  )
}
