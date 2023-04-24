echo "Deploiement vers production"
git checkout -f master

echo "Building master"
npm run build

echo "Deploiement des fichiers vers le serveur"
scp -r dist/client/* slimy@54.39.96.105:/var/www/html/Portfolio

echo "Fini!"