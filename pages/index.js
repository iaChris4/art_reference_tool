const images = new Array(20).fill(null).map((_item,i)=>{return `https://source.unsplash.com/random/${i}`})
import {SearchIcon, PlusIcon} from "@heroicons/react/outline"
const search = ()=>{
  console.log("Searching from function")
}

const url = "https://api.unsplash.com/search/photos/?client_id=Access_ID_Here"

const colourSearch = async()=>{
  console.log("Searching by colour")
  const color = "&color=blue&query=office"
  url=url+color
  const response= await fetch(url)
  console.log(response)
}

export default function Home() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg">
        <div className="flex flex-col h-screen">
          {/* This is the header */}
          <div className="bg-red-900 text-white p-3">
            <h1 className="font-bold text-3xl text-center">Moodboard app</h1>
          </div>
          {/* Categories to browse */}
          <div className="m-3 flex justify-center overflow-x-scroll">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3"
              onClick={(_e)=>{
                colourSearch()
              }}
              >Blue</button>
              <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat2</button>
              <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat3</button>
              <button className="btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat4</button>
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat1</button>
              <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat2</button>
              <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat3</button>
              <button className="btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat4</button>
            </div>
            <h3 className="flex justify-center m-1">Tagline</h3>
            <div>
      
      </div>
            {/* Search bar */}
            <div className="m-1 flex justify-center">
            <input
              id="search"
              type="text"
              // className="rounded-full p-1.5 border-2 w-96"
              className="border-2 w-96 block rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
              placeholder="Search..."
            ></input>
            <button
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              onClick={(_e) => {
                search()
              }}
            >
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
            </div>
          <main className="flex-1 overflow-y-scroll">
            
            {/* Images */}
            <div className="m-3 mr-8">
              <div className="lg:columns-4 md:columns-3 columns-2">
                {images.map((image,i)=>(
                <div key={i} className="relative">
                  <img className="m-3" alt="an image from Unsplash" src={image}/>
                    <div className="absolute inset-0 group">
                      <button className="hidden group-hover:block mt-3 h-8 w-8 bg-blue-800 right-0 absolute rounded-full text-white p-1"
                        onClick={(_e) => {
                          console.log("button clicked!");
                        }}
                      >
                        <PlusIcon></PlusIcon>
                      </button>
                    </div>
                </div>
                ))}
              </div>

            </div>
          </main>
          {/* This is the footer */}
          <div className="bg-teal-800 text-white p-3">
            <p>Terms and conditions: ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
