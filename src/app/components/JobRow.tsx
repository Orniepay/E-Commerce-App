import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow(){
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow relative">
                <div className="absolute cursor-pointer top-4 right-4">
                    <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
                </div>
                <div className="flex grow gap-4">
                    <div className="content-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Spotify.png" alt="Spotify" className="size-12" />
                    </div>
                    <div className="grow sm:flex">
                        <div className="grow">
                            <div className="text-md">
                                Spotify
                            </div>
                            <div className="font-bold text-lg">
                                Product Designer
                            </div>
                            <div className="text-gray-400 text-sm">
                                Remote &middot; New York, US &middot; Full-time
                            </div>
                            </div>
                        <div className="content-end text-gray-500 text-sm">
                        2 weeks ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}