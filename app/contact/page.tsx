import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/container"

export const metadata = { title: "Contact — Savanna Motors" }

const successMessages = [
  "Thank you! We'll get back to you within 24 hours.",
  "Your message has been received. A team member will contact you soon.",
  "Thanks for reaching out. We'll review your inquiry and email you back.",
]

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(
          successMessages[Math.floor(Math.random() * successMessages.length)]
        )
        ;(e.target as HTMLFormElement).reset()
      } else {
        setError(data.error || "Submission failed. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-8">
      <Container>
        <h1 className="font-display text-3xl font-extrabold text-center mb-8">
          Get in Touch
        </h1>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 animate-shake">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6 animate-bounce">
            <p className="text-sm">{success}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 p-6 rounded-2xl bg-sand-100 border border-sand-300"
        >
          <div>
            <label className="block text-sm font-semibold text-savanna-800 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="field w-full"
              placeholder="Your full name"
              value=""
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-savanna-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="field w-full"
              placeholder="your@email.com"
              value=""
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-savanna-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="field w-full min-h-[120px]"
              placeholder="How can we help you?"
              value=""
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className={cn(
                "btn btn-green w-full",
                loading && "opacity-80 cursor-not-allowed"
              )}
              disabled={loading}
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-muted">
          <p>
            Preferred contact methods:<br />
            <a href="https://wa.me/254700000000" className="link" target="_blank"
              >WhatsApp (primary)</a
            >{" "}·{" "}<a href="mailto:sales@savannamotors.co.ke" className="link"
              >Email</a
            >
          </p>
        </p>
        </p>
        </div>
      </Container>
    </div>
  )
}