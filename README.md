# Project Book CRUD

## Prasyarat

Sebelum memulai, pastikan Anda sudah memiliki hal-hal berikut:

- **Node.js** dan **npm** terinstal. [Download Node.js](https://nodejs.org/)
- **PostgreSQL** terinstal dan berjalan di mesin lokal atau server. [Download PostgreSQL](https://www.postgresql.org/download/)
- **pgAdmin** (opsional) untuk manajemen database. [Download pgAdmin](https://www.pgadmin.org/download/)

## Langkah-langkah Instalasi

### 1. Clone Repository

Clone repositori ini ke mesin lokal Anda:

```bash
git clone https://github.com/username/book-api.git

```

### 2. Clone Repository
Masuk ke direktori proyek dan instal dependensi yang diperlukan:
```bash
cd repository-name
npm install
```
### 3. Konfigurasi PostgreSQL

Sebelum memulai aplikasi, Anda perlu mengonfigurasi koneksi ke PostgreSQL.

#### a. **Buat Database di PostgreSQL**

Buka `psql` atau gunakan **pgAdmin** untuk membuat database baru. Anda bisa menggunakan perintah berikut di terminal untuk membuat database:

```sql
CREATE DATABASE book_crud;
```


### 4. Konfigurasi Variabel Lingkungan
Aplikasi ini menggunakan variabel lingkungan untuk menyimpan kredensial database.
#### a. Buat dan Edit file .env dan sesuaikan dengan kredensial PostgreSQL yang Anda buat:
```bash
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
```
Pastikan untuk mengganti your_db_name, your_db_user, dan your_db_password dengan nilai yang sesuai.

### 5. Migrasi 
project ini menggunakan Sequelize, Anda dapat menjalankan migrasi dan seed data untuk menyiapkan struktur database dan data awal.
#### a. Jalankan migrasi untuk membuat tabel di database:
```bash

npx sequelize-cli  db:migrate
```



### 6. Menjalankan Aplikasi
Setelah semua konfigurasi selesai, Anda dapat menjalankan aplikasi dengan perintah:

```bash

npm run start
Aplikasi ini sekarang berjalan di http://localhost:3000

```

## Penggunaan API BOOK

#### create
```bash
(POST)http://localhost:3000/api/books
```
``` body
{
    title: string,
    author:string,
    published_year: int, 
    stock : int,
    isbn : string

}
```
#### update
```bash
(PUT)http://localhost:3000/api/books/{id}
```
```body
{
    title: string,
    author:string,
}
```
#### delete 
```bash
{
   (DELETE) http://localhost:3000/api/books/{id} 
}
```
#### get
```bash
{
   (GET) http://localhost:3000/api/books/{id} 
}
```