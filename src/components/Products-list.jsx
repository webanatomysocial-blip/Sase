// src/components/Products-list.jsx
import React, { useState } from 'react';
import '../css/Products-list.css';
import { FaWhatsapp } from "react-icons/fa";

// import { HiOutlineArrowLeft } from "react-icons/hi";



// ----- IMAGES (replace with real ones) -----
// A Folder
import a3 from '../assets/Products-image/a/1-min.png';
import a2 from '../assets/Products-image/a/2-min.png';
import a1 from '../assets/Products-image/a/3-min.png';
import a4 from '../assets/Products-image/a/4-min.png';

// B Folder
import b3 from '../assets/Products-image/b/1-min.png';
import b2 from '../assets/Products-image/b/2-min.png';
import b1 from '../assets/Products-image/b/3-min.png';
import b4 from '../assets/Products-image/b/4-min.png';

// C Folder
import c3 from '../assets/Products-image/c/1-min.png';
import c2 from '../assets/Products-image/c/2-min.png';
import c1 from '../assets/Products-image/c/3-min.png';
import c4 from '../assets/Products-image/c/4-min.png';

// D Folder
import d3 from '../assets/Products-image/d/1-min.png';
import d2 from '../assets/Products-image/d/2-min.png';
import d1 from '../assets/Products-image/d/3-min.png';
import d4 from '../assets/Products-image/d/4-min.png';

// E Folder
import e3 from '../assets/Products-image/e/1-min.png';
import e2 from '../assets/Products-image/e/2-min.png';
import e1 from '../assets/Products-image/e/3-min.png';
import e4 from '../assets/Products-image/e/4-min.png';

// F Folder
import f3 from '../assets/Products-image/f/1-min.png';
import f2 from '../assets/Products-image/f/2-min.png';
import f1 from '../assets/Products-image/f/3-min.png';
import f4 from '../assets/Products-image/f/4-min.png';

// G Folder
import g3 from '../assets/Products-image/g/1-min.png';
import g2 from '../assets/Products-image/g/2-min.png';
import g1 from '../assets/Products-image/g/3-min.png';
import g4 from '../assets/Products-image/g/4-min.png';







const COLOR_PALETTE = {
    'Green': '#1D2E28 ',
    'Brown': '#231512 ',
    Black: '#000000',
    Blue: '#000116 ',
};

const ProductsList = () => {
    // ---------- PRODUCTS ----------
    const products = [
        // Row 1 – 3 equal cards
        {
            id: 1,
            title: '5 Module Locker',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': a1, 'Brown': a2, Black: a3, Blue: a4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            backgroundColor: '#FFF5EA',
            span: 1,
        },
        {
            id: 2,
            title: '6 Module Locker',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': b1, 'Brown': b2, Black: b3, Blue: b4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            span: 1,
        },
        {
            id: 3,
            title: '5 Module Locker',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': c1, 'Brown': c2, Black: c3, Blue: c4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            backgroundColor: '#FFF5EA',
            span: 1,
        },

        // Row 2 – Wide D (2 cols) + E (1 col)
        {
            id: 4,
            title: 'Wide Locker D',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': d1, 'Brown': d2, Black: d3, Blue: d4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            margintop: '50px',
            wideDescription: true,   // ← new flag
            paddingLeft: '60px',
            // optionsWidth: '10%',
            span: 2,
        },
        {
            id: 5,
            title: 'Locker E',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': e1, 'Brown': e2, Black: e3, Blue: e4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            span: 1,
            backgroundColor: '#FFF5EA',
            paddingTop: '50px'
        },

        // Row 3 – F (1 col) + Wide G (2 cols) → reversed
        {
            id: 6,
            title: 'Locker F',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': f1, 'Brown': f2, Black: f3, Blue: f4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            backgroundColor: '#FFF5EA',
            paddingTop: '50px',


            span: 1,
        },
        {
            id: 7,
            title: 'Wide Locker G',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            imagesByColor: { 'Green': g1, 'Brown': g2, Black: g3, Blue: g4 },
            colors: ['Green', 'Brown', 'Black', 'Blue'],
            margintop: '50px',
            wideDescription: true,   // ← new flag
            // optionsWidth: '10%',

            span: 2,
        },
    ];

    // ---------- STATE ----------
    const [selectedColors, setSelectedColors] = useState(
        Object.fromEntries(products.map((_, i) => [i, 'Green']))
    );

    const handleColorClick = (idx, colour) => {
        setSelectedColors(p => ({ ...p, [idx]: colour }));
    };

    // ---------- RENDER ----------
    return (
        <section className="products-list-section">
            <p className="head-text products-list-title">
                Our products
            </p>
            <div className="products-list-container">
                <div className="products-grid">
                    {products.map((p, idx) => {
                        const activeColour = selectedColors[idx];
                        const activeImg = p.imagesByColor[activeColour];
                        const spanClass = p.span === 2 ? 'span-2' : 'span-1';

                        return (
                            <div
                                key={p.id}
                                className={`product-card ${spanClass}`}
                                style={{ backgroundColor: p.backgroundColor, marginTop: p.margintop, paddingTop: p.paddingTop }}
                            >
                                {/* Image */}
                                <div className="product-image" style={{ paddingLeft: p.paddingLeft }}>
                                    <img src={activeImg} alt={`${p.title} - ${activeColour}`} className="locker-img" />
                                </div>

                                {/* Info */}
                                <div className="product-info">
                                    <h3 className="small-head-text">{p.title}</h3>
                                    <p
                                        className={`para-text ${p.wideDescription ? 'wide-desc' : ''}`}
                                    >
                                        {p.description}
                                    </p>

                                    {/* Color Options */}
                                    <div className="color-options">
                                        <span className="color-label">Color Options</span>
                                        <div className="colors">
                                            {p.colors.map(c => {
                                                const hex = COLOR_PALETTE[c];
                                                const isActive = selectedColors[idx] === c;
                                                return (
                                                    <div key={c} className={`color-item ${isActive ? 'active' : ''}`} style={{ width: p.optionsWidth }}>
                                                        <div
                                                            className="color-swatch"
                                                            style={{ backgroundColor: hex }}
                                                            onClick={() => handleColorClick(idx, c)}
                                                            title={c}
                                                        />
                                                        <span className="color-name">{c}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button className="quote-btn">
                                        Get your quote <span className="arrow"><FaWhatsapp />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductsList;