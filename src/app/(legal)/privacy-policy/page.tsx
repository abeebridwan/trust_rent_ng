import Link from "next/link";
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="space-y-8">
        <h1 className="font-semibold text-base md:text-2xl">Effective Date: Aug 15, 2025</h1>
        <p className="font-semibold text-base md:text-lg">Welcome to Vetarent. Please read these Terms & Conditions carefully before using our platform. By accessing or using our website/app, you agree to be bound by these terms.</p>
        
        <div>
          <h2 className="font-semibold text-base md:text-lg">1. Information Collection and Use</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">2. User Accounts</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <ul className="text-sm md:text-lg list-disc list-inside ml-4">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-base md:text-lg">3. Property Listings</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">4. Information Collection and Use</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">5. Governing Law</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 


        <div>
          <h2 className="font-semibold text-base md:text-lg">6. Payments & Fees</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">6. Lease Agreements</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">7. Safety & Trust</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">8. Termination of Accounts</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 

        <div>
          <h2 className="font-semibold text-base md:text-lg">9. Limitation of Liability</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div> 


        <div>
          <h2 className="font-semibold text-base md:text-lg">10. Contact Us</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            If you have any questions about these Terms & Conditions, please contact us:</p>
        </div> 

        <div>
          <Link 
            href="mailto:support@vetarent.ng" 
            className="flex items-center text-base font-semibold md:py-2 w-fit text-base md:text-xl"
          >
            <Mail className="h-4 md:h-6 h-4 md:w-6 text-gray-700"/>
            <span className="ml-2">
              Email: support@vetarent.ng
            </span>
          </Link>
        </div>

        <div>
          <Link 
            href="+91-XXXXXXXXXX" 
            className="flex items-center text-base font-semibold md:py-2 w-fit text-base md:text-xl"
          >
            <Phone className="h-4 md:h-6 h-4 md:w-6 text-gray-700"/>
            <span className="ml-2">
              Phone: +91-XXXXXXXXXX
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}