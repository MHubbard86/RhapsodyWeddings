import React from "react";
import { PhotoAlbum } from "react-photo-album";
import Box from "@mui/material/Box";

const Gallery = (props) => {
const { 
    photos = [],
    layout = "rows",
    columns = '4',
    spacing = '20',
    padding = '5'
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
        <PhotoAlbum
            photos={photos}
            layout={layout}
            columns={columns}
            spacing={spacing}
            padding={padding}
            renderPhoto={renderPhoto}
        />
    </Box>
  )
}

export default Gallery;