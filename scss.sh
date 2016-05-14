echo 'generating CSS'
node-sass ./src/scss/style.scss ./public/style.css
echo 'setting up watcher for scss files'
node-sass -w ./src/scss/style.scss ./public/style.css
