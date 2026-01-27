import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export default function ContactPage() {
    return (
        <main
            className="min-h-screen bg-[#3A3838] text-white"
            style={{ backgroundImage: "radial-gradient(circle at top, #555 0, #3A3838 45%, #151515 100%)" }}
        >
            <div className="mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-10 md:px-8 lg:px-10">
                <Navbar />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}