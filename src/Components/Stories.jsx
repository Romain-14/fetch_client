import React, { useState, useEffect } from "react";
import Card from "./Card";

function Stories() {
    const [stories, setStories] = useState(null);

    useEffect(() => {
        async function getDatas() {
            const datas = await (await fetch("/api/v1/story/all")).json();
            setStories(datas.stories);
        }
        getDatas();
    }, []);

    return (
        <main id="stories">
            {!stories ? (<p>loading</p>) : 
                (<>
                    {stories.map((story) => {
                        return (
                            <React.Fragment key={story.id}>
                                <Card story={story} hasLink={true}/>
                            </React.Fragment>
                        );
                    })}
                </>)
            }
        </main>
    );
}

export default Stories;
