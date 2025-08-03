"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/lib/data"
import { useState } from "react"

// Custom hook for smooth scrolling
const useSmoothScroll = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return handleSmoothScroll
}

export function Header() {
  const handleSmoothScroll = useSmoothScroll()

  const [open, setOpen] = useState(false)

  return (
    <header className="fixed md:absolute top-0 px-2 mx-auto md:px-[50px] inset-x-0 z-[1000] md:bg-transparent md:z-50 backdrop-blur-md md:bg-opacity-1 md:backdrop-blur-none bg-[#072530] md:bg-transparent md:z-0 backdrop-blur-md md:bg-opacity-1 md:backdrop-blur-none md:pt-[40px] pt-[20px]">
      <div className="flex items-center justify-between px-4 md:px-[50px] py-2 h-full z-50">
        <Link href="#" className="flex-shrink-0" prefetch={false}>
          <Image src="/loogo.svg" alt="VeritSpace Logo" width={50} height={50} className="w-[100px] h-[40px] sm:w-[156px] sm:h-[50px]" priority />
        </Link>
        
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8 bg-gradient-to-r from-[#ffff]/2 to-[#9999]/2 rounded-xl p-2 border border-[#ffff]/5">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="relative z-50 cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                <div className="flex items-center">
                  <span className="text-white hover:text-[#3cb55a] transition-colors px-2 py-1">
                    {link.label}
                  </span>
                  <ChevronDown className="h-5 w-5 text-white" />
                </div>
              </a>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="hidden lg:flex items-center bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] px-6 py-3 rounded-[14px] text-white hover:opacity-90 transition-opacity cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden ml-4 text-white z-50" onClick={() => setOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#072530] border-gray-800 text-white">
              <div className="grid gap-4 p-4">
                <Link href="#" className="flex items-center gap-2 mb-4" prefetch={false}>
                  <Image src="/verito-logo.png" alt="VeritSpace Logo" width={32} height={32} />
                  <span className="text-lg font-semibold">VeritSpace</span>
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-700 cursor-pointer"
                      onClick={(e) => {setOpen(false); handleSmoothScroll(e, link.href)}}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="grid gap-3 mt-4">
                  <a 
                    href="#contact"
                    className="block text-center text-white bg-gradient-to-r from-green-400 to-green-600 px-6 py-2 rounded-2xl text-lg hover:opacity-90 transition-opacity cursor-pointer"
                    onClick={(e) => {setOpen(false); handleSmoothScroll(e, '#contact')}}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
