nest new backend --skip-git --package-manager npm

nest generate --help

npm install --save @nestjs/typeorm typeorm mysql2

# Modulo DataBase
* nest generate module database

# Modulo Restaurants
* nest generate module restaurants
* nest generate controller restaurants
* nest generate service restaurants
* crear restaurants.entity.ts a mano

# Modulo Users
* nest generate module users
* nest generate controller users
* nest generate service users
* crear users.entity.ts a mano

# Modulo Comments
* nest generate module comments
* nest generate controller comments
* nest generate service comments
* crear comments.entity.ts a mano

# Modulo Bookings
* nest generate module bookings
* nest generate controller bookings
* nest generate service bookings
* crear bookings.entity.ts a mano

# Modulo Photos
* nest generate module photos
* nest generate controller photos
* nest generate service photos
* crear photos.entity.ts a mano



# Ejecutar
npm run start:dev

nest start --watch