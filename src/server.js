import app from "./app" 

const host = '0.0.0.0'
const port = process.env.PORT || 3001;

app.listen(port, `${host}`, () => {
    console.log(`Server listening on port ${port}`);
});

