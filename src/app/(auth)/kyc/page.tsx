
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import Script from "next/script";

export default function KycPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const startVerification = async () => {
    setLoading(true);
    setError(null);
    setProgress(10);

    try {
      const response = await fetch("/api/smile-id", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to get Smile ID token");
      }

      const data = await response.json();
      const { token } = data;

      setProgress(50);

      const smileId = new (window as any).SmileID({
        partnerId: process.env.NEXT_PUBLIC_SMILE_ID_PARTNER_ID,
        token: token,
        environment: process.env.NEXT_PUBLIC_SMILE_ID_ENVIRONMENT === "sandbox" ? "sandbox" : "production",
      });

      const { success } = await smileId.capture();

      if (success) {
        setProgress(100);
        // The user will be redirected to the callback URL specified in the token generation
      } else {
        throw new Error("Verification failed");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://cdn.smileidentity.com/js/v2/smile-id-web.js"
        strategy="lazyOnload"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              Verify Your Identity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600 text-center">
                We need to verify your identity to keep our platform secure. Please have your
                NIN and a clear selfie ready.
              </p>
              <div id="smile_id_widget" className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Smile ID widget will be here</p>
              </div>
              {loading && <Progress value={progress} className="w-full" />}
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                onClick={startVerification}
                disabled={loading}
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                {loading ? "Verifying..." : "Start Verification"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
