const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/gallery/decor/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1", width: 640, height: 780 },
    { id: "2", width: 640, height: 780 },
    { id: "3", width: 640, height: 780 },
    { id: "4", width: 640, height: 780 },
    { id: "5", width: 640, height: 640 },
    { id: "6", width: 640, height: 780 },
    { id: "7", width: 640, height: 780 },
    { id: "8", width: 640, height: 780 },
    { id: "9", width: 640, height: 780 },
    { id: "10", width: 640, height: 780 },
    { id: "11", width: 640, height: 780 },
    { id: "12", width: 640, height: 780 },
    { id: "13", width: 640, height: 780 },
    { id: "14", width: 640, height: 780 },
    { id: "15", width: 640, height: 780 },
    { id: "16", width: 640, height: 780 },
    { id: "17", width: 640, height: 780 },
    { id: "18", width: 640, height: 780 },
    { id: "19", width: 640, height: 780 },
    { id: "20", width: 640, height: 780 },
    { id: "21", width: 640, height: 780 },
];

const decorPhotos = Photos.map((photo) => ({
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

export default decorPhotos;