import video1 from './../assets/hero/video1.mp4';
import video2 from './../assets/hero/video2.mp4';

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6">
            <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
                DevRix build tools

                <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
                    {" "} for developers
                </span>
            </h1>

            <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>

            <div className="flex justify-center gap-5 my-10">
                <a href="#" className="p-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                    Sign for free
                </a>

                <a href="#" className="p-3 border rounded-md">
                    Documentation
                </a>
            </div>

            <div className="flex justify-center mt-5">
                <video autoPlay loop muted className="w-1/2 mx-2 my-4 border border-orange-700 rounded-lg shadow-sm shadow-orange-400">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <video autoPlay loop muted className="w-1/2 mx-2 my-4 border border-orange-700 rounded-lg shadow-sm shadow-orange-400">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
};

export default Hero;
