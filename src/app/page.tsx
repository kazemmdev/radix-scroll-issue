"use client"

import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import VideoPlayer from "@/components/player/video-player";

const Page = () => {
    return (
        <main className="container max-h-screen">
            <VideoPlayer src={'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'}/>
            <ScrollArea className="h-[calc(100vh_-_360px)]">
                <div className="size-full pb-48">
                    <h3 className="text-lg font-semibold">
                        Where can I get some?
                    </h3>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which dont look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not
                        anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                        to
                        repeat
                        predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                        generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                        repetition,
                        injected humour, or non-characteristic words etc.
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which dont look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not
                        anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                        to
                        repeat
                        predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                        generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                        repetition,
                        injected humour, or non-characteristic words etc.
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which dont look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not
                        anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                        to
                        repeat
                        predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                        generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
                        repetition,
                        injected humour, or non-characteristic words etc.
                    </p>
                </div>
            </ScrollArea>
        </main>
    );
};

export default Page;
