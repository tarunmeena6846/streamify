export function Hero() {
  return (
    <div className="flex flex-row px-6">
      <div className="w-3/4 ">
        <img
          src="./Screenshot.png"
          alt=""
          className="rounded-3xl w-[80%] h-[50vh] "
        />
      </div>
      <div className="w-1/4"></div>

      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Streamify
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Streamify is a platform that connects streamers with content
            creators.
          </p>
        </div>
      </div> */}
    </div>
  );
}
