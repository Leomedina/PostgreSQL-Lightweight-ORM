# lightweight-pg-orm

lightweight-pg-orm is built on top of pg and helps you easily create CRUD functions on your PostgreSQL database.

## Installation

Use npm [npm](https://www.npmjs.com/get-npm) to install.

```bash
npm install lightweight-pg-orm
```

## Usage
This is best used on your Express routes. 

```javascript
const express = require("express");
const Model = require("lightweight-pg-orm");

const app = express();

const company = new Model("companies", "id", ["id",
  "name",
  "num_employees",
  "description",
  "logo_url"]
);

app.get("/", async function (req, res, next) {
  try {
    const results = await company.findAll(req.query);
    return res.status(200).json({ "companies": results });
  } catch (error) {
    return next(error);
  };
});

```

## Methods

Collection of flexible methods for the model

Class Methods:

CRUD:
 -> get            - retrieves single item from database.
 -> findAll        - retrieves all items from database or items matching query.
 -> create         - Creates a new item in the database.
 -> update         - Updates item in the database.
 -> delete         - Deletes item in the database.

Helper functions:
 -> WhereExpressions     - creates where expressions depending on query passed
 -> createquery          - creates SQL queries.
 -> partialupdatequery   - creates queries for update

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Errors and bugs
If something is not behaving intuitively, it is a bug and should be reported. Report it here by creating an issue: https://github.com/Leomedina/lightweight-pg-orm/issues.

Help me fix the problem as quickly as possible by following Mozilla's guidelines for reporting bugs.
## License
[MIT](https://choosealicense.com/licenses/mit/)