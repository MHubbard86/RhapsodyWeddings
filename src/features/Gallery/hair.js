const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/gallery/hair/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1_1", width: 2048, height: 2048 },
    { id: "1_2", width: 1536, height: 2048 },
    { id: "1_3", width: 750, height: 522 },
    { id: "1_4", width: 750, height: 557 },
    { id: "1_5", width: 750, height: 558 },
    { id: "1_6", width: 2048, height: 1536 },
    { id: "1_7", width: 1536, height: 2048 },
    { id: "1", width: 552, height: 777 },
    { id: "2", width: 750, height: 901 },
    { id: "3", width: 739, height: 867 },
    { id: "4", width: 739, height: 694 },
    { id: "5", width: 748, height: 753 },
    { id: "6", width: 747, height: 1011 },
    { id: "7", width: 828, height: 828 },
    { id: "8", width: 745, height: 597 },
    { id: "9", width: 576, height: 568 },
    { id: "10", width: 750, height: 851 },
    { id: "11", width: 696, height: 663 },
    { id: "12", width: 750, height: 728 },
    { id: "13", width: 750, height: 654 },
    { id: "14", width: 750, height: 877 },
    { id: "15", width: 712, height: 653 },
    { id: "16", width: 498, height: 585 },
    { id: "17", width: 750, height: 883 },
    { id: "18", width: 698, height: 542 },
    { id: "19", width: 1280, height: 160 },
    { id: "20", width: 750, height: 680 },
    { id: "21", width: 1200, height: 1600 },
    { id: "22", width: 535, height: 633 },
    { id: "23", width: 720, height: 960 },
    { id: "24", width: 720, height: 960 },
    { id: "25", width: 748, height: 525 },
    { id: "26", width: 750, height: 939 },
    { id: "27", width: 750, height: 721 },
    { id: "28", width: 1370, height: 1600 },
    { id: "29", width: 1066, height: 1600 },
    { id: "30", width: 409, height: 611 },
    { id: "31", width: 1280, height: 1600 },
    { id: "32", width: 1600, height: 1600 },
    { id: "33", width: 747, height: 909 },
    { id: "34", width: 1280, height: 1600 },
    { id: "35", width: 1280, height: 1600 },
    { id: "36", width: 1280, height: 1600 },
    { id: "37", width: 1536, height: 2048 },
    { id: "38", width: 1440, height: 1800 },
    { id: "39", width: 1440, height: 1800 },
    { id: "40", width: 750, height: 683 },
    { id: "41", width: 1536, height: 2048 },
    { id: "42", width: 1638, height: 2048 },
    { id: "43", width: 1638, height: 2048 },
    { id: "44", width: 1536, height: 2048 },
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