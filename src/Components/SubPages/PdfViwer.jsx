import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Navbar2 from '../Navbar2';
import { Box } from '@chakra-ui/react';

function PdfViwer() {

    const docs = [
    { 
        uri: require("../../assets/WS_Tech.pdf"),
        fileType:"pdf",
        fileName:"WS_Tech.pdf"
    }, // Local File
      ];

  return (
    <div>
        <Navbar2/>
        <Box pt={"150px"} w={{base:"90%",lg:"1300px"}} m={"auto"}>
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{padding:"0px 0px",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}
            theme={{
                primary: "#0053b3",
                secondary: "white",
                tertiary: "#5296d899",
                textPrimary: "#ffffff",
                textSecondary: "white",
                textTertiary: "#00000099",
                disableThemeScrollbar: false,
              }}
            />
        </Box>
    </div>
  )
}

export default PdfViwer