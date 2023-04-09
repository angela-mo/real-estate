/* eslint-disable react/no-unescaped-entities */
import PageWrapper from "@/components/PageWrapper";

const HomePage = () => {
	return (
		<PageWrapper className="flex">
			{/* Naavbar */}
			<div className="px-10 w-full h-[80px] bg-slate-100 absolute top-0 left-0 flex justify-between items-center">
				<div>
					<h1>Mo's Real Estate</h1>
				</div>
				<div className="flex gap-5">
					<a>Home</a>
					<a>About</a>
					<a>Search</a>
				</div>
			</div>
			{/* Body */}
			<div className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGFhdGFlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60')]">
				<div className="flex justify-center flex-col gap-4">
					<h1 className="text-white text-6xl">Luxury Properties</h1>
					<div>
						<input className="rounded-md h-[50px] w-[300px] pl-5" type="text" placeholder="Search locations" />
						<button className="ml-3 w-fit h-[50px] w-[150px] bg-blue-500 text-white cursor-pointer rounded-md">
							Search now
						</button>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default HomePage;
