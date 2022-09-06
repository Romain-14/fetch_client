import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function Story() {
    const { id } = useParams();

    const [story, setStory] = useState(null);

    useEffect(() => {
        async function getData() {
            const datas = await (await fetch(`/api/v1/story/${id}`)).json();
            setStory(datas.story);
        }
        getData();
    }, []);

    return (
        <main id="story">
            {!story ? (
                <p>Loading .....</p>
            ) : (
                <>
                    <Card story={story} />
                </>
            )}
        </main>
    );
}

export default Story;
