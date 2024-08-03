export default function Hero(){
    return(
        <section className="py-12">
            <h1 className="text-4xl font-bold text-center">
                Find Your Next <br /> Dream Job
            </h1>
            <p className="text-center text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi nihil, eaque rem cum inventore sed beatae dolores consectetur quibusdam voluptatibus porro quam quos deserunt, ad ullam molestias consequuntur expedita.
            </p>

            <form>
                <input 
                    type="search" 
                    className="border border-gray-400 w-full py-2 px-3 rounded-md" 
                    placeholder="Search..."/>
            </form>
        </section>
    );
}
