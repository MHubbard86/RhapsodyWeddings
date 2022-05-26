const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/gallery/decor/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1", width: 1500, height: 1875 },
    { id: "2", width: 768, height: 960 },
    { id: "3", width: 630, height: 722 },
    { id: "4", width: 750, height: 910 },
    { id: "5", width: 1536, height: 2048 },
    { id: "6", width: 740, height: 713 },
    { id: "7", width: 2048, height: 1536 },
    { id: "8", width: 1440, height: 1800 },
    { id: "9", width: 715, height: 681 },
    { id: "10", width: 960, height: 720 },
    { id: "11", width: 720, height: 960 },
    { id: "12", width: 1067, height: 1600 },
    { id: "13", width: 750, height: 913 },
    { id: "14", width: 720, height: 960 },
    { id: "15", width: 720, height: 960 },
    { id: "16", width: 750, height: 797 },
    { id: "17", width: 960, height: 914 },
    { id: "18", width: 960, height: 914 },
    { id: "19", width: 1536, height: 2048 },
    { id: "20", width: 768, height: 960 },
    { id: "21", width: 740, height: 734 },
    { id: "22", width: 960, height: 960 },
    { id: "23", width: 750, height: 500 },
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