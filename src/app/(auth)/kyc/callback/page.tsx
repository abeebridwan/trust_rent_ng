
"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function KycCallbackPage() {
  const searchParams = useSearchParams()
  const success = searchParams.get("success")
  const message = searchParams.get("message")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Verification Complete
          </CardTitle>
        </CardHeader>
        <CardContent>
          {success === "true" ? (
            <Alert variant="default">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                {message || "Your identity has been successfully verified."}
              </AlertDescription>
            </Alert>
          ) : (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {message || "An error occurred during the verification process."}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
