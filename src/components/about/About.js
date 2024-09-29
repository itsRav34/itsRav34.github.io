import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
            <p>{info.bio1}
            </p>
            <p>{info.bio2}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    // New CV Section
    function cvText() {
        return <>
            <p><span style={{color: info.baseColor}}>Download my CV <span
                className={Style.green}>(main)</span> $ </span>
                <a href={info.cvLink} target="_blank" rel="noopener noreferrer">
                    Click here to download my CV
                </a>
            </p>
        </>
    }

    function CoverLetterText() {
        return <>
            <p><span style={{color: info.baseColor}}>41055 Professional Experience Review: Sample Cover Letter <span
                className={Style.green}>(main)</span> $ </span>
                <a href={info.coverLetterLink} target="_blank" rel="noopener noreferrer">
                    Click here to download my Cover Letter
                </a>
            </p>
            <p>
            Previous version:
            </p>
            <p>
            <a href={info.coverLetter_rev1} target="_blank" rel="noopener noreferrer">
                    Cover_letter_rev1
                </a>
            </p>
        </>
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
            <Terminal text={cvText()}/> {/* Add this line for the CV section */}
            <Terminal text={CoverLetterText()}/>
        </Box>
    )
}
