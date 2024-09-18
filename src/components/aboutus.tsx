"use client";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; 
import React from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header Section with Background Image and Gradient */}
      <header className="w-full relative">
        {/* Background Image */}
        <img
          src="/xpage3.jpg" // Replace with your correct image path
          width={1920}
          height={1080}
          className="w-full h-[90vh] object-cover object-center"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-2">
          {/* Header Image */}
          
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Innovating at the intersection of art, code, and social impact
          </h1>

          {/* Call to Action Button */}
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 mt-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            prefetch={false}
          >
            Join Us
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </header>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg">
            At ARTIFEX, we are driven by a deep commitment to using technology, design, and creative thinking to drive positive social change. Our multidisciplinary team works at the forefront of innovation, exploring new frontiers in art, code, and responsible AI.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Diversity & Empowerment</h2>
          <p className="text-muted-foreground text-lg">
            Founded by a Latina of Indigenous heritage, ARTIFEX is a BIPOC, neurodiverse, LGBTQ, and female-led company. Diversity is the core of our identity, driving our passion for empowering underrepresented communities and those who face barriers to entry in the arts, entertainment, and technology. We believe that digital equity is power, and we strive to make it accessible to all.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: `url('/setapart.jpg')` }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center">
                  <MicroscopeIcon className="h-12 w-12 mb-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Research</h3>
                <p className="text-muted-foreground text-white">
                  Our team of researchers, domain experts, and data scientists are at the forefront of emerging technologies, constantly exploring new frontiers to push the boundaries of what's possible.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center">
                  <BriefcaseIcon className="h-12 w-12 mb-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Strategy as a Service</h3>
                <p className="text-muted-foreground text-white">
                  We work closely with our clients to develop tailored strategies that leverage the power of technology, design, and creative thinking to achieve their goals.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center">
                  <HeartIcon className="h-12 w-12 mb-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Social Impact</h3>
                <p className="text-muted-foreground text-white">
                  Driving positive social change is at the heart of everything we do. We're committed to using our expertise to create solutions that make a real difference in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">TUESDAY</h3>
              <p className="text-muted-foreground mb-4">Founder, Director of Research, Cloud Architect</p>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">George Washington University, Google Jumpstart Cohort</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Research, Creative Direction, Strategic Partnerships, Responsible AI Practices</span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">Dr. Julia Reodica</h3>
              <p className="text-muted-foreground mb-4">Director of Medical Research</p>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">OHSU Masters of Nursing</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">HIPPA Compliance, Medical Domain Expertise</span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">Lena Weisbrot</h3>
              <p className="text-muted-foreground mb-4">Director of Higher Education R&D</p>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">UCLA Arts and Design</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Video game and narrative design, Educational Domain Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the ARTIFEX Team</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Interested in partnering with us? We're always looking for talented individuals who share our passion for innovation and social impact.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            prefetch={false}
          >
            Contact Us
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// ArrowRightIcon component for the button icon
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MicroscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}