function scanPorts() {
    const target = document.getElementById("targetHost").value;
    const ports = [21, 22, 25, 53, 80, 110, 143, 443, 3306, 8080];
    let results = `Scanning ${target}...\n`;
    ports.forEach(port => {
        const isOpen = Math.random() > 0.5; // Simulated result
        results += `Port ${port}: ${isOpen ? 'Open' : 'Closed'}\n`;
    });
    document.getElementById("scanResults").innerText = results;
}

function bruteForce() {
    const username = document.getElementById("username").value;
    const passwords = document.getElementById("wordlist").value.split("\n");
    let results = `Brute forcing user: ${username}\n`;
    passwords.forEach(pass => {
        results += `Trying password: ${pass}\n`;
    });
    results += "Brute force simulation complete!";
    document.getElementById("bruteResults").innerText = results;
}
