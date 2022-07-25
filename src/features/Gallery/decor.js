const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/gallery/decor/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "IMG-20220613-WA0000", width: 1440, height: 1800 },
    { id: "IMG-20220613-WA0001", width: 750, height: 1001 },
    { id: "IMG-20220613-WA0002", width: 2048, height: 2016 },
    { id: "IMG-20220613-WA0003", width: 1200, height: 1500 },
    { id: "1", width: 750, height: 477 },
    { id: "2", width: 750, height: 905 },
    { id: "3", width: 750, height: 797 },
    { id: "4", width: 750, height: 913 },
    { id: "5", width: 750, height: 552 },
    { id: "6", width: 740, height: 462 },
    { id: "7", width: 630, height: 722 },
    { id: "8", width: 747, height: 693 },
    { id: "9", width: 750, height: 717 },
    { id: "10", width: 750, height: 910 },
    { id: "11", width: 742, height: 743 },
    { id: "12", width: 664, height: 699 },
    { id: "13", width: 750, height: 733 },
    { id: "14", width: 750, height: 718 },
    { id: "15", width: 740, height: 734 },
    { id: "16", width: 750, height: 822 },
    { id: "17", width: 740, height: 713 },
    { id: "18", width: 1600, height: 1067 },
    { id: "19", width: 1377, height: 1317 },
    { id: "20", width: 685, height: 655 },
    { id: "21", width: 1067, height: 1600 },
    { id: "22", width: 750, height: 941 },
    { id: "23", width: 601, height: 400 },
    { id: "24", width: 1440, height: 1800 },
    { id: "25", width: 1440, height: 1800 },
    { id: "26", width: 673, height: 476 },
    { id: "27", width: 828, height: 1217 },
    { id: "28", width: 750, height: 1334 },
    { id: "29", width: 1536, height: 2048 },
    { id: "30", width: 1536, height: 2048 },
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