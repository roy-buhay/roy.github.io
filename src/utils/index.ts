export function loadImage(title: string, path: string, type: string):  string | undefined {
    let images: Record<string, { default: { src: string} }>
    let imagePath;

    if(type === 'jpg') {
       images = import.meta.glob<{ default: string }>('/src/assets/images/**/*.jpg', { eager: true });    
       imagePath = `/src/assets/images/${title}/${path}.jpg`;
    } else {
        images = import.meta.glob<{ default: string }>('/src/assets/images/**/*.png', { eager: true });    
        imagePath = `/src/assets/images/${title}/${path}.png`;
    }
    
    // Find the matching key in the images object
    const matchingKey = Object.keys(images).find(key => key.endsWith(imagePath));
    
    // Return the URL if found, undefined otherwise
    return matchingKey ? images[matchingKey].default.src : undefined;
}