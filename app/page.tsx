'use client'

import { useEffect, useState } from 'react'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Hide loader after animations complete
    const loaderElement = document.querySelector('.loader')
    if (loaderElement) {
      setTimeout(() => {
        loaderElement.classList.add('hidden')
      }, 2500)
    }

    // Intersection observer for timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    timelineItems.forEach((item) => observer.observe(item))

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle')
    const navLinks = document.querySelector('.nav-links')

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active')
      })

      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active')
        })
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Loading Screen */}
      <div className="loader">
        <div className="loader-content">
          <div className="loader-text">
            <span className="meet">meet </span>
            <span className="ganna">ganna</span>
          </div>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>

      <Portfolio />
    </>
  )
}
