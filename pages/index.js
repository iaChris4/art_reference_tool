export default function Home() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg">
        <div className="flex flex-col h-screen">
          {/* This is the header */}
          <div className="bg-red-900 text-white p-3">
            <h1 className="font-bold text-3xl text-center">Moodboard app</h1>
          </div>
          <main className="flex-1 overflow-y-scroll">
            {/* Categories to browse */}
            <div className="m-3 flex justify-center overflow-x-scroll">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat1</button>
              <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat2</button>
              <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat3</button>
              <button className="btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat4</button>
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat1</button>
              <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat2</button>
              <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat3</button>
              <button className="btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full m-3">Cat4</button>
            </div>
            <h6 className="flex justify-center m-3">Tagline</h6>
            {/* Search bar */}
            <div className="m-3 flex justify-center">
              <input id="search" type="text" className="rounded-full p-1.5 border-2 w-96" placeholder="Search..."></input>
            </div>
            {/* Images */}
            <div className="m-3">
              


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
