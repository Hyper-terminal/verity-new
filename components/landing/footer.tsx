import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#072530] text-white border-t border-white/10 px-10">
      <div className="custom-container pt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-4 lg:pl-0 pl-7">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <Image src="/loogo.svg" alt="Verito Logo" width={160} height={40} className="mb-4 max-w-[160px]" />
              <p className="text-gray-400 text-[14px]">
                Secure Cloud Solutions for <br /> Tax &amp; Accounting Professionals
              </p>
            </div>
            <p className="text-white text-[16px]">
              3524 Silverside rd. Suite 35B, Wilmington, Delaware 19810
            </p>
          </div>
          
          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Services</div>
            <ul className="space-y-2">
              <li>
                <Link href="/veritspace" className="text-gray-400 hover:text-white text-sm">
                  Dedicated Private Server Hosting
                </Link>
              </li>
              <li>
                <Link href="/veritguard" className="text-gray-400 hover:text-white text-sm">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/veritcomplete" className="text-gray-400 hover:text-white text-sm">
                  VeritComplete
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Pricing</div>
            <ul className="space-y-2">
              <li>
                <Link href="/veritspace-pricing" className="text-gray-400 hover:text-white text-sm">
                  VeritSpace Pricing
                </Link>
              </li>
              <li>
                <Link href="/veritguard-pricing" className="text-gray-400 hover:text-white text-sm">
                  VeritGuard Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <div className="font-medium mb-4 text-[16px]">Get Started</div>
            <ul className="space-y-2">
              <li>
                <Link href="/managed-hosting-trial" className="text-gray-400 hover:text-white text-sm">
                  Free Hosting trial
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm">
                  Schedule A Demo
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <div className="mb-6">
              <div className="font-medium mb-4 text-[16px]">Company</div>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-data-centers" className="text-gray-400 hover:text-white text-sm">
                    Our Datacenters
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-condition" className="text-gray-400 hover:text-white text-sm">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-1">
            <div>
              <div className="font-medium mb-4 text-[16px]">Resources</div>
              <ul className="space-y-2">
                <li>
                  <Link href="/faqs" className="text-gray-400 hover:text-white text-sm">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-gray-400 hover:text-white text-sm">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-8 pt-[20px] pb-[20px]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center lg:items-start gap-3">
              <div className="flex items-center">
                <Phone className="w-[18px] h-[18px] mr-2" />
                <Link href="tel:18555837486" className="text-white hover:text-gray-300">
                  1-855-583-7486
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-[18px] h-[18px] mr-2" />
                <Link href="mailto:sales@verito.com" className="text-white hover:text-gray-300">
                  sales@verito.com
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-center items-start">
              <div className="text-center lg:text-left lg:flex-col">
                <p className="font-medium">&quot; EXCELLENT &quot;</p>
                <div className="flex justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-[14px] text-gray-400">Based on 406 user reviews</div>
               
              </div>
            </div>
          
            
          
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#fff]/10 py-6">
        <div className="custom-container">
          <p className="text-gray-500 text-sm mb-4 lg:mb-0 text-center">
            © 2025 Verito Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
