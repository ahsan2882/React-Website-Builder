/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import FooterEditCss from './FooterEdit.module.css'
import contactusAss1 from '../assets/editingScreenAssets/contactusEditAssets/contactus1.png'
import contactusAss2 from '../assets/editingScreenAssets/contactusEditAssets/contactus2.png'
import contactusAss3 from '../assets/editingScreenAssets/contactusEditAssets/contactus3.png'
import contactusAss4 from '../assets/editingScreenAssets/contactusEditAssets/contactus4.png'
import faqsAss1 from '../assets/editingScreenAssets/faqsEditAssets/faqs1.png'
import faqsAss2 from '../assets/editingScreenAssets/faqsEditAssets/faqs2.JPG'
import faqsAss3 from '../assets/editingScreenAssets/faqsEditAssets/faqs3.JPG'
import faqsAss4 from '../assets/editingScreenAssets/faqsEditAssets/faqs4.JPG'
import footerAss1 from '../assets/editingScreenAssets/footerEditAssets/footer1.JPG'
import footerAss2 from '../assets/editingScreenAssets/footerEditAssets/footer2.JPG'
import footerAss3 from '../assets/editingScreenAssets/footerEditAssets/footer3.JPG'
import footerAss4 from '../assets/editingScreenAssets/footerEditAssets/footer4.JPG'
import pricingAss1 from '../assets/editingScreenAssets/pricingEditAssets/pricing1.JPG'
import pricingAss2 from '../assets/editingScreenAssets/pricingEditAssets/pricing2.JPG'
import pricingAss3 from '../assets/editingScreenAssets/pricingEditAssets/pricing3.JPG'
import pricingAss4 from '../assets/editingScreenAssets/pricingEditAssets/pricing4.JPG'
import pricingAss5 from '../assets/editingScreenAssets/pricingEditAssets/pricing5.JPG'
import serviceAss1 from '../assets/editingScreenAssets/serviceEditAssets/service1.JPG'
import serviceAss2 from '../assets/editingScreenAssets/serviceEditAssets/service2.JPG'
import serviceAss3 from '../assets/editingScreenAssets/serviceEditAssets/service3.JPG'
import serviceAss4 from '../assets/editingScreenAssets/serviceEditAssets/service4.JPG'
import serviceAss5 from '../assets/editingScreenAssets/serviceEditAssets/service5.JPG'
import serviceAss6 from '../assets/editingScreenAssets/serviceEditAssets/service6.png'
import socialAss1 from '../assets/editingScreenAssets/socialEditAssets/social1.png'
import socialAss2 from '../assets/editingScreenAssets/socialEditAssets/social2.png'
import socialAss3 from '../assets/editingScreenAssets/socialEditAssets/social3.png'
import testimonialAss1 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial1.png'
import testimonialAss2 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial2.png'
import testimonialAss3 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial3.png'
import testimonialAss4 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial4.JPG'


