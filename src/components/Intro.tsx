import Image from "next/image"

export default function Intro() {
    const peanut = "/peanutsvg.svg";
    const illustration1 = "/illustration1.svg";
    const illustration2 = "/illustration2.svg";
    const databaselayout = "/databaselayout.svg";
    const cactus = "/cactus.svg";

    return(
        <main className="border-black lg:w-[1000px] mx-auto
                        px-5 md:px-16 pt-16 text-lg">


            <h1 className="text-center font-extrabold text-3xl text-brownish-attention"> Maker API </h1>


            <p className="pb-5 mt-12 lg:mt-20"> 
                Interact with the API here: <span className="text-brownish-attention underline"> <a href="http://api.arielcarvalho.io:3005" target="_blank"> api.arielcarvalho.io:3005 </a> </span> <br />
                or continue reading for documentation. 
            </p>

            <p className="pb-5 lg:pb-5">
                <span className="text-brownish-attention"> Maker API </span> is a basic landing page/website generator.
                This api is the back-end to a bigger system where all you need to do is input information. <br />
                That includes choosing a theme, colors and so on. Then your landing page will be generated for you, personalized to your taste.
            </p>

            <p className="pb-5 lg:pb-0">
                It is far from finished, this is just a demo. You can make a request with your information (not everything is personalizable) and 
                a basic landing page will be generated with the information and things you chose.
            </p>


            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8 mt-16"> Http Requests </h2>


            <p className="pb-5">
                This backend is <span className="text-brownish-attention">RESTful</span> and you can use an API testing/development platform to make requests and interact with it.
                 I personally use <span className="text-brownish-attention underline"> <a href="http://insomnia.rest" target="_blank"> insomnia</a></span>. <br />
                Following is a brief explanation of what each route does, what is needed per request and the attributes for the JSON.
            </p>

            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> GENERATE LANDING PAGE </h3>

            <p className="pb-5">
                This is the only route available to the user. It will take in information through the json in the request and return a link to the generated website.
            </p>

            <p className="pb-5">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3005/api/v1/website
            </p>

            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> A REQUEST EXAMPLE </h3>

            <p>
                {"{"} <br />
                    <span className="pl-10"> &quot;name&quot;: &quot;Ariel Carvalho&quot;, </span> <br />
                    <span className="pl-10"> &quot;color&quot;: &quot;black&quot;, </span> <br />
                    <span className="pl-10"> &quot;template&quot;: &quot;industrial&quot;, </span> <br />
                    <span className="pl-10"> &quot;slogan&quot;: &quot;We strive to always get better!&quot;, </span> <br />
                    <span className="pl-10"> &quot;introduction&quot;: &quot;This is a personalized paragraph, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget. Our company has served clients and building owners for over four decades.&quot;, </span> <br />
                    <span className="pl-10"> &quot;introCta&quot;: &quot;Read more&quot;, </span> <br />
                {"}"}
            </p>

            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> WHAT SHOULD GO ON A REQUEST </h3>

            <p className="pb-14">
                {"{"} <br />
                    <span className="pl-10"> &quot;name&quot;: &quot;[your name/name of your business here]&quot;, </span> <br />
                    <span className="pl-10"> &quot;color&quot;: &quot;[Hexadecimal color code here or color name ('red' for example)]&quot;, </span> <br />
                    <span className="pl-10"> &quot;template&quot;: &quot;[There are only 2 options available as of now: 'bakery' or 'industrial']&quot;, </span> <br />
                    <span className="pl-10"> &quot;slogan&quot;: &quot;[Your business' slogan]&quot;, </span> <br />
                    <span className="pl-10"> &quot;introduction&quot;: &quot;[Write a paragraph about you, your business or something important]&quot;, </span> <br />
                    <span className="pl-10"> &quot;introCta&quot;: &quot;[Write the text to the button that goes under that paragraph (CTA)]&quot;, </span> <br />
                {"}"}
            </p>


            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8"> Your landing page </h2>

            <p className="pb-5">
                Once you make your request you will get a response back with a link to your landing page. <br />
                It will look something like this: <span className="text-brownish-attention"> api.arielcarvalho.io:3005/Ariel </span> <br />
                <br />
                You will need to copy that URL and paste it in your browser. The API is already serving your landing page, you can access it using the link.
            </p>

            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8"> Conclusion </h2>

            <p className="pb-28">
                That&rsquo;s about it. Have fun {":)"}
            </p>
            
            <a href="https://www.arielcarvalho.io/"> <Image className="block mx-auto my-8 mt-14 mb-28" src={cactus} width={54} height={85} alt=""/> </a>
        </main>
    )
}