# Grapl Nexus Prisma project

### Steps to migrate database

> Delete the prisma/migrations folder when you create your own database.

>Running `npm run migrate` will throw an error is `prisma/migrations` folder and `Migrations` table in database do not match

> Inside `prisma/.env` file, set `DATABASE_URL="<postgres://user:pass@host.com>"`

- `npm run migrate`
---

### Steps to run

> Typescript package is necessary to build the project
>> Install type script
>> - `npm install -g typescript`

> Set DATABASE_URL environment variable

- `npm install`
- `npx prisma generate`
- `tsc`
- `npm start`