import { socialConnections } from "@/data/social"

export default function Footer() {
  return (
    <footer className="bg-dark-navy py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-4">
            {socialConnections
              .filter((social) => social.active)
              .map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-foreground hover:text-light-purple transition-colors"
                  aria-label={social.title}
                >
                  {social.icon}
                </a>
              ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Razwan Niam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}