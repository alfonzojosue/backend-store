import "reflect-metadata"
import app from "./app"
import { AppDateSource } from "./db"

async function main() {
    await AppDateSource.initialize()
    app.listen(3000)
    console.log('Serve is listening on port', 3000)
}
main();
