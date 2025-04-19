export default function Navbar() {
    return (
        <div className="flex flex-row justify-between py-8 px-16">
            <div className="text-MainText font-black text-5xl italic font-serif ml-10">Jobeasy</div>
            <div className="flex flex-row gap-8 mr-10">
                <div className="font-semibold border-2 text-[#007400] border-[#007400] my-auto px-6 py-3 rounded-full font-serif text-2xl">Login</div>
                <div className="font-semibold border-2 border-MainText my-auto px-6 py-3 rounded-full font-serif text-2xl bg-[#479f47] text-background">Get Started</div>
            </div>
        </div>
    )
}