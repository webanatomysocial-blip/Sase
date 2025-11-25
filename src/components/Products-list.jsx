// src/components/Products-list.jsx
import { useState } from 'react';
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
    Beige: '#F5F5DC',
};

const ProductsList = () => {


    // ---------- PRODUCTS ----------
    // Inside ProductsList component, replace the flat products array with this:
    const productCategories = [
        {
            title: "SASE Coupe Series",
            products: [
                {
                    id: 1,
                    title: '5 Door – SCOS01',
                    description: "Compact models designed for independent residents/villas ",
                    imagesByColor: { Green: a1, Brown: a2, Black: a3, Blue: a4, Beige: a4 },
                    colors:
                        [
                            'Green',
                            'Brown',
                            'Black',
                            'Blue',
                            'Beige'
                        ],
                    backgroundColor: '#FFF5EA'
                },

                {
                    id: 2,
                    description: "Compact models designed for independent residents/villas ",
                    title: '6  Door – SCOS02', imagesByColor: { Green: b1, Brown: b2, Black: b3, Blue: b4, Beige: b4 }, colors: ['Green', 'Brown', 'Black', 'Blue', 'Beige']
                },
            ]
        },
        {
            title: "SASE Capacious Series ",
            products: [
                { id: 4,description: "Models designed for large spaces such as educational institutes, Malls, Apartments and workspaces", title: '32 Door – SCAS01', imagesByColor: { Green: d1, Brown: d2, Black: d3, Blue: d4, Beige: d4 }, colors: ['Green', 'Brown', 'Black', 'Blue', 'Beige'] },


                { id: 7, title: '48  Door SCAS02',description: "Models designed for large spaces such as educational institutes, Malls, Apartments and workspaces ", imagesByColor: { Green: g1, Brown: g2, Black: g3, Blue: g4, Beige: g4 }, colors: ['Green', 'Brown', 'Black', 'Blue', 'Beige'], backgroundColor: '#FFF5EA', span: 1 },
            ]
        },
        {
            title: "SASE Median Serie",
            products: [
                { id: 3, description: "Models designed for maximum utility within limited spaces", title: '17 Door – SMS02', imagesByColor: { Green: c1, Brown: c2, Black: c3, Blue: c4, Beige: c4 }, colors: ['Green', 'Brown', 'Black', 'Blue', 'Beige'], backgroundColor: '#FFF5EA' },
                  { id: 6, description: "Compact models designed for independent residents/villas ", title: '19 Door– SMS01', imagesByColor: { Green: f1, Brown: f2, Black: f3, Blue: f4, Beige: f4 }, colors: ['Green', 'Brown', 'Black', 'Blue', 'Beige'],  },
               
            ]
        },
        {
            title: "SASE Conventional Serie",
            products: [
                 { id: 5, description: "This product is designed for medium-sized workspaces with moderate number of use cases", title: '24-Door Add-On Locker (SCS01)', imagesByColor: { Green: e1, Brown: e2, Black: e3, Blue: e4, Beige: e4 }, colors: ['Green', 'Brown', 'Black', 'Blue', 'Beige'],  },
              
            ]
        }
    ];

    // ---------- STATE ----------
    // const [selectedColors, setSelectedColors] = useState({});

    const [selectedColors, setSelectedColors] = useState(() => {
        const defaults = {};
        productCategories.forEach(cat => {
            cat.products.forEach(p => {
                defaults[p.id] = 'Green';
            });
        });
        return defaults;
    });





    // ---------- NEW: ZOOM LENS STATE ----------
    const [hoverState, setHoverState] = useState({}); // This was missing!



    // ---------- NEW: IMAGE HOVER HANDLER ----------
    const handleImageHover = (e, idx) => {
        const img = document.getElementById(`product-img-${idx}`);
        if (!img) return;

        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        const lensX = x;
        const lensY = y;

        // Position the 200×200 preview box near the cursor
        let previewX = x + 80;
        let previewY = y - 160;

        // Keep preview inside image bounds roughly
        if (previewX + 200 > rect.width) previewX = rect.width - 220;
        if (previewX < 20) previewX = 20;
        if (previewY < 20) previewY = 20;

        setHoverState(prev => ({
            ...prev,
            [idx]: {
                lensX,
                lensY,
                bgPos: `${xPercent}% ${yPercent}%`,
                previewX,
                previewY,
                active: true
            }
        }));
    };

    // ---------- MOUSE LEAVE HANDLER ----------
    const handleMouseLeave = (idx) => {
        setHoverState(prev => ({
            ...prev,
            [idx]: null
        }));
    };




    // ---------- RENDER ----------
    return (
        <section className="products-list-section">
            {/* <p className="head-text products-list-title">Our Products</p> */}
            <div className="products-list-container">

                {productCategories.map((category, catIdx) => (
                    <div key={catIdx} className="product-category">

                        {/* Category Heading */}
                        <h2 className="head-text" style={{
                            padding: "0px 0px 30px 60px"
                        }} >{category.title}</h2>

                        {/* Category Grid */}
                        <div className="products-grid">
                            {category.products.map((p) => {
                                const activeColour = selectedColors[p.id] || 'Green';
                                const activeImg = p.imagesByColor[activeColour];

                                return (
                                    <div
                                        key={p.id}
                                        className={`product-card ${p.span === 2 ? 'span-2' : 'span-1'} ${p.centered ? 'centered' : ''}`}
                                        style={{ backgroundColor: p.backgroundColor }}
                                    >
                                        {/* IMAGE WITH ZOOM (Desktop) */}
                                        <div
                                            className="product-image only-windows"
                                            onMouseMove={(e) => handleImageHover(e, p.id)}
                                            onMouseLeave={() => handleMouseLeave(p.id)}
                                        >
                                            <img
                                                src={activeImg}
                                                alt={`${p.title} - ${activeColour}`}
                                                className="locker-img"
                                                id={`product-img-${p.id}`}
                                            />
                                            <div className="magnifying-lens" style={{
                                                left: hoverState[p.id]?.lensX,
                                                top: hoverState[p.id]?.lensY,
                                                opacity: hoverState[p.id]?.active ? 1 : 0,
                                                transform: 'translate(-50%, -50%)'
                                            }} />
                                            <div className="zoom-preview" style={{
                                                backgroundImage: `url(${activeImg})`,
                                                backgroundPosition: hoverState[p.id]?.bgPos || 'center',
                                                backgroundSize: '300%',
                                                left: hoverState[p.id]?.previewX,
                                                top: hoverState[p.id]?.previewY,
                                                opacity: hoverState[p.id]?.active ? 1 : 0
                                            }} />
                                        </div>

                                        {/* Mobile Image */}
                                        <div className="product-image only-mobile">
                                            <img src={activeImg} alt={p.title} className="locker-img" />
                                        </div>

                                        {/* Product Info */}
                                        <div className="product-info">
                                            <h3 className="small-head-text">{p.title}</h3>
                                            <p className= "para-text">
                                                {p.description || "Premium quality locker with modern design and durable finish."}
                                            </p>

                                            <div className="color-options">
                                                <span className="color-label">Color Options</span>
                                                <div className="colors">
                                                    {p.colors.map(c => {
                                                        const hex = COLOR_PALETTE[c];
                                                        const isActive = selectedColors[p.id] === c;
                                                        return (
                                                            <div
                                                                key={c}
                                                                className={`color-item ${isActive ? 'active' : ''}`}
                                                                onClick={() => setSelectedColors(prev => ({ ...prev, [p.id]: c }))}
                                                            >
                                                                <div className="color-swatch" style={{ backgroundColor: hex }} title={c} />
                                                                <span className="color-name">{c}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <button className="quote-btn">
                                                Get your quote <span className="arrow"><FaWhatsapp /></span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsList;