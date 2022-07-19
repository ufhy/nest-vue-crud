# Nest - Vue (CRUD)

- [Nest](https://github.com/nestjs/nest)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue2](https://v2.vuejs.org/)

# Install dependency

```bash 
# masuk ke folder backend (nest) folder
$ cd backend

# menggunakan yarn
$ yarn  

# menggunakan npm
$ npm install  
```

```bash 
# masuk ke folder frontend (vue) folder
$ cd frontend

# menggunakan yarn
$ yarn  

# menggunakan npm
$ npm install  
```

# Setup database
buka file `backend/src/database/config.json` kemudian ganti properti koneksi database, setelah itu jalan migrasi database. 

Pastikan sudah berada di folder backend kemudian perintah
```bash
# menggunakan yarn
$ yarn db:migrate

# menggunakan npm
$ npm run db:migrate
```

# Running the app (development)

Menjalankan service nest
```bash
# development mode

# menggunakan yarn
$ yarn start:dev

# menggunakan npm
$ npm run start:dev
```

Menjalankan service vue cli
```bash
# development mode

# menggunakan yarn
$ yarn serve

# menggunakan npm
$ npm run serve
```

