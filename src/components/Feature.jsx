import { features } from "../constants";

const Feature = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="w-20 h-5 mx-auto text-sm font-medium text-center text-orange-500 uppercase rounded-full bg-neutral-900">
                feature
            </div>

            <h2 className="mt-10 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl lg:mt-20">
                Easily build

                <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text">
                    {" "} your code
                </span>
            </h2>

            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => {
                    return (
                        <div key={index} className="flex w-full gap-6 sm:w-1/2 lg:w-1/3">
                            <div className="flex">
                                <div className="flex items-center justify-center h-10 p-2 text-orange-700 rounded-full bg-neutral-900">
                                    <feature.icon />
                                </div>

                                <div>
                                    <h5 className="mt-1 mb-6 text-xl">
                                        {feature.text}
                                    </h5>

                                    <p className="p-2 mb-20 text-md text-neutral-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Feature;