export default function FooterEdit({setOverlay}) {
    const [isClicked, setIsClicked] = useState(false);
    const onClicked = () => setIsClicked((state) => !state);
    const [footerState, setFooterState] = useState(false);
    const footerClicked = () => setFooterState((state) => !state);
    useEffect(() => {
        if(footerState){
            setTestimonialState(false);
            setFaqState(false);
            setContactState(false);
            setSocialState(false);
            setPricingState(false);
            setServicesState(false);
        }
    }, [footerState]);
    const [testimonialState, setTestimonialState] = useState(false);
    const testimonialClicked = () => setTestimonialState((state) => !state);
    useEffect(() => {
        if (testimonialState) {
            setFooterState(false);
            setFaqState(false);
            setContactState(false);
            setSocialState(false);
            setPricingState(false);
            setServicesState(false);
        }
    }, [testimonialState]);
    const [faqState, setFaqState] = useState(false);
    const faqClicked = () => setFaqState((state) => !state);
    useEffect(() => {
        if (faqState) {
            setTestimonialState(false);
            setFooterState(false);
            setContactState(false);
            setSocialState(false);
            setPricingState(false);
            setServicesState(false);
        }
    }, [faqState]);
    const [contactState, setContactState] = useState(false);
    const contactClicked = () => setContactState((state) => !state);
    useEffect(() => {
        if (contactState) {
            setTestimonialState(false);
            setFaqState(false);
            setFooterState(false);
            setSocialState(false);
            setPricingState(false);
            setServicesState(false);
        }
    }, [contactState]);
    const [socialState, setSocialState] = useState(false);
    const socialClicked = () => setSocialState((state) => !state);
    useEffect(() => {
        if (socialState) {
            setTestimonialState(false);
            setFaqState(false);
            setContactState(false);
            setFooterState(false);
            setPricingState(false);
            setServicesState(false);
        }
    }, [socialState]);
    const [pricingState, setPricingState] = useState(false);
    const pricingClicked = () => setPricingState((state) => !state);
    useEffect(() => {
        if (pricingState) {
            setTestimonialState(false);
            setFaqState(false);
            setContactState(false);
            setSocialState(false);
            setFooterState(false);
            setServicesState(false);
        }
    }, [pricingState]);
    const [servicesState, setServicesState] = useState(false);
    const servicesClicked = () => setServicesState((state) => !state);
    useEffect(() => {
        if (servicesState) {
            setTestimonialState(false);
            setFaqState(false);
            setContactState(false);
            setSocialState(false);
            setPricingState(false);
            setFooterState(false);
        }
    }, [servicesState]);
    useEffect(() => {
        if (servicesState || pricingState || socialState || faqState || footerState || contactState || testimonialState) {
            setOverlay(true);
        } else{
            setOverlay(false);
        }
    }, [servicesState, pricingState, socialState, faqState, footerState, contactState, testimonialState, setOverlay]);

    return (
        <>
            <button className={`fixed left-8 bottom-4 flex justify-center items-center h-12 w-12 rounded-full ${FooterEditCss['navToggle']}`} onClick={onClicked}>
                {isClicked ? <i className={`fas fa-times  py-3 px-4 text-white bg-red-500 rounded-full flex justify-center items-center ${FooterEditCss['i-circle']}`}></i> : <i className={`fas fa-times py-3 px-4 text-white bg-blue-400 rounded-full flex justify-center items-center ${FooterEditCss['i-circle']} ${FooterEditCss.open}`}></i>}
            </button>
            <nav>
                <ul className={FooterEditCss.mainNav}
                    style={isClicked
                        ? { transform: "translateX(0)" }
                        : null
                    }>
                    <li className={`${FooterEditCss.mainNavLink} `}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`}>Header</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`}>Navigation</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={footerClicked}>Footer</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`} id="testimonialState">
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={testimonialClicked}>Testimonials</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`}>Forms</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={faqClicked}>FAQs</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={contactClicked}>Contact</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={socialClicked}>Social icons</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`}>Sliders</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`}>Main Section</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={pricingClicked}>Pricing</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={servicesClicked}>Services</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`}>Accreditation</button>
                    </li>
                </ul>
            </nav>
            <div className={`${FooterEditCss.assetList}`}
                style={footerState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setFooterState(false)}
                >
                <ul className={`${FooterEditCss.footerMenu}`}>
                    <li><img src={footerAss1} alt="Footer Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={footerAss2} alt="Footer Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={footerAss3} alt="Footer Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={footerAss4} alt="Footer Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.assetList}`}
                style={testimonialState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setTestimonialState(false)}
                >
                <ul className={`${FooterEditCss.testimonialMenu}`}>
                    <li><img src={testimonialAss1} alt="Testimonial Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={testimonialAss2} alt="Testimonial Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={testimonialAss3} alt="Testimonial Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={testimonialAss4} alt="Testimonial Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.assetList}`}
                style={faqState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setFaqState(false)}>
                <ul className={`${FooterEditCss.faqsMenu}`}>
                    <li><img src={faqsAss1} alt="FAQ Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={faqsAss2} alt="FAQ Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={faqsAss3} alt="FAQ Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={faqsAss4} alt="FAQ Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.assetList}`}
                style={contactState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setContactState(false)}
                >
                <ul className={`${FooterEditCss.contactusMenu}`}>
                    <li><img src={contactusAss1} alt="Contact Us Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={contactusAss2} alt="Contact Us Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={contactusAss3} alt="Contact Us Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={contactusAss4} alt="Contact Us Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.assetList}`}
                style={socialState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setSocialState(false)}
                >
                <ul className={`${FooterEditCss.socialMenu}`}>
                    <li><img src={socialAss1} alt="Social Icon Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={socialAss2} alt="Social Icon Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={socialAss3} alt="Social Icon Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.assetList}`}
                style={pricingState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setPricingState(false)}
                >
                <ul className={`${FooterEditCss.pricingMenu}`}>
                    <li><img src={pricingAss1} alt="Pricing Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={pricingAss2} alt="Pricing Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={pricingAss3} alt="Pricing Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={pricingAss4} alt="Pricing Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={pricingAss5} alt="Pricing Asset 5" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.assetList}`}
                style={servicesState
                    ? { transform: "translateX(0%)" }
                    : null
                }
                onMouseLeave={() => setServicesState(false)}
                >
                <ul className={`${FooterEditCss.serviceMenu}`}>
                    <li><img src={serviceAss1} alt="Services Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss2} alt="Services Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss3} alt="Services Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss4} alt="Services Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss5} alt="Services Asset 5" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss6} alt="Services Asset 6" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
        </>
    )
}