export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            <span className="text-primary">$</span> echo &quot;© 2025 Shivang Shukla&quot;
          </p>
          <p className="text-xs">
            Built with <span className="text-accent">Next.js</span> & <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
