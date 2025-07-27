import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const posts = [
		{
			_createdAt:new Date(),
			views:55,
			author:{_id:1,name:"Ayanaw"},
			_id:1,
			description:"This is a description",
			image: "https://plus.unsplash.com/premium_photo-1752433524344-c2f801835945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
			category:"Robots",
			title :"We Robots",
			
		},
		
		
	]
	return (
		<>
			<section className="pink_container">
				<h1 className="heading ">
					pitch your startups. <br /> connect with entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl capitalize">
					Submit ideas, vote on pitches, and get noticed in virtual
					Competitions
				</p>
				<SearchForm query={query} />
			</section>

			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : 'All Startups'}
				</p>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post:StartupCardType,index:number)=>(
							<StartupCard key={post?._id} post={post} />
						))
					):(
						<p className="no-result">No startups found</p>
					)} 
				</ul>
			</section>
		</>
	);
}
