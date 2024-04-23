# Use NGINX Alpine image as the base
FROM nginx:alpine

# Set environment variables for the build
ARG DOMAIN_NAME
ENV DOMAIN_NAME=${DOMAIN_NAME}

# Create the directories for certificates
RUN mkdir -p /etc/ssl/certs /etc/ssl/private

# Install openssl to generate a self-signed certificate
RUN apk add --no-cache openssl \
    && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
       -keyout /etc/ssl/private/${DOMAIN_NAME}.key \
       -out /etc/ssl/certs/${DOMAIN_NAME}.cert \
       -subj "/C=US/ST=State/L=City/O=Organization/CN=${DOMAIN_NAME}" \
    && apk del openssl

# Remove default nginx configurations
RUN rm /etc/nginx/conf.d/default.conf

# Copy the nginx configuration file and use environment substitution
COPY nginx.conf /etc/nginx/nginx.conf

# Add a custom entrypoint script to substitute environment variables
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]
