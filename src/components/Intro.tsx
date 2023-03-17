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


            <h1 className="text-center font-extrabold text-3xl text-brownish-attention"> Peanuts API <span className="font-normal text-lg"> Write-up </span> </h1>

            <Image className="block mx-auto my-8" src={peanut} width={146} height={150} alt=""/>

            <p className="pb-5 mt-12 lg:mt-20"> 
                Interact with the API here: <span className="text-brownish-attention underline"> <a href="http://api.arielcarvalho.io:3001" target="_blank"> api.arielcarvalho.io:3001 </a> </span> <br />
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
                The basic system would work like that. As of now it&rsquo;s just a CRUD. So not actually complete. In fact we are missing the transfer feature, thus making the currency not movable between accounts.
                It would be a stretch to even call it an economy at the current state. But anyway:
            </p>

            <p className="pb-5">
                This is the base URL: <a href="http://api.arielcarvalho.io:3001" target="_blank" className="text-brownish-attention underline"> api.arielcarvalho.io:3001 </a>
            </p>

            <p className="pb-5">
                Available routes are:
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3001/api/v1/user
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3001/api/v1/session
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3001/api/v1/funds:[username]
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">PUT</span> api.arielcarvalho.io:3001/api/v1/funds
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">GET</span> api.arielcarvalho.io:3001/api/v1/funds:[username]
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">GET</span> api.arielcarvalho.io:3001/api/v1/user:[username]
            </p>

            

            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8 mt-16"> Http Requests </h2>


            <p className="pb-5">
                This backend is <span className="text-brownish-attention">RESTful</span> and you can use an API testing/development platform to make requests and interact with it.
                 I personally use <span className="text-brownish-attention underline"> <a href="http://insomnia.rest" target="_blank"> insomnia</a></span>.
                Following is a brief explanation of what each route does, what is needed per request and the attributes for the JSON.
            </p>

            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> CREATE USER </h3>

            <p className="pb-5">
                This route will create a new user if the username isn&rsquo;t already taken. It will also create the new user&rsquo;s bank account and balance.
            </p>

            <p className="pb-5">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3001/api/v1/user
            </p>

            <p>
                {"{"} <br />
                    <span className="pl-10"> &quot;username&quot;: &quot;pliskin&quot;, </span> <br />
                    <span className="pl-10"> &quot;password&quot;: &quot;1234&quot;, </span> <br />
                {"}"}
            </p>


            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> AUTHENTICATE USER </h3>

            <p className="pb-5">
                This route will allow a registered user to login to the system. From there they can claim funds, check other users&rsquo; profiles, accounts and so on. 
            </p>

            <p className="pb-5">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3001/api/v1/session
            </p>

            <p>
                {"{"} <br />
                    <span className="pl-10"> &quot;username&quot;: &quot;pliskin&quot;, </span> <br />
                    <span className="pl-10"> &quot;password&quot;: &quot;1234&quot;, </span> <br />
                {"}"}
            </p>



            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> GENERATE FUNDS </h3>

            <p className="pb-5">
                This is the route that will actually keep the entire thing going. It will <span className="text-brownish-attention"> generate the funds </span> for the users that need it.
                After a peanut has been claimed a new one will be generated in 6 hours.
            </p>

            <p className="pb-5">
                That&rsquo;s how it works, a new fund will be generated every <span className="text-brownish-attention">6 hours</span>, the only exception will be that in case the previous generated fund was not claimed a new one will not be created.
            </p>

            <p className="pb-5">
                A neat trick about this route and about the generation system is that it will only be activated when its needed. Meaning this route will be called when a user’s profile is visited, that’s why it needs a username to be called.
                So that it knows to whom to assign the origin of the fund/token.
            </p>

            <p className="pb-5">
                Every peanut/fund/currency is unique. They have a unique token, upon generation they will be stored in the database so that they can be claimed and so that the system can keep track of them.
                But instead of actually generating a new fund to every user every 6 hours (that would be even for inactive users) and clutter the database unnecessarily. We will generate a token only when a user profile is visited.
            </p>
            
            <p className="pb-">
                When that user&rsquo;s profile is visited the generate funds route is triggered and it checks if the user meets all the requirements to have a new token be generated in their name.
            </p>

            <p className="pb-5">
                That way tokens will be generated within 6 hour intervals and also prevent inactive, non visited profiles from littering the database.
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">POST</span> api.arielcarvalho.io:3001/api/v1/funds:pliskin
            </p>

            <p className="pb-5 ">
                Also a user requesting to this endpoint (visiting this profile) <span className="text-brownish-attention">needs to be authenticated</span>. So they need to have access to a valid bearer token.
                One that looks like this:
            </p>

            <p className="pb-5 break-all text-sm text-gray-500">
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IlBsaXNraW4iLCJpYXQiOjE2Nzg3MDA1NjksImV4cCI6MTY3ODc4Njk2OSwic3ViIjoiUGxpc2tpbiJ9.UZmSAlYhLzN-IbGfqllqZ1fq9qdYa-5onMTdKKKjpkc
            </p>

            <p className="pb-5 ">
                Users receive such tokens as an HTTP response after a successful login.
            </p>




            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> CLAIM FUND </h3>

            <p className="pb-5">
                A request to this route will claim an available fund. Let&rsquo;s say you just visited a profile (it could be yours it could be someone else&rsquo;s) and you see there&rsquo;s an available fund that hasn&rsquo;t been claimed yet. This endpoint is how you do it.
            </p>
            
            <p className="pb-5 break-all">
                <span className="text-brownish-attention">PUT</span> api.arielcarvalho.io:3001/api/v1/funds
            </p>

            <p className="pb-5">
                As mentioned before every fund is a unique token, when you click to claim it you should get access to its ID.
            </p>

            <p className="pb-5">
                This route will use that unique ID to assign the fund to the logged in user, the one claiming it (in this case you).
                It goes without saying that this route also needs a valid bearer token (you need to be logged-in).
            </p>

            <p  className="break-all">
                {"{"} <br />
                    <span className="pl-10"> &quot;fundId&quot;: &quot;e704f517-7591-4107-bb57-00596192c406&quot;, </span> <br />
                {"}"}
            </p>




            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> GET USER </h3>

            <p className="pb-5">
                This route will list information about a specific user. There&rsquo;s no need to be authenticated to request to this endpoint.
            </p>

            <p className="pb-5 break-all">
                <span className="text-brownish-attention">GET</span> api.arielcarvalho.io:3001/api/v1/user:pliskin
            </p>


            <h3 className="pb-5 pt-10 text-brownish-attention font-semibold"> GET FUNDS </h3>

            <p className="pb-5">
                This endpoint is pretty much the same. We use it to get specific information about a user&rsquo;s funds.
                That includes each and every token they have, when it was claimed and from whom.
            </p>

            <p className="pb-5">
                Requesting to it is also pretty straightforward. We don&rsquo;t need to be logged in or a request body.
            </p>
            
            <p className="pb-20 break-all">
                <span className="text-brownish-attention">GET</span> api.arielcarvalho.io:3001/api/v1/funds:pliskin
            </p>
            




            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8"> Database design </h2>

            <p className="pb-5">
                The database is normalized and there&rsquo;s a total of 3 tables.
                Tokens (funds) get a separate table so that we can keep as much information on them as possible.
            </p>

            <p className="pb-5">
                There&rsquo;s a one-to-one relationship between the user table and the account table. Meaning each user can only have one account. <br />
                There&rsquo;s also a one-to-many relationship between account and the fund table. That leaves the account table in the middle, being the link between user table and fund table.
            </p>

            <p className="pb-5">
                This is an idea of how they&rsquo;re laid out and what it looks like:
            </p>

            <Image className="block mx-auto my-8 mt-14 mb-32" src={databaselayout} width={964} height={195} alt=""/>

            <h2 className="text-center font-extrabold text-3xl text-brownish-attention mb-8"> Conclusion </h2>

            <p className="pb-28">
                That&rsquo;s about it. Have fun {":)"}
            </p>
            
            <a href="https://www.arielcarvalho.io/"> <Image className="block mx-auto my-8 mt-14 mb-28" src={cactus} width={54} height={85} alt=""/> </a>
        </main>
    )
}