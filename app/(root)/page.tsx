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
			image: "https://unsplash.com/photos/a-group-of-people-sitting-on-top-of-a-rock-LiDZooBvzt0",
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
