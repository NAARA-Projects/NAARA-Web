"use client";
import React, { useState } from "react";
import Head from "next/head";
import GallerySlider from "../components/GallerySlider";
import { Footer } from "../components";

const ArticlePage: React.FC = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    const galleryImages = [
        "/beachtrash.jpg",
        "/landingcover.svg",
        "/Figma_Beta_bXYnmTpNR9.gif",
        "/figmashowcase.gif",
    ];

    const galleryCaptions = [
        "Beach Cleanup Event",
        "Landing Cover",
        "Figma Beta Showcase",
        "Figma Showcase",
    ];

    return (
        <>
            <Head>
                <title>Article Page</title>
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <main className="w-full min-h-screen bg-black text-white">
                <div className="w-full bg-cover bg-center h-80 md:h-96" style={{ backgroundImage: 'url(/beachtrash.jpg)' }}>
                    <div className="bg-black bg-opacity-70 h-full flex flex-col justify-center items-center text-center px-4">
                        <h1 className="prose lg:prose-xl max-w-none pl-20 pr-20 text-white font-sans font-semibold text-4xl md:text-4xl mb-4">CANAMA: Junior and Senior High School Teens Clean Up the Beach Through ‘War on Waste’ 2024</h1>
                        <br></br>
                        <p className="text-2xl">Author: Winner R. Rasendriya, Raden Prasetya Mahdi A. P., Kevin Royson</p>
                        <p className="text-2xl">Published on: June 11, 2024</p>
                    </div>
                </div>

                <div className="container mx-auto py-8 px-4 lg:px-20">
                    <div className="prose lg:prose-xl max-w-none pl-20 pr-20 text-white text-2xl font-sans">
                        <br />
                        <p>INDONESIA — 3 independent environment-focused organizations have collaborated to host the cleanup event called <b> ‘WAR ON WASTE’</b>. It was held on the 8th of June, 2024 at the <b> Tanjung Pasir 88 </b> beach, Indonesia. Over a total of 61 volunteers from 21 schools — both local and international curriculum — participated in this activity.</p>
                        <br />
                        <br />
                        <p><b>‘CANAMA’</b> is the name of the collaboration between the three organizations namely: <b>CareSpark, NAARA Projects, </b> and <b> Mangroovy </b>. All three are led and run entirely by high school youths who are concerned about the environmental issues plaguing their surroundings. Due to the shared mission and friendship between the leaders of each organization, a collaborative relationship was established to combat environmental problems in coastal areas caused by accumulated waste.</p>
                        <br />
                        <br />
                        <p><i>“The ‘WAR ON WASTE’ event itself is indeed the fruits of our own labor,” claims <b>Winner Rafif Rasendriya</b>, one of the founders of NAARA Projects.</i></p>
                        <br />
                        <br />
                        <p>“NAARA Projects’ desire to collaborate led to the idea for this event. We were looking for partners at the time to help plan events as well as try out our in-house application. Given that Mangroovy had previously organized a river cleanup event, representatives from NAARA Projects suggested organizing a beach clean-up event, inspired by our ongoing collaboration with <b>BBPB BSB</b> (<b>Bye Bye Plastic Bags BINUS SCHOOL Bekasi</b>). We (CANAMA) ultimately decided to hold a beach clean-up event after our discussions.” He stated.</p>
                        <br />
                        <br />
                        <p><i>“Of course, coordinating for an occasion of this scope is difficult, especially for us youths,” stated <b>Raden Prasetya Mahdi Ali Pratama</b>, one of NAARA Projects’ founders.</i></p>
                        <br />
                        <br />
                        <p>“In the month we spent preparing, we encountered numerous obstacles. One such is the cost factor, which we addressed with the help of Mangroovy and NAARA Projects membership fees, while CareSpark raised the money by selling homemade cookies and snacks. Not to mention the number of volunteers we could take on, their transportation, food, and even the sourcing of tools that’d be used on the event day.”</p>
                        <br />
                        <br />
                        <p>The event emphasized teenagers’ awareness of their environmental health. Therefore, when CANAMA started the registration form for the event on April 28, 11 days prior to cleanup day, they asked for volunteers from a range of 9 to 12th grade high school. On the 4th of June, four days before the cleanup day, the registration was closed, and a total of 37 volunteers signed up, far more than the 28 they had originally requested.</p>
                        <br />
                        <br />
                        <p><i>“To clean the beach effectively, there had to be a division of groups,” says <b>Pacifier Layarda</b>, one of the Mangroovy leaders.</i></p>
                        <br />
                        <br />
                        <p>“Besides the division for the sake of administration, our volunteers are split into two: the ‘Warrior’ and ‘Healer’ teams. The ‘Warrior’ team has the task of collecting garbage: they wear gloves, boots, and garbage picks. Meanwhile, the ‘Healer’ team had the task of washing the stains off with soap and clean water.”</p>
                        <br />
                        <br />
                        <p><b>Quirinus Nikolas Albert Sanders</b>, as the secretary of CareSpark, explained that the waste that had been collected and washed at this event will then be sorted and packaged to be given to recycling companies-such as Rebricks and Waste4Change. The waste received by Rebricks will be recycled into environmentally-friendly building materials. Meanwhile, the waste received by Waste4Change will be processed into plastic pallets or other reusable plastic products.</p>
                        <br />
                        <br />
                        <p>Tanjung Pasir 88 Beach was plagued with all sorts of waste: trash such as food wrappers and plastic bottles can be seen. The dirty beach is caused by the habit of visitors and local residents who dispose of their used goods around the beach.</p>
                        <br />
                        <br />
                        <p><i>“Obviously, our goal in organizing this event is to clean up the beach, but it’s also important to raise awareness about the issue of waste pollution,” said Mangroovy co-chairs <b>Grace Gunawan</b> and <b>Chloe Djalal</b>.</i></p>
                        <br />
                        <br />
                        <p>“Whether it’s locals or high school students across Jakarta, we have to accept that one cleanup won’t make much of a difference. It’s the mindset and sense of responsibility that we’re trying to build.”</p>
                        <br />
                        <br />
                        <p>‘CANAMA’ with the permission of the Tanjung Pasir 88 beach manager, <b>Bu Nining</b>, cleaned up all the trash that could be picked up from the sea coast to the food vendor area. They’ve successfully collected more than 50 bags of garbage. ‘CANAMA’ has made a significant impact on the cleanliness of Tanjung Pasir 88 Beach.</p>
                        <br />
                        <br />

                        <GallerySlider images={galleryImages} captions={galleryCaptions} />
                        
                        <br />
                        <p>ENVIRONMENT     ||     YOUTH ACTIVISM     ||     CONSERVATION     ||     SUSTAINABILITY     ||     EDUCATION</p>
                    </div>

                    <div className="flex items-center justify-between mt-8 pl-20">
                        <button onClick={handleLike} className="flex items-center bg-blue-600 hover:bg-gradient-to-r from-[#5ABBDC] to-[#2457B5] text-white font-semibold py-2 px-4 rounded">
                            👍 Like {likeCount}
                        </button>
                    </div>

                    <div className="mt-12 pl-20">
                        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                        <div className="space-y-4">
                            {comments.map((comment, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded shadow">
                                    {comment}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <textarea
                                className="w-full p-2 border border-gray-700 bg-gray-900 text-white rounded"
                                rows={4}
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            ></textarea>
                            <br></br>
                            <button onClick={handleCommentSubmit} className="mt-2 bg-blue-600 hover:bg-gradient-to-r from-[#5ABBDC] to-[#2457B5] text-white font-semibold py-2 px-4 rounded">
                                Submit Comment
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default ArticlePage;
    