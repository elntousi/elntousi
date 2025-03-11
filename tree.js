function drawTree(height, flip = false) {
    if (!flip) {

        for (let i = 0; i < height; i++) {
            let stars = '';
            let spaces = '';

            for (let j = 0; j < height - i - 1; j++) {
                spaces += ' ';
            }

            for (let k = 0; k < 2 * i + 1; k++) {
                stars += '*';
            }

            console.log(spaces + stars);
        }

        let trunkSpaces = '';
        for (let i = 0; i < height - 1; i++) {
            trunkSpaces += ' ';
        }

        console.log(trunkSpaces + '*');
    } else {
        let trunkSpaces = '';
        for (let i = 0; i < height - 1; i++) {
            trunkSpaces += ' ';
        }
        console.log(trunkSpaces + '*');
        for (let i = height - 1; i >= 0; i--) {
            let stars = '';
            let spaces = '';

            for (let j = 0; j < height - i - 1; j++) {
                spaces += ' ';
            }

            for (let k = 0; k < 2 * i + 1; k++) {
                stars += '*';
            }

            console.log(spaces + stars);
        }


    }
}

console.log("Normaler Baum:");
drawTree(5, false);

console.log("\nGespeigelter Baum:");
drawTree(5, true);