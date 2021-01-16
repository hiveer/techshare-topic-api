### API contractor
#### GET `/topics/:topicID`
- payload:
```JSON
{}
```
- response:
```JSON
{
  "topicTitle": "Javascript",
  "owner": "Ray",
  "startDate": "2021-01-29",
  "vote": 20,
  "detail": "Reac component"
}
```

#### GET /topics
- payload:
```JSON
{}
```
- response:
```JSON
[
  {
    "_id": "5ff56c628030821b2f3f7906",
    "topicTitle": "Rails",
    "owner": "Hiveer",
    "startDate": "2021-01-13",
    "vote": 15,
    "detail": "more",
    "__v": 0
  },
  {
    "_id": "60025677526018c6ffbd28a0",
    "topicTitle": "Node",
    "owner": "Zoro",
    "startDate": "2021-01-19",
    "vote": 10,
    "detail": "Basic introduction",
    "__v": 0
  },
]
```

#### POST /topics
- payload:
```JSON
{
  "topicTitle": "PHP",
  "owner": "Joey",
  "startDate": "2021-01-30",
  "vote": 30,
  "detail": "Set up env"
}
```
- response:
```JSON
{
  "_id": "600257278e67f9cc8a4ebd50",
  "topicTitle": "PHP",
  "owner": "Joey",
  "startDate": "2021-01-30",
  "vote": 30,
  "detail": "Set up env",
  "__v": 0
}
```

#### PATCH /topics/:topicID

- payload:
```JSON
{
  "vote": 30,
}
```
- response:
```JSON
{
  "n": 1,
  "nModified": 1,
  "ok": 1
}
```

#### DELETE /topics/:topicID
- payload:
```JSON
{}
```
- response:
```JSON
{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
}
