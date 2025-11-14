'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-ps-gray">
              <span className="text-3xl">PS</span>
              <div className="text-xs uppercase tracking-wider mt-1">
                <div>Uteservering</div>
                <div>Skyltprojekt</div>
                <div>Solskydd</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-ps-gray hover:text-ps-yellow transition-colors">
              Hem
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-ps-gray hover:text-ps-yellow transition-colors">
                Tjänster ▾
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                  <Link
                    href="/tjanster/uteservering"
                    className="block px-4 py-2 text-ps-gray hover:bg-ps-yellow/10 transition-colors"
                  >
                    Uteserveringsprojekt
                  </Link>
                  <Link
                    href="/tjanster/skyltprojekt"
                    className="block px-4 py-2 text-ps-gray hover:bg-ps-yellow/10 transition-colors"
                  >
                    Skyltprojekt & skyltprogram
                  </Link>
                  <Link
                    href="/tjanster/solskydd"
                    className="block px-4 py-2 text-ps-gray hover:bg-ps-yellow/10 transition-colors"
                  >
                    Solskydd
                  </Link>
                  <Link
                    href="/sa-jobbar-vi"
                    className="block px-4 py-2 text-ps-gray hover:bg-ps-yellow/10 transition-colors border-t mt-2 pt-2"
                  >
                    Så jobbar vi
                  </Link>
                </div>
              )}
            </div>

            <Link href="/case" className="text-ps-gray hover:text-ps-yellow transition-colors">
              Case
            </Link>
            <Link href="/om-oss" className="text-ps-gray hover:text-ps-yellow transition-colors">
              Om oss
            </Link>
            <Link href="/kunskap" className="text-ps-gray hover:text-ps-yellow transition-colors">
              Kunskap
            </Link>
            <Link href="/kontakt" className="btn-primary">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-ps-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-ps-gray hover:text-ps-yellow transition-colors">
                Hem
              </Link>
              <div className="text-ps-gray font-medium">Tjänster</div>
              <Link href="/tjanster/uteservering" className="text-ps-gray hover:text-ps-yellow transition-colors pl-4">
                Uteserveringsprojekt
              </Link>
              <Link href="/tjanster/skyltprojekt" className="text-ps-gray hover:text-ps-yellow transition-colors pl-4">
                Skyltprojekt & skyltprogram
              </Link>
              <Link href="/tjanster/solskydd" className="text-ps-gray hover:text-ps-yellow transition-colors pl-4">
                Solskydd
              </Link>
              <Link href="/sa-jobbar-vi" className="text-ps-gray hover:text-ps-yellow transition-colors pl-4">
                Så jobbar vi
              </Link>
              <Link href="/case" className="text-ps-gray hover:text-ps-yellow transition-colors">
                Case
              </Link>
              <Link href="/om-oss" className="text-ps-gray hover:text-ps-yellow transition-colors">
                Om oss
              </Link>
              <Link href="/kunskap" className="text-ps-gray hover:text-ps-yellow transition-colors">
                Kunskap
              </Link>
              <Link href="/kontakt" className="btn-primary inline-block text-center">
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
