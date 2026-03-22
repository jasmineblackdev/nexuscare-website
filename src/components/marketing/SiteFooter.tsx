export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="nc-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2 text-lg font-bold text-foreground mb-3">
              NexusCare
            </a>
            <p className="text-sm text-muted-foreground text-pretty">
              Healthcare referral coordination for senior living operators and admissions teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#audience" className="hover:text-foreground transition-colors">Who It's For</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Request Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Access</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://app.nexuscare.io" className="hover:text-foreground transition-colors">Customer Login</a></li>
              <li><a href="https://staff.nexuscare.io" className="hover:text-foreground transition-colors">Staff Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NexusCare. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
