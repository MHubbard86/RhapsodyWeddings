const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const path = "../images/cakehoops/";
const photoLink = (id) => `${path}${id}.jpg`;

const Photos = [
    { id: "1", width: 1334, height: 1334 },
    { id: "2", width: 1334, height: 1334 }, 
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