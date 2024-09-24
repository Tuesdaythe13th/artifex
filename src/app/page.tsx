"use client";
import Link from "next/link";
import Image from 'next/image'; 

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <header className="w-full relative">
        <Image
          src="/xpage4.jpg"
          width={1920}
          height={1080}
          alt="Artifex Background"
          className="w-full h-[90vh] object-cover object-center"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
          {/* Add logo above the text */}
          <img
            src="/artifexlogo3.png"  // Path to your logo
            alt="Artifex Logo"
            className="w-auto h-41 mb-1"  // Adjust width/height as needed and add margin
          />
        
          <p className="mt-1 max-w-4xl text-xl text-muted-foreground md:text-4xl">
            Pioneering the future of design and artificial intelligence with innovative research and cutting-edge technology.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-20 px-4 md:px-6 lg:px-8">
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Add a section for the categories */}
          <section>
            <div>
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-4 text-muted-foreground">
                Learn more about our mission, values, and the team behind Artifex.
              </p>
              <Link href="/aboutus" className="mt-4 inline-flex items-center gap-2 text-primary" prefetch={false}>
                <span>Read More</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
          <section>
            <div>
              <h2 className="text-3xl font-bold">Current Projects</h2>
              <p>ARTIFEX LABS</p>
              <Link href="#" className="mt-4 inline-flex items-center gap-2 text-primary" prefetch={false}>
                <span>Learn More</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
          <section>
            <div>
              <h2 className="text-3xl font-bold">Previous Work</h2>
              <p className="mt-4 text-muted-foreground">
                Check out our past projects and achievements in the field of AI.
              </p>
              <Link href="#" className="mt-4 inline-flex items-center gap-2 text-primary" prefetch={false}>
                <span>Explore</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
          <section>
            <div>
              <h2 className="text-3xl font-bold">Research</h2>
              <p className="mt-4 text-muted-foreground">
                Dive into our latest research papers and scientific publications.
              </p>
              <Link href="#" className="mt-4 inline-flex items-center gap-2 text-primary" prefetch={false}>
                <span>Read More</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
          <section>
            <div>
              <h2 className="text-3xl font-bold">Educational</h2>
              <p className="mt-4 text-muted-foreground">
                Explore our educational resources and learn about the world of AI.
              </p>
              <Link href="#" className="mt-4 inline-flex items-center gap-2 text-primary" prefetch={false}>
                <span>Discover</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
          <section>
            <div>
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-4 text-muted-foreground">Get in touch with our team to learn more about Artifex.</p>
              <Link href="#" className="mt-4 inline-flex items-center gap-2 text-primary" prefetch={false}>
                <span>Contact Us</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </section>
        </section>
      </main>
      <footer className="bg-muted py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <p>© 2024 Artifex. All rights reserved.</p>
        </div>
      </footer>
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