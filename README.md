# week7-RESTApi

<!-- TABLE OF CONTENTS -->

## User stories

- **As an API user, I want to**: get a list of all available resources
- **As an API user, I want to**: get all the information on a specific resource
- **As an API user, I want to**: create a new resource
- **As an API user, I want to**: update an existing resource
- **As an API user, I want to**: delete an existing resource
- **As an API user, I want to**: only be able to change an existing resource if I am authenticated to do so

### Acceptance Criteria

- [x] An Express server that only returns JSON
- [x] A Postgres database to store the data
- [x] Endpoints for creating, reading, updating & deleting resources
- [x] Token-based authentication so only the owner of a resource can change it
- [x] Correct headers and response metadata
- [x] Error-handling to make it easy to use the API to build something
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

### Installation

1. Clone the repo

```sh
git clone https://github.com/FACed-Off/week7-spellsAPI.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a database and a test database

- `pgcli`
- `CREATE DATABASE spellsapi;`
- `\connect spellsapi`
- `\include database/db_build.sql`

4. Create a .env file

- ensure this file is in your root folder
- copy and paste the following:

```sh
 DATABASE_URL=postgres://shivanishah96:yourpassword@localhost:5432/spellsapi
 JWT_SECRET=mn6Ak%8fbaf$ur2u£uka*8ava
```

## Usage Instructions

### What you can do:

- Sign Up
- Login when authenticated
- Create Spells
- Delete Spells
- Update Spells
- Get All Spells
- Get Spells By ID

### Schema Table

![alt text](assets/week-7-schema.png)

### To use the API locally/using Insomnia: (Replace values within <>)

1. Sign Up (create a user) `/signup` && `POST`

```
{
	"username": "<NAME>",
	"password": "<PASSWORD>",
}
```

2. Login `/login` && `POST`

```
{
	"username": "<NAME>",
	"password": "<PASSWORD>"
}
```

The following requests require a bearer token which are given when logged in:

3. Create Spells `/spells/` && `POST`

```
{
	"author_id": "<#>",
	"spell_name": "<SPELL NAME>"
}
```

4. Read a spells by ID `/spells/:id` && `GET`
5. Read all spells `/spells/` && `GET`
6. Update a spell name `/spells/:id` && `PUT`

```
{
	"author_id": "<#>",
	"spell_name": "<SPELL NAME>"
}
```

7. Delete a spell `/spells/:id` && `DELETE`
