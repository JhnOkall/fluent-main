"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  const gradientTextStyle = {
    background: "linear-gradient(135deg, #46d9e1 0%, #eb4d1e 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.svg" alt="Fluent Logo" height={24} width={24} />
            <span
              className="hidden font-bold sm:inline-block font-headline"
              style={gradientTextStyle}
            >
              Fluent
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="mb-4 flex items-center"
              onClick={() => setIsSheetOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="Fluent Meet Logo"
                height={24}
                width={24}
                className="mr-2"
              />
              <span
                className="font-bold font-headline"
                style={gradientTextStyle}
              >
                Fluent
              </span>
            </Link>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsSheetOpen(false)}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2 md:hidden">
          <Image src="/logo.svg" alt="Fluent Logo" height={24} width={24} />
          <span className="font-bold font-headline" style={gradientTextStyle}>
            Fluent
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost">Sign In</Button>
          <Button
            style={{
              backgroundColor: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
            }}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
}
