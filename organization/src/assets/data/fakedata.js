
import heroImg from '../images/banners/hero.png'

export const heroSection = {
    title: 'Building a Brighter World Through Care and Support',
    subtitle: 'Supporting Widows and Orphans on Their Journey Forward',
    image: heroImg,
    button:"Let's Start"
}

import aboutImg from '../images/about.png'

export const About ={
    title: 'About Us',
    text: ' we are dedicated to creating a brighter future for widows and orphans in need. Our mission is to provide a loving, supportive environment where vulnerable individuals can find hope, healing, and the opportunity to thrive. We offer a safe home, quality education, life skills training, and emotional support to empower each person on their journey to a better life. We believe in the power of compassion and community to transform lives, and our dedicated team works tirelessly to ensure every child and widow in our care feels valued and loved. Together, we strive to restore dignity, build self-sufficiency, and create lasting change, one life at a time.',
    image:aboutImg
}



export const achivements = {
    title:"Achivements",

    orphanageTitle:"Orphanage Rehabilitation",
    orphanageSupport:[
        {title:"Total Number of Orphans Rehabilitated", value:"100"},
        {title:"Number of Children Currently Cared For", value:"500"},
        {title:"Number of Orphanages Closed", value:"30"},
        {title:"Health and Medical Support Provided", value:"200"},
        {title:"Extracurricular Activities and Skills Training:", value:"400"}
    ],
    widowstitle:"Widows Receiving Support",
    widowSupport:[
        {title:"Number of Widows Reintegrated", value:"650"},
        {title:"Total Number of Widows Supported", value:"450"},
        {title:"Number of Widows Rehabilitated", value:"80"},
        {title:"Small Businesses or Income-Generating Projects Started", value:"10"},
        {title:"Extracurricular Activities and Skills Training:", value:"330"},
        {title:"Number of Widows Retrained", value:"150"},
    ]
}




// programme data

export const programme ={
    title: 'Our Programme',
    text: 'We offer a wide range of programsme designed to support our widows and orphans. Our primary focus is on education, healthcare, and shelter, as well as emotional support and vocational training. Our programsme cater to different age groups, abilities, and socioeconomic backgrounds, ensuring that every child and widow feels valued and loved. Together, we strive to restore dignity, build self-sufficiency, and create lasting change, one life at a time.',
    itemList:[
        {title:"Shelter and Care Program"},
        {title:"Education Program"},
        {title:"Empowerment and Entrepreneurship Program"},
        {title:"Life Skills Training Program"},
        {title:"Counseling and Emotional Support Program"},
        {title:"Health and Wellness Program"},
        {title:"Reintegration and Adoption Program"},
        {title:"Spiritual and Moral Development Program"}
    ],

   
}




// importing image 
import widow1 from '../images/gallary/widows (1).jpg'
import widow2 from '../images/gallary/widows (2).jpg'
import widow3 from '../images/gallary/widows (3).jpg'
import widow4 from '../images/gallary/widows (4).jpg'
import widow5 from '../images/gallary/widows (5).jpg'


import orphanage1 from '../images/gallary/orphanage (1).jpg'
import orphanage2 from '../images/gallary/orphanage (2).jpg'
import orphanage3 from '../images/gallary/orphanage (3).jpg'
import orphanage4 from '../images/gallary/orphanage (4).jpg'
import orphanage5 from '../images/gallary/orphanage (5).jpg'



export const Gallary = [
            {image:widow1, alt:"widow1", catagory:"widows"},
            {image:orphanage1, alt:"orphan1", catagory:"orphanage"},
            {image:widow2, alt:"widow2", catagory:"widows"},
            {image:orphanage3, alt:"orphan4", catagory:"orphanage"},
            {image:widow3, alt:"widow3", catagory:"widows"},
            {image:widow4, alt:"widow4", catagory:"widows"},
            {image:orphanage4, alt:"orphan3", catagory:"orphanage"},
            {image:widow5, alt:"widow5", catagory:"widows"},
            {image:orphanage2, alt:"orphan2", catagory:"orphanage"},
            {image:orphanage5, alt:"orphan5", catagory:"orphanage"},
        ]

export const GallaryVideos = [
    {image:"https://www.youtube.com/watch?v=l8QMO7DM5vc&pp=ygUGd2lkb3dz", alt:"orphan5", catagory:"video"},
    {image:"https://www.youtube.com/watch?v=g1FklcCOxEU&pp=ygUGd2lkb3dz", alt:"orphan5", catagory:"video"},
    {image:'https://www.youtube.com/watch?v=9_KlDtmhSYY&pp=ygUJb3JwaGFuYWdl', alt:"orphan5", catagory:"video"},
    {image:"https://www.youtube.com/watch?v=2lLZedgFJsw&pp=ygUJb3JwaGFuYWdl", alt:"orphan5", catagory:"video"},
    {image:"https://www.youtube.com/watch?v=82yTzlXeIwE&pp=ygUGd2lkb3dz", alt:"orphan5", catagory:"video"},
]



import logo1 from "../images/sponsor/01.png"
import logo2 from "../images/sponsor/02.png"
import logo3 from "../images/sponsor/03.png"
import logo4 from "../images/sponsor/04.png"
import logo5 from "../images/sponsor/05.png"
import logo6 from "../images/sponsor/06.png"


export const sponsor = [
    {
        image: logo1,
        company: 'Sponsor 1'
    }, {
        image: logo2,
        company: 'Sponsor 2'
    },
    {
        image: logo3,
        company: 'Sponsor 3'
    },{
        image: logo4,
        company: 'Sponsor 4'
    },{
        image: logo5,
        company: 'Sponsor 5'
    },
    {
        image: logo6,
        company: 'Sponsor 6'
    }
]







export const missionVission = {
        mission:{
            title:"Mission",
            text:"Our mission is to provide compassionate support, education, and empowerment to widows and orphaned children, ensuring they have the resources and opportunities to live with dignity and hope. We are dedicated to creating a nurturing environment that meets their basic needs, fosters their growth, and helps them build a brighter future."
        },
        image:{
            // image:missionImg,
            alt:"mission"
        },
        vission:{
            title:"Vision",
            text:"Our vision is a world where widows and orphans are valued and supported, with access to education, healthcare, and opportunities for a fulfilling life. We strive to create a community where every widow and orphan can overcome their challenges, achieve their potential, and contribute positively to society."
        }
}