const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/photoshoot/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1", width: 750, height: 902 },
    { id: "2", width: 750, height: 723 },
    { id: "3", width: 750, height: 888 },
    { id: "4", width: 750, height: 846 },
    { id: "5", width: 745, height: 715 },
];

const PhotoShootPhotos = Photos.map((photo) => ({
    src: photoLink(photo.id),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photoLink(photo.id),
            width: breakpoint,
            height,
        };
    }),
}));

export default PhotoShootPhotos;