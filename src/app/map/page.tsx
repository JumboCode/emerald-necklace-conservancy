'use client'

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


export default function MapPage() {
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
                <ParkName name = {"Arnold Arboretum"}/>
            </div>
            <div className="absolute" style ={{right: '165px', top: '425px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{right: '55px', top: '530px'}}>
                <ParkName name = {"Back Bay Fens"}/>
            </div>
            <div className="absolute" style ={{bottom: "160px", left:"380px"}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{bottom: "70px", left:"380px"}}>
                <ParkName name = {"Franklin Park"}/>
            </div>
            <div className="absolute" style ={{left: '520px', top: '50px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style ={{left: '200px', top: '40px'}}>
                <ParkName name = {"Jamaica Pond"}/>
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
                <ParkName name = {"Olmsted Park"}/>
            </div>
            <div className="absolute" style ={{right: '160px', top: '130px'}}>
                <MapPin size = {75}/>
            </div>
            <div className="absolute" style={{ right: "47px", top: "160px" }}>
                <img src="/map_images/blue_heron.png" alt="blue_heron" width={100} />
            </div>
            <div className = "absolute" style = {{right: '105px', top: '40px'}}>
                <ParkName name = {"Riverway"}/>
            </div>
            <br/>
        </div>
    );
};