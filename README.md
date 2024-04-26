optimised simple website, design has been created by SWPS UI student Paulina Gudzowska, corrected by me

WIP Readme
sudo docker-compose -f docker-compose.prod.yml run --rm certbot certonly --webroot --webroot-path=/var/www/certbot --email ${NODEMAILER_EMAIL} --agree-tos --no-eff-email --domain ${DOMAIN_NAME} -v
