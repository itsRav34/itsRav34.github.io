import React from 'react';
import { info } from "../../info/Info";
import {Box} from "@mui/material";
import Terminal from "../../components/about/Terminal";
import Style from './Reflections.module.scss';

export default function Reflections({innerRef}) {
    function ref1() {
        return <>
            <p><span style={{color: info.baseColor}}>Apply principles of sustainability to create viable systems (A) <span
                className={Style.green}>(main)</span> $ </span>
                {"ls"}
            </p>
            <p>
            During my internship, I was given the significant task of redesigning the packaging for one of the company’s key products with the aim of improving its sustainability. This product was particularly heavy, which posed unique challenges in ensuring the new packaging design could provide sufficient impact resistance during transportation and handling. The company's objective was to find sustainable packaging solutions that did not compromise performance while aligning with its environmental goals. This added a layer of complexity to the project, as it required striking the right balance between durability and sustainability—an issue many industries face when transitioning to eco-friendly practices.
            </p>
            <p>
            The primary goal of my assignment was to research and propose sustainable material options from our suppliers, ensuring they met the necessary strength requirements to protect the heavy product during transit, while also keeping environmental impact and cost considerations in mind. Finding materials that could meet these dual demands—sustainability and durability—was a complex challenge. The heavy nature of the product meant that the packaging had to be exceptionally strong to prevent damage during shipping, and many eco-friendly alternatives were either unsuitable in terms of load-bearing capacity or prohibitively expensive.
            </p>
            <p>
            I began by conducting in-depth research into a variety of sustainable packaging materials. This involved not only reviewing available literature on eco-friendly materials but also actively engaging with our suppliers to better understand the specific material options they could provide. I focused on key properties such as the recyclability of materials, their ability to withstand the weight of the product, and their cost-effectiveness compared to the traditional packaging materials the company had been using. Given the heavy-duty nature of the product, I paid particular attention to the load-bearing capacity and impact resistance of each material, two critical factors in determining suitability.
            </p>
            <p>
            One of the key takeaways from this process was the realisation that the product’s weight significantly restricted the pool of sustainable materials that could be considered. Many of the most eco-friendly materials available either lacked the necessary durability to withstand the product's weight or came at a much higher cost, making them impractical for large-scale use. However, through careful analysis and supplier consultation, I was able to recommend several materials that offered a good compromise between impact resistance and environmental sustainability. These materials were not only more sustainable than the company’s existing options but also had the strength to handle the unique challenges posed by the product’s weight.
            </p>
            <p>
            In reflecting on the project, I realised that had sustainability been a focus earlier in the product’s development, we could have explored a wider range of material options with greater budget flexibility. Addressing sustainability after the initial product design had already been established limited the scope of materials that could be considered, as the packaging had to conform to pre-existing product dimensions and weight requirements. This experience reinforced the importance of integrating sustainability considerations from the outset of any engineering design process.
            </p>
            <p>
            This project broadened my understanding of the complexities involved in sustainable engineering, particularly when dealing with heavy products that impose strict performance requirements on packaging. It underscored the need for a holistic approach in design, where sustainability is not an afterthought but a core consideration from the beginning. Balancing environmental responsibility with practical functionality and cost-efficiency is essential to developing solutions that are both viable and sustainable in the long term. This experience has not only enhanced my knowledge of sustainable material selection but also deepened my appreciation for the broader challenges of implementing sustainable practices within the engineering field.
            </p>
            <p>previous versions:</p>
            <a href={info.ref1_rev1} target="_blank" rel="noopener noreferrer">
                    Sustainable_Reflection_REV1
                </a>
            <p></p>
            <a href={info.ref1_rev2} target="_blank" rel="noopener noreferrer">
                    Sustainable_Reflection_REV2
                </a>            
        </>;
    }

    function ref2() {
        return <>
            <p><span style={{color: info.baseColor}}>Professional Practice within intercultural and global contexts (F) <span
                className={Style.green}>(main)</span> $ </span>
                {"ls"}
            </p>
            <p>{"hello"}
            </p>
            <p>
            previous versions:
            </p>
            <p>
                <a href={info.ref2_rev1} target="_blank" rel="noopener noreferrer">
                        Sustainable_Reflection_REV1
                </a>
            </p>
            <a href={info.ref2_rev2} target="_blank" rel="noopener noreferrer">
                    Sustainable_Reflection_REV2
                </a>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'reflections'}>
            <Terminal text={ref1()}/>
            <Terminal text={ref2()}/>
        </Box>
    )
}