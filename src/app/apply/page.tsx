'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function ApplyPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="py-12 max-w-2xl mx-auto">
      {/* Menu Toggle Button */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">Work With Us</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
        >
          {menuOpen ? '✕ Close Menu' : '☰ Menu'}
        </button>
      </div>

      {/* Application Steps */}
      <div className={`bg-white rounded-lg shadow-md p-8 space-y-6 ${menuOpen ? 'mb-8' : ''}`}>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
          <p className="text-gray-600 mb-4">
            To apply for work opportunities with BizConnect, please complete the following steps:
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Create an Account</h3>
              <p className="text-gray-600 text-sm">
                Start by registering your professional profile with your details and experience
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Add Your Details & Skills</h3>
              <p className="text-gray-600 text-sm">
                Complete your profile with your job title, bio, and list your key skills
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Upload Your Resume</h3>
              <p className="text-gray-600 text-sm">
                Add your resume and detailed work history to help us understand your expertise
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Await Approval</h3>
              <p className="text-gray-600 text-sm">
                Our team will review your application and contact you within 48 hours
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              5
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Start Working</h3>
              <p className="text-gray-600 text-sm">
                Once approved, you&apos;ll appear in our professional directory and get work opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-primary p-4">
          <p className="text-primary font-semibold">Ready to apply?</p>
          <p className="text-gray-600 text-sm mt-1">
            <a href="/register" className="text-primary hover:text-secondary font-semibold">
              Start your registration here →
            </a>
          </p>
        </div>
      </div>

      {/* Collapsible Menu - Only visible on mobile when opened */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-lg p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Navigation</h3>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-4 py-3 text-center bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
            >
              ← Back to Home
            </Link>
            <Link
              href="/directory"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-4 py-3 text-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Browse Directory
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-4 py-3 text-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Dashboard
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full px-4 py-3 text-gray-700 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-white rounded-lg shadow-md p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
        <Link
          href="/"
          className="block px-4 py-2 text-center bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
        >
          ← Back to Home
        </Link>
        <Link
          href="/directory"
          className="block px-4 py-2 text-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Browse Directory
        </Link>
        <Link
          href="/dashboard"
          className="block px-4 py-2 text-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Dashboard
        </Link>
      </div>
    </div>
  )
}

