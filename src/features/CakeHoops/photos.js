const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/cakehoops/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "main", width: 1334, height: 1334 },
    { id: "1", width: 1334, height: 1334 },
    { id: "2", width: 2048, height: 2048 },
    { id: "3", width: 1934, height: 2048 },
    { id: "4", width: 1536, height: 2048 },    
];

const PhotoShootPhotos = Photos.map((photo) => ({
    src: photoLink(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photoLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));

export default PhotoShootPhotos;