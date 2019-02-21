stairs_count = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu"));

half_pyramid(stairs_count);

function half_pyramid(stairs_count) {
	for (let stair = 1; stair < (stairs_count + 1); stair++) {
		console.log(" ".repeat(stairs_count - stair) + "#".repeat(stair));
	}
}

