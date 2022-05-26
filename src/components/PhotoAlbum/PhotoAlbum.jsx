import React from "react";
import { PhotoAlbum } from "react-photo-album";
import Box from "@mui/material/Box";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = (props) => {
const { 
    photos = [],
    layout = "rows",
    spacing = '10',
    padding = '10'
} = props;

const renderPhoto = ({ imageProps: { alt, style, ...rest } }) => (
        <img
            alt={alt}
            style={{
                ...style,
                borderRadius: padding > 2 ? "4px" : 0,
                boxShadow:
                    spacing > 0
                        ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
                        : "none",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
            {...rest}
        />
);

return (    
    <Box sx={{ width: `100%`, mx: "auto" }}>
        <SRLWrapper>
            <PhotoAlbum
            photos={photos}
            layout={layout}
            columns={(containerWidth) => {
                if (containerWidth < 400) return 2;
                if (containerWidth < 800) return 3;
                return 4;
            }}
            spacing={spacing}
            padding={padding}
            renderPhoto={renderPhoto}
        />
        </SRLWrapper>
    </Box>    
  )
}

export default Gallery;