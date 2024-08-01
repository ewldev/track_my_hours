import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <div className="relative w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-[218px] md:min-h-[300px] lg:min-h-[400px]">
            <Image
              src="/images/home-hero.png"
              alt="Freelancer Hours Tracking"
              fill
              style={{objectFit: "cover"}}
            /> 
          </div>

          <h2 id="track-your-hours-and-get-paid-faster" className="text-[#181311] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center py-6">
            Track your hours and get paid faster
          </h2>

          <p className="text-center">
            Keep track of the time you spend on different projects, and easily bill clients.
          </p>

          <section className="mb-10">
            <h1 id="features" className="text-[#181311] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Features
            </h1>

            <p>Get paid for every hour you work</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { image: "/images/time-tracking.png", title: "Time tracking", description: "Log hours by project" },
                { image: "/images/invoicing.png", title: "Invoicing", description: "Create and send invoices" },
                { image: "/images/payments.png", title: "Payments", description: "Get paid in a click" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{objectFit: "cover"}}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6">
        <div className="flex flex-row gap-4 justify-center">
          <Link 
            href="/login" 
            className="bg-[#e6dedb] text-[#181311] font-bold py-3 px-6 rounded-xl hover:bg-gray-300 transition duration-300 ease-in-out text-center text-sm uppercase tracking-wider w-36"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-[#f14b0e] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d64100] transition duration-300 ease-in-out text-center text-sm uppercase tracking-wider w-36"
          >
            Register
          </Link>
        </div>
      </footer>
    </div>
  )
}