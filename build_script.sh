eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_dev
git pull origin main 
npm install
npm run build