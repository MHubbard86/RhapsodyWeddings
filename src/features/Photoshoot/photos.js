const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/photoshoot/";
const unsplashLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1", width: 750, height: 889 },
    { id: "2", width: 750, height: 713 },
    { id: "3", width: 750, height: 721 },
    { id: "4", width: 750, height: 913 },
    { id: "5", width: 750, height: 939 },
    { id: "6", width: 750, height: 723 },
    { id: "7", width: 750, height: 888 },
    { id: "8", width: 750, height: 846 },
    { id: "9", width: 745, height: 715 },
    { id: "10", width: 750, height: 902 },
    { id: "11", width: 750, height: 750 },
    { id: "12", width: 750, height: 814 },
    { id: "13", width: 724, height: 708 },
    { id: "14", width: 615, height: 921 },
    { id: "15", width: 640, height: 960 },
    { id: "16", width: 640, height: 790 },
];

const PhotoShootPhotos = Photos.map((photo) => ({
    src: unsplashLink(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: unsplashLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));

export default PhotoShootPhotos;