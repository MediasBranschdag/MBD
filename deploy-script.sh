npm run build
rsync -avz -e 'ssh' --exclude='*/config.php' ./build pi@adamjonsson.info:/var/www/MBD