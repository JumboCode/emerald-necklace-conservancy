'use client'
import '../globals.css';
import React from "react";
import {useState} from 'react';
import MapPin from "@/components/MapPin";
import ParkName from '@/components/ParkName';

interface ModalsState {
    park1: boolean;
    park2: boolean;
    park3: boolean;
    park4: boolean;
    park5: boolean;
    park6: boolean;
}

const initialState: ModalsState = {
    park1: false,
    park2: false,
    park3: false,
    park4: false,
    park5: false,
    park6: false,
};

enum park {
    Franklin_Park,
    Arnold_Arboretum,
    Jamaica_Pond,
    Olmsted_Park,
    Riverway,
    Back_Bay
}

const text: string[] = [
    "At 527 acres, Franklin Park is the largest park in the Emerald Necklace. Named for Benjamin Franklin, the park brings together rural scenery, spectacular rock outcroppings, a woodland preserve, expansive pastoral vistas and an area for active recreation and sports.",
    "Established in 1872, the Arnold Arboretum is open daily to the public as a free landscape for the study and enjoyment of trees, shrubs, and vines. The Arboretum is both a beautiful landscape of mature plants and a site for vital scientific research.",
    "A pure, glacial kettle hole, Jamaica Pond captivated landscape architect Fredrick Law Olmsted with its “great beauty in reflections and flickering half-lights.” The boathouse at Jamaica Pond provides facilities for sailing, rowing, and fishing. The pond is stocked with trout and salmon raised in state hatcheries.",
    "Landscape architect Fredrick Law Olmsted designed the park as “a chain of picturesque fresh-water ponds, alternating with attractive natural groves and meads.” Pathways, bridges, and plantings provide a series of vignettes with scene changes along the way.",
    "The Riverway, which serves as a border between Boston and Brookline, is a narrow 34-acre park with paths that follow the meandering course of the Muddy River. With more than 100,000 plantings, it is home to some of the most beautiful bridges in the Emerald Necklace.",
    "The Back Bay Fens is an eclectic mix of formal and community gardens, ball fields, memorials and historic structures. With places for passive recreation and active pursuits, the park offers a range of experiences such as gardening and sports and is a popular spot for birders.",
];


export default function MapPage() {
    const [open, setOpen] = useState<boolean[]>(new Array(park.Back_Bay + 1).fill(false));

    return (
        <div>
            <div className="absolute" style={{ top: "40px", left: "15px" }}>
                <img src="/map_images/dove_tree.png" alt="Dove Tree" width={160} />
            </div>
            <div className="absolute" style={{ top: "117px", left: "300px" }}>
                <img src="/map_images/bonsai.png" alt="bonsai" width={90} />
            </div>
            <div className="absolute" style={{ bottom: "230px", left: "330px" }}>
                <img src="/map_images/giraffe.png" alt="giraffe" width={170} />
            </div>
            <div className="absolute" style={{ bottom: "210px", left: "500px" }}>
                <img src="/map_images/turtle.png" alt="turtle" width={80} />
            </div>
            <div className="absolute" style ={{left: '200px', top: '140px'}} >
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{left: '60px', top: '250px'}}>
                <ParkName name = {"Arnold Arboretum"} text={text[park.Arnold_Arboretum]} open={open} setOpen={setOpen} index={park.Arnold_Arboretum}/>
            </div>
            <div className="absolute" style ={{right: '165px', top: '425px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{right: '55px', top: '530px'}}>
                <ParkName name = {"Back Bay Fens"} text={text[park.Back_Bay]} open={open} setOpen={setOpen} index={park.Back_Bay}/>
            </div>
            <div className="absolute" style ={{bottom: "160px", left:"380px"}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{bottom: "70px", left:"380px"}}>
                <ParkName name = {"Franklin Park"} text={text[park.Franklin_Park]} open={open} setOpen={setOpen} index={park.Franklin_Park}/>
            </div>
            <div className="absolute" style ={{left: '520px', top: '50px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{left: '200px', top: '40px'}}>
                <ParkName name = {"Jamaica Pond"} text={text[park.Jamaica_Pond]} open={open} setOpen={setOpen} index={park.Jamaica_Pond}/>
            </div>
            <div className="absolute" style={{ top: "108px", left: "550px" }}>
                <img src="/map_images/sailboat.png" alt="sailboat" width={80} />
            </div>
            <div className="absolute" style={{ top: "108px", left: "470px" }}>
                <img src="/map_images/camorant.png" alt="camorant" width={80} />
            </div>
            <div className="absolute" style ={{right: '430px', top: '120px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{right: '350px', top: '225px'}}>
                <ParkName name = {"Olmsted Park"} text={text[park.Olmsted_Park]} open={open} setOpen={setOpen} index={park.Olmsted_Park}/>
            </div>
            <div className="absolute" style ={{right: '160px', top: '130px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style={{ right: "47px", top: "160px" }}>
                <img src="/map_images/blue_heron.png" alt="blue_heron" width={100} />
            </div>
            <div className = "absolute" style = {{right: '105px', top: '40px'}}>
                <ParkName name = {"Riverway"} text={text[park.Riverway]} open={open} setOpen={setOpen} index={park.Riverway}/>
            </div>
            <br/>
        </div>
    );
};