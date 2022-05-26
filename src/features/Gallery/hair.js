const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/gallery/hair/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1", width: 1280, height: 1600 },
    { id: "2", width: 739, height: 867 },
    { id: "3", width: 1752, height: 2048 },
    { id: "4", width: 1200, height: 1600 },
    { id: "5", width: 535, height: 633 },
    { id: "6", width: 712, height: 653 },
    { id: "7", width: 750, height: 731 },
    { id: "8", width: 748, height: 711 },
    { id: "9", width: 750, height: 726 },
    { id: "10", width: 750, height: 883 },
    { id: "11", width: 750, height: 544 },
    { id: "12", width: 739, height: 776 },
    { id: "13", width: 750, height: 742 },
    { id: "14", width: 750, height: 720 },
    { id: "15", width: 750, height: 877 },
    { id: "16", width: 739, height: 694 },
    { id: "17", width: 750, height: 739 },
    { id: "18", width: 683, height: 478 },
    { id: "19", width: 625, height: 731 },
    { id: "20", width: 750, height: 910 },
    { id: "21", width: 750, height: 864 },
    { id: "22", width: 768, height: 960 },
    { id: "23", width: 768, height: 960 },
    { id: "24", width: 788, height: 960 },
    { id: "25", width: 720, height: 960 },
    { id: "26", width: 750, height: 872 },
    { id: "27", width: 1412, height: 2048 },
    { id: "28", width: 1216, height: 2048 },
    { id: "29", width: 750, height: 680 },
    { id: "30", width: 1320, height: 2048 },
];

const hairPhotos = Photos.map((photo) => ({
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

export default hairPhotos;