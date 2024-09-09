// import React from 'react';
// import IconLink from "./IconLink";
// import {Box} from "@mui/material";

// function PortfolioBlock(props) {
//    const {image, live, source, title} = props;
//    return (
//       <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
//          <Box component={'img'} src={image} alt={'mockup'}/>
//          <h1 style={{fontSize: '2rem'}}>{title}</h1>
//          <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
//               alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
//             {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
//             </Box> */}
//             {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
//             </Box> */}
//          </Box>
//       </Box>
//    );
// }

// export default PortfolioBlock;

//////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import IconLink from "./IconLink";
// import { Box } from "@mui/material";

// function PortfolioBlock(props) {
//     const { videoUrl, live, source, title } = props;

//     return (
//         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
//             {/* Render video if `videoUrl` is provided, otherwise render image */}
//             {videoUrl ? (
//                 <Box
//                     component={'div'}
//                     sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%', marginBottom: '1rem' }}
//                 >
//                     <iframe
//                         width="100%"
//                         height="100%"
//                         src={videoUrl}
//                         title="YouTube video"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         style={{
//                             position: 'absolute',
//                             top: 0,
//                             left: 0,
//                             width: '60%',
//                             height: '60%'
//                         }}
//                     ></iframe>
//                 </Box>
//             ) : (
//                 <Box component={'img'} src={props.image} alt={'mockup'} />
//             )}
            
//             <h1 style={{ fontSize: '2rem' }}>{title}</h1>

//             <Box
//                 className={'portfolio'}
//                 display={'flex'}
//                 flexDirection={'column'}
//                 gap={'0.5rem'}
//                 alignItems={'center'}
//                 fontSize={'1.5rem'}
//                 py={'2rem'}
//             >
//                 {/* Uncomment if you want to add live demo and source code links */}
//                 {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                   <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
//                 </Box> */}
//                 {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                   <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
//                 </Box> */}
//             </Box>
//         </Box>
//     );
// }

// export default PortfolioBlock;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import IconLink from "./IconLink";
import { Box } from '@mui/material';

function PortfolioBlock(props) {
   const { videoUrl, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
         >
            <iframe 
               width="560" 
               height="315" 
               src={videoUrl} 
               title="YouTube video player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
               style={{ maxWidth: '100%', maxHeight: '100%' }} // Responsive style
            ></iframe>
         </Box>
         <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            {/* Additional content here */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
