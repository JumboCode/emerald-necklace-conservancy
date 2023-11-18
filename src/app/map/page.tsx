'use client'

import React from "react";
import {useState} from 'react';
// import map from './assets/map.png';
import mapPin from './assets/map-pin.png';
import blueHeron from './assets/blue_heron.png';
import bonsai from './assets/bonsai.png';
import camorant from './assets/camorant.png';
import dove_tree from './assets/dove_tree.png';
import giraffe from './assets/giraffe.png';
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
        <div >
            <div className="absolute" style ={{left: '275px', top: '110px'}} >  
                <MapPin size = {40}/>
            </div>
            <div className="absolute" style ={{left: '180px', top: '180px'}}>                
                <ParkName name = {"Arnold"}/>
            </div>
            <div className="absolute" style ={{right: '270px', top: '410px'}}>
                <MapPin size = {40}/>
            </div>
            <div className="absolute" style ={{right: '170px', top: '470px'}}>                
                <ParkName name = {"Back Bay Fens"}/>
            </div>
            <div className="absolute" style ={{bottom: "150px", left:"520px"}}>
                <MapPin size = {40}/>
            </div>
            <div className="absolute" style ={{bottom: "80px", left:"430px"}}>                
                <ParkName name = {"Franklin"}/>
            </div>
            <div className="absolute" style ={{left: '650px', top: '0px'}}>
                <MapPin size = {40}/>
            </div>
            <div className="absolute" style ={{left: '550px', top: '60px'}}>
                <ParkName name = {"Jamaica Pond"}/> 
            </div>
            <div className="absolute" style ={{right: '510px', top: '40px'}}>
                <MapPin size = {40}/>
            </div>
            <div className="absolute" style ={{right: '410px', top: '100px'}}>
                <ParkName name = {"Olmsted"}/>
            </div>
            <div className="absolute" style ={{right: '190px', top: '30px'}}>
                <MapPin size = {40}/>
            </div>
            <div className = "absolute" style = {{right: '90px', top: '90px'}}>
                <ParkName name = {"Riverway"}/>
            </div>
            <br/>
        </div>
    );
};