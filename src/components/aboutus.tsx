"use client";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative flex items-center justify-center h-[100dvh] bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 text-center text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Innovating at the intersection of art, code, and social impact
          </h1>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            prefetch={false}
          >
            Join Us
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg">
            At ARTIFEX, we are driven by a deep commitment to using technology, design, and creative thinking to drive positive social change. Our multidisciplinary team works at the forefront of innovation, exploring new frontiers in art, code, and responsible AI.
          </p>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <MicroscopeIcon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-muted-foreground">
                Our team of researchers and scientists are at the forefront of emerging technologies, constantly exploring new frontiers to push the boundaries of what&apos;s possible.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <BriefcaseIcon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                We work closely with our clients to develop tailored strategies that leverage the power of technology, design, and creative thinking to achieve their goals.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <HeartIcon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Social Impact</h3>
              <p className="text-muted-foreground">
                Driving positive social change is at the heart of everything we do. We&apos;re committed to using our expertise to create solutions that make a real difference in the world.
              </p>
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
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-muted-foreground mb-4">Co-Founder, CEO</p>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Stanford University, MIT</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Responsible AI Practices</span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
              <p className="text-muted-foreground mb-4">Co-Founder, CTO</p>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">MIT, Carnegie Mellon</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Responsible AI Practices</span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-muted-foreground mb-4">Head of Research</p>
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Harvard, UC Berkeley</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Responsible AI Practices</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the ARTIFEX Team</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Interested in working with us? We&apos;re always looking for talented individuals who share our passion for innovation and social impact.
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
