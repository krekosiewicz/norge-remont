# Use NGINX Alpine image as the base
FROM nginx:alpine

# Create directory for Certbot webroot authentication
RUN mkdir -p /var/www/certbot

# Remove default nginx configurations
RUN rm /etc/nginx/conf.d/default.conf

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Add a custom entrypoint script to substitute environment variables
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]
