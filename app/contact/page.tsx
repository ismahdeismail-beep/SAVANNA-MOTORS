import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/container"

export const metadata = { title: "Contact — Savanna Motors" }

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
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

      if (res.ok && data.success) {
        setSuccess(
          "Thank you! Your message has been received. We'll get back to you soon."
        )
        ;(e.target as HTMLFormElement).reset()
      } else {
        const errMsg = data.error || "Submission failed. Please try again."
        setError(errMsg)
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
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6">
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
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-green w-full"
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
        </div>
      </Container>
    </div>
  )
}