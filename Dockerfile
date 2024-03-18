# Dockerfile
ARG IMAGE_NAME

FROM nginx:1.17

# Tag the image with the custom name
LABEL image.name=$IMAGE_NAME
