yum install wget vim postgresql-server postgresql-contrib git pm2
sudo postgresql-setup initdb
wget https://nodejs.org/dist/v9.1.0/node-v9.1.0-linux-x64.tar.xz
sudo tar --strip-components 1 -xvf node-v* -C /usr/local

git clone https://github.com/nessalauren5/nessalauren.com.git
cd nessalauren.com/
npm install
npm install pm2 -g
pm2 start ./bin/tt
pm2 startup systemd
pm2 save
vim /var/lib/pgsql/data/pg_hba.conf #enable incoming md5 connections
vim /var/lib/pgsql/data/postgresql.conf #enable all address for connections
systemctl start postgresql
systemctl enable postgresql
sudo -i -u postgres #alter user, create database


