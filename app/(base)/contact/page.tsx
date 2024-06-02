function Contact() {
    return (
        <section className="relative py-12 space-y-7">
            <div className="md:text-5xl text-3xl lg:text-5xl  lg:mt-8 animate-cup md:px-5 px-2 lg:px-10">
                <span className="serif">Ready</span>
                <span className="sans"> to work</span>
                <span className="fancy"> together?</span>
            </div>
            <section className="max-w-3xl mx-auto px-2 space-y-7">
                <p className="text text-lg">
                    Thanks for your interest in working with us. Please complete
                    the details below and we’ll get back to you within one
                    business day.
                </p>
                <p className="text text-lg">Required</p>
            </section>
            <div className="w-32 h-32 md:w-44 md:h-44 bg-[#f45162] blur-[120px] absolute bottom-3/4 left-0  opacity-75" />
            <div className="w-32 h-32 md:w-44  md:h-44 bg-[#d14add] blur-[120px] absolute right-0 top-0 opacity-75" />
        </section>
    )
}

export default Contact
