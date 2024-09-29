import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"
import defaultImage from "../img/defaultImage.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(149, 217, 218)", "rgb(109, 214, 218)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ravi",
    lastName: "Liyanaarachchi",
    initials: "RL", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Graduate Mechatronics Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🧠',
            text: 'Fueled by curiosity'
        },
        {
            emoji: '🌎',
            text: 'Based in Sydney, AU'
        },
        {
            emoji: "💼",
            text: "Intern Engineer at Bromic"
        },
        {
            emoji: "📧",
            text: "ravi@rav.engineering"
        }
    ],
    socials: [
        // {
        //     link: "https://www.facebook.com/ravi.liyanaarachchi/",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://github.com/itsRav34",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/ravil34/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi there! I am a final year student studying a B(Hons) Engineering in Mechatronics and Bachelor of Medical Science. I am passionate about the potential of robotics to revolutionize the medical field.", 
    bio1: "My journey has been fuelled by a deep curiosity about how advanced engineering can improve patient outcomes, streamline medical procedures, and push the boundaries of what’s possible in healthcare.", 
    bio2: "From designing precise robotic systems to exploring cutting-edge medical technologies, I am committed to merging these fields to create solutions that are both innovative and impactful. Whether it's developing assistive devices, enhancing surgical precision, or advancing medical research, my mission is to contribute to a future where robotics plays a vital role in improving lives.",
    skills:
        {
            proficientWith: ['C++', 'SOLIDWORKS (+PDM)', 'ROS', 'MATLAB', '3D Printing', 'Github', 'Arudino', 'Microsoft Office Suite'],
            exposedTo: ['Fusion 360', 'Python', 'Adobe Suite', 'Mathematica', "Intel FPGA"]
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Gym',
            emoji: '🏋️‍♂️'
        },
        {
            label: 'Gaming',
            emoji: '🖱️'
        },
        {
            label: 'F1',
            emoji: '🏎️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],

    cvLink: "https://github.com/itsRav34/itsrav34.github.io/raw/master/src/img/20240908%20CV%20Ravindra%20Liyanaarachchi.pdf",
    coverLetterLink: "https://github.com/itsRav34/itsrav34.github.io/blob/master/src/img/coverletter_rev2.pdf",
    coverLetter_rev1: "https://github.com/itsRav34/itsrav34.github.io/blob/master/src/img/coverletter_rev1.pdf",

    ref1_rev1: "https://github.com/itsRav34/itsrav34.github.io/raw/master/src/img/ref1_rev1.pdf",
    ref1_rev2: "https://github.com/itsRav34/itsrav34.github.io/raw/master/src/img/ref1_rev2.pdf",

    ref2_rev1: "https://github.com/itsRav34/itsrav34.github.io/blob/master/src/img/ref2_rev1.pdf",
    ref2_rev2: "https://github.com/itsRav34/itsrav34.github.io/blob/master/src/img/ref2_rev2.pdf",


    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ROS Autonomous Car (WIP)",
        },
        {
            title: "ROS Autonomous Drone (WIP)",
        },
        {
            title: "Robotic Arm Simulation",
            videoUrl: "https://www.youtube.com/embed/N-AElEZzVfw?si=rQ4h2w2qI21-VoeD",
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            // image: mock1
        },
        {
            title: "Dobot Control and Grasping",
            videoUrl: "https://www.youtube.com/embed/w4Vg-aoBjok",
            // image: mock2
        },
        {
            title: "Warman Design & Build Competition 2020 (WIP)",
            source: "",
            videoUrl: "",
            // image: mock3
        },
        {
            title: "Wind Powered Vehicle (WIP)",
        }

        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}