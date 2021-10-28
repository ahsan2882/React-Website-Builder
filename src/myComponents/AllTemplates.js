import { About1 } from "../template1components/About1";
import { Footer1 } from "../template1components/Footer1";
import { Guard1 } from "../template1components/Guard1";
import { Header1 } from "../template1components/Header1";
import { News1 } from "../template1components/News1";
import { Prizing1 } from "../template1components/Prizing1";
import { Program1 } from "../template1components/Program1";
import { Service1 } from "../template1components/Service1";
import Contact2 from "../template2components/template2contactcomponent/Contact2";
import Form2 from "../template2components/template2contactcomponent/Form2";
import Feedback2 from "../template2components/template2contactcomponent/Feedback2";
import Contact2Footer from "../template2components/template2contactcomponent/Contact2Footer";
import { Testimonials1 } from "../template1components/Testimonials1";
import { Navbar2 } from "../template2components/Navbar2";
import { Services2 } from "../template2components/Services2";
import { Pricing2 } from "../template2components/Pricing2";
import { Blog2}   from '../template2components/Blog2'
import {Client2 }  from '../template2components/Client2'
import {Guard2} from '../template2components/Guard2'
import About2bannercomponent from '../template2components/template2aboutcomponent/About2bannercomponent'
import About2Vision from '../template2components/template2aboutcomponent/About2Vision'
import About2service from '../template2components/template2aboutcomponent/About2service'
import {Program2} from '../template2components/Program2'
import { About2 } from "../template2components/About2";
import { Accreditation2 } from "../template2components/Accreditation2";
import { Footer2 } from "../template2components/Footer2";
import AboutUs4 from "../template4components/AboutUs4";
import Accreditation4 from "../template4components/Accreditation4";
import Blog4 from "../template4components/Blog4";
import BottomFooter4 from "../template4components/BottomFooter4";
import FooterContact4 from "../template4components/FooterContact4";
import Header4 from "../template4components/Header4";
import HeroSection4 from "../template4components/HeroSection4";
import Navigation4 from "../template4components/Navigation4";
import OurGuards4 from "../template4components/OurGuards4";
import Pricing4 from "../template4components/Pricing4";
import Services4 from "../template4components/Services4";
import Subscribe4 from "../template4components/Subscribe4";
import Services3 from '../template3components/Services3'
import Latestnews3 from '../template3components/Latestnews3'
import Ourprograms3 from '../template3components/Ourprograms3'
import About3 from'../template3components/About3'
import Accrediation3 from '../template3components/Accrediation3'
import Footer3 from '../template3components/Footer3'
import Guard3 from '../template3components/Guard3'

export let templateComponents = {
    template1Components: [Header1, Service1, Testimonials1, Prizing1, Guard1, News1, Program1, About1, Footer1],
    template2Components:{
        "Home": [Navbar2,Services2,Pricing2,Blog2,Client2,Guard2,Program2, About2,Accreditation2,Footer2],
        "About" : [About2bannercomponent,About2Vision,About2service,Pricing2,Guard2],
        "Contact": [Contact2,Form2,Feedback2,Contact2Footer]
    },
    template3Components: {
        "Home": [Services3,Latestnews3,Ourprograms3,Guard3,About3,Accrediation3,Footer3],
        "About" : [],
        "Contact": []
    },
    template4Components: {
        "Home": [Header4, Navigation4, HeroSection4, AboutUs4, Pricing4, Services4, OurGuards4, Blog4, Accreditation4, Subscribe4, FooterContact4, BottomFooter4],
        "About" : [Header4 , Navigation4, Services4],
        "Contact": [Header4 , Navigation4, AboutUs4]
    }

}