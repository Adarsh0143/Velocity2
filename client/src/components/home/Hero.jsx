import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div>
                
                <div>
                    <div className="flex justify-center items-center ">
                        <div className="carousel carousel-end rounded-box border-2 border-blue-500">
                            <div className="carousel-item">
                                <img
                                    src="src\image\Red_Dead_Redemption_II.jpg"
                                    alt="RDR2"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="src\image\Tekken_8.jpg"
                                    alt="Tekken"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="src\image\Need_for_Speed_2015.jpg"
                                    alt="Star War"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="src\image\Call_Of_Duty.jpg"
                                    alt="Call of Duty"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="src\image\Destiny_2.jpg"
                                    alt="Destiny"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="  src\image\Mortal_Kombat_11_.png"
                                    alt="Drink"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="src\image\Forza_Horizon_5_cover_art.jpg"
                                    alt="Forza Horizon"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" card lg:card-side bg-base-100 shadow-xl w-1/2 mt-20 ml-[460px] h-96 border-2 border-blue-500">
                        <figure>
                            <img
                                className="h-96"
                                src="src\image\palworld.jpg"
                                alt="Palworld"
                            />
                        </figure>
                        <div className="card-body text-2xl">
                            <h2 className="card-title text-4xl">
                                New Arrival!
                            </h2>
                            <p>Get early access of this game.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" >
                                    Get Access
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        tabIndex={0}
                        className=" collapse m-2 text-primary-content focus:bg-white focus:text-gray-900 w-1/2 ml-[460px] border-2 border-blue-500 bg-slate-500"
                    >
                        <div className="collapse-title m-2 text-2xl">
                            <h2>Click to know more about 'PALWORLD'</h2>
                        </div>
                        <div className="collapse-content">
                            <p className="text-2xl ">
                                {" "}
                                Palworld is an upcoming action-adventure,
                                survival, and monster-taming game created and
                                published by Japanese developer Pocket Pair.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-[#B0BBBF] m-4 p-4 rounded-lg">
                        <div className=" grid grid-cols-3  gap-8 justify-items-center">
                            <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                                <figure>
                                    <img
                                        src="src\image\senua's.jpg"
                                        alt="Hellblade"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">
                                        Hellblade: Senua's Sacrifice{" "}
                                    </h2>
                                    <p className="text-lg">
                                        Set in the Viking age, a broken Celtic
                                        warrior embarks on a haunting vision
                                        quest into Viking Hell to fight for the
                                        soul of her dead lover.{" "}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                                <figure>
                                    <img
                                        src="src\image\theforest.jpg"
                                        alt="The Forest"
                                    />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title text-2xl">
                                        The Forest{" "}
                                    </h2>
                                    <p className="text-lg">
                                        The Forest blends exploration,
                                        discovery, and cannibalism in a
                                        story-rich survival horror sandbox.
                                        Survive a plane crash and fight off
                                        mutants in the game.{" "}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                                <figure>
                                    <img
                                        src="src\image\creed.png"
                                        alt="Assassin Creed"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">
                                        Assassin's Creed Odyssey{" "}
                                    </h2>
                                    <p className="text-lg">
                                        Write your own epic odyssey and become a
                                        legendary Spartan hero in Assassin’s
                                        Creed Odyssey, an inspiring adventure
                                        where you must forge your destiny.{" "}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500 ">
                                <figure>
                                    <img
                                        src="src\image\far.jpg"
                                        alt="Far cry"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">
                                        Far Cry 5{" "}
                                    </h2>
                                    <p className="text-lg">
                                        Montana, land of the free and the brave,
                                        but also home to a fanatical doomsday
                                        cult—known as The Project at Eden’s Gate
                                        that is threatening the community's
                                        freedom. .{" "}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl border-2 border-blue-500">
                                <figure>
                                    <img
                                        src="src\image\elden.jpg"
                                        alt="Elden Ring"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">
                                        Elden Rings{" "}
                                    </h2>
                                    <p className="text-lg">
                                        Rise and be guided by grace to brandish
                                        the power of the Elden Ring and become
                                        an Elden Lord in the Lands Between. A
                                        war that meant abandonment by the
                                        Greater Will.{" "}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl  border-2 border-blue-500">
                                <figure>
                                    <img
                                        src="src\image\tekken8.jpg"
                                        alt="Tekken"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">
                                        Tekken 8{" "}
                                    </h2>
                                    <p className="text-lg">
                                        TEKKEN 8 continues the tragic saga of
                                        the Mishima bloodline and its
                                        world-shaking father-and-son grudge
                                        matches. Showcase every moment of impact
                                        and super moves.{" "}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="bg-[#B0BBBF] hover:bg-transparent m-4 p-4 flex justify-center rounded-xl ">
                            <div className="  w-96 bg-base-100 shadow-xl rounded-lg m-4 border-4 border-black  hover:border-blue-500">
                                <figure className="px-15 pt-15">
                                    <img
                                        src="\src\image\mortal.jpg"
                                        alt="mortal"
                                    />
                                </figure>
                                <div className="card-body items-center text-center ">
                                    <h2 className="card-title text-2xl">
                                        Mortal Combat
                                    </h2>
                                    <p className="text-xl">
                                        Buy this month's top seller.
                                    </p>
                                    <div className="card-actions mt-5">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="card  bg-base-100 shadow-xl image-full m-5">
                            <figure>
                                <img src="src\image\cs.jpeg" alt="CSgo" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-6xl card-title">
                                    Most played game!
                                </h2>
                                <p className="text-5xl">
                                    Add Counter Strike Global Offensive 2.
                                </p>
                                <div className="card-actions justify-center">
                                    <button className="btn w-96 h-24 btn-primary text-3xl">
                                        Play
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
};

export default Hero;
