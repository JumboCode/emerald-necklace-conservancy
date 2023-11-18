'use client'

import React from "react";
import {useState} from 'react';

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

            <h2>Map</h2>
            <br/>
            <ul>
                <li>
                    <a href="/franklin-park"> Franklin Park </a>
                </li>
                <li>
                    <a href="/arnold-arboretum"> Arnold Arboretum </a>
                </li>
                <li>
                    <a href="/jamaica-pond"> Jamaica Pond </a>
                </li>
                <li>
                    <a href="/olmsted-park"> Olmstead Park </a>
                </li>
                <li>
                    <a href="/riverway"> Riverway </a>
                </li>
                <li>
                    <a href="/back-bay-fens"> Back Bay Fens </a>
                </li>
                <li>
                    <a href="/public-garden-and-commons"> Public Garden and Commons </a>
                </li>
            </ul>
        </div>
    );
};