## QuizApp Api

An Api for a 12-question short quiz

### Instructions when running locally
* Install NPM
```txt
npm install
```
* Run locally
```txt
npm run dev
```

### Routes
* GET /api/quiz
* POST /api/grade 
  <br>
  Accepts:
    ```txt
    { "answers": [ { "id": number, "answers": [ { "answer": string } ] } ] }
    ```
    
  Returns:
    ```txt
    { "score": number, "total": number, "results": [ { "id": number, "correct": boolean } ] }
    ```
### Libraries Used
* zod: for validating incoming Data/Resource
* class-transformer: for transforming objects to class