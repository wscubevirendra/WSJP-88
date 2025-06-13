function generateUniqueImageName(originalName) {
    const timestamp = Date.now(); // Current time in milliseconds
    const randomString = Math.random().toString(36).substring(2, 10); // Random 8-character string
    const extension = originalName.split('.').pop(); // Get file extension
    return `img_${timestamp}_${randomString}.${extension}`;
}

module.exports = { generateUniqueImageName }
