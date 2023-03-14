import Image from "next/image"

export default function Intro() {
    const peanut = "/peanutsvg.svg";
    const illustration1 = "/illustration1.svg";
    const illustration2 = "/illustration2.svg";

    return(
        <main className="border-black lg:w-[1000px] mx-auto
                        px-5 md:px-16 pt-16 text-lg">
            <h1 className="text-center font-extrabold text-3xl text-brownish-attention"> Peanuts API <span className="font-normal text-lg"> Write-up </span> </h1>

            <Image className="block mx-auto my-8" src={peanut} width={146} height={150} alt=""/>

            <p className="pb-5 mt-12 lg:mt-20"> 
                Interact with the API here: <span className="text-brownish-attention underline"> <a href=""> api.arielcarvalho.io:3001 </a> </span> <br />
                or continue reading for documentation. 
            </p>

            <p className="pb-5 lg:pb-0">
                <span className="text-brownish-attention"> Peanuts API </span> is a basic economic system.
                In short what this API does is it generates a single token of currency for every user every 6 hours.
            </p>

            <p className="pb-5 lg:pb-0">
                The currency in this case being a <span className="text-brownish-attention"> peanut</span>. Every peanut is unique and will have a unique 
                <span className="text-brownish-attention"> token-id </span>. That token-id can be claimed by any user.
            </p>

            <p className="pb-5 lg:pb-0">
                The user who <span className="text-brownish-attention"> claims </span> that generated peanut first will have it transferred to their (bank) <span className="text-brownish-attention"> account </span>.
            </p>

            <p className="pb-5">
                Meaning users can visit other users&rsquo; <span className="text-brownish-attention"> profiles </span> and <span className="text-brownish-attention"> claim their generated peanut </span> in case the owner has not come around to doing so.
            </p>

            <p className="pb-5">
                Any user can see any user&rsquo;s <span className="text-brownish-attention"> total funds </span>, account and check their profiles in general. All they would need is that user&rsquo;s specific, unique <span className="text-brownish-attention"> username </span>. <br />
                <br />
                Search is not a feature in this system.
            </p>

            <Image className="block mx-auto my-8 mt-14 mb-14" src={illustration1} width={662} height={426} alt=""/>
            
            <p className="pb-5 ">
                The user logs in to their <span className="text-brownish-attention"> account</span>, then they would have access to a top 5 of the users with the most funds in the system. From there they can also access their profile.
            </p>

            <Image className="block mx-auto my-8 mt-14 mb-14" src={illustration2} width={662} height={426} alt=""/>
            
            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8"> Technical </h2>

            <p className="pb-5">
                The basic system would work like that. As of now it&rsquo;s just a CRUD. So not actually complete.
            </p>

        </main>
    )
}