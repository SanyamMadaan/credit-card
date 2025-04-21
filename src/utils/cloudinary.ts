// Replace these with your Cloudinary credentials
const CLOUDINARY_CLOUD_NAME = 'dv3vxqkwd';

export const getCloudinaryUrl = (imageName: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1/credit-cards/${imageName}`;
}; 