"use client"

export function GoogleForm() {
  return (
    <div className="relative w-full" style={{ minHeight: '800px' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScvukS-9FRSONV-mFzupfy3AuLaGzTqcK66ZDQRrHjIDaradA/viewform?embedded=true"
        width="100%"
        height="800"
        style={{ border: 0 }}
        className="rounded-lg"
        title="SLMI Pest Control Contact Form"
        loading="lazy"
        sandbox="allow-scripts allow-forms allow-same-origin"
      >
        Loading contact form...
      </iframe>
    </div>
  )
}