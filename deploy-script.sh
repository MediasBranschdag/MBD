npm run build
rsync -avz -e 'ssh' --exclude= */config.php --exclude */devConfig.php ./build pi@adamjonsson.info:/var/www/MBD