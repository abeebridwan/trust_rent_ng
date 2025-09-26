
import { Suspense } from 'react'
import KycCallback from './KycCallback'

export default function KycCallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KycCallback />
    </Suspense>
  )
}
