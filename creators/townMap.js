const TOWN_SIDE_SIZE = 10; // how many chunks each side of the square has.
const CHUNK_SIDE_SIZE = 100; // how many metres each side of a chunk has.
// Example: town side size = 10, chunk side size = 100:
// town side size in metres = chunk side size * town side size = 1000

class Town {
    chunks = [];
    metres = [];

    display() {
        this.metres.forEach((row) => {
            let displayRowString = "";
            row.forEach((metre) => {
                displayRowString = displayRowString.concat(metre.display());
            });
            console.log(displayRowString);
        });
    }
}

class Chunk {
    position = [0, 0];
    metres = [];
}

class Metre {
    // TODO Consider: Should metres position be relative to their chunk or to the town map?
    // TODO Consider: Can position items at a Metre instead of a position? Eesh to move anything you'd have to get the metre's position and then do the calc and then FIND the metre that has that position - no...
    position = [0, 0];
    type = Math.random() > 0.5 ? "X" : "0";

    display() {
        return this.type;
    }
}

// getNetreArrayFromTown - removes chunks basically and instead is giant array of metres?

// Generates metres only for town - very large array. No chunks.
function buildMetreMap(town) {
    const TOWN_SIDE_SIZE_METRES = 100;

    // TODO: Reduce()
    const rows = [];
    for (let rowIndex = 0; rowIndex < TOWN_SIDE_SIZE_METRES; rowIndex++) {
        const columns = [];
        for (
            let columnIndex = 0;
            columnIndex < TOWN_SIDE_SIZE_METRES;
            columnIndex++
        ) {
            columns.push(new Metre());
        }
        rows.push(columns);
    }

    town.metres = rows;
}

const town = new Town();
buildMetreMap(town);

export default town;
