klaviatuur_rida1_list = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ü", "Õ"]
klaviatuur_rida2_list = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"]
klaviatuur_rida3_list = ["ENTER", "Z", "C", "V", "B", "N", "M", "Š", "Ž", "KUSTUTA"]

let random_s6na = "PAGAS";
let hetkene_rida = 1;
let järg = 1;

//kastid
let katsed = document.getElementById('katsed')
for (let i = 1; i <= 7; i++) {
    let nimi = "katse" + i.toString()
    let katse = document.createElement('div');
    katse.id = nimi;
    for (let j = 1; j <= 5; j++) {
        let kasti_nimi = "kast" + i.toString() + j.toString();
        let kast = document.createElement('p');
        kast.id = kasti_nimi;
        katse.appendChild(kast);
    }
    katsed.appendChild(katse)
}

lisa_t2ht = (vajutatud_nupp) => {
    let aktiivne_kast = document.getElementById("kast" + hetkene_rida.toString() + järg.toString());
    aktiivne_kast.textContent = vajutatud_nupp;
    järg++;
}

// Klaviatuuri lisamine

let klaviatuuri_rida1 = document.getElementById("kt1");
for (let i = 0; i < klaviatuur_rida1_list.length; i++) {
    let nupp = document.createElement('button')
    nupp.textContent = klaviatuur_rida1_list[i]
    nupp.addEventListener('click', () => {
        console.log(nupp.textContent);
        nupp.style.backgroundColor = "#333333";
        nupp.style.borderColor = "#333333";
        nupp.style.color = "#6D6D6D";
        lisa_t2ht(nupp.textContent)
    })
    klaviatuuri_rida1.appendChild(nupp)
}

let klaviatuuri_rida2 = document.getElementById("kt2");
for (let i = 0; i < klaviatuur_rida2_list.length; i++) {
    let nupp = document.createElement('button')
    nupp.textContent = klaviatuur_rida2_list[i]
    nupp.addEventListener('click', () => {
        nupp.style.backgroundColor = "#333333";
        nupp.style.borderColor = "#333333";
        nupp.style.color = "#6D6D6D";
        lisa_t2ht(nupp.textContent)

        console.log(nupp.textContent);
    })
    klaviatuuri_rida2.appendChild(nupp)
}

let klaviatuuri_rida3 = document.getElementById("kt3");
for (let i = 0; i < klaviatuur_rida3_list.length; i++) {
    let nupp = document.createElement('button')
    nupp.textContent = klaviatuur_rida3_list[i]
    nupp.addEventListener('click', () => {
        if (nupp.textContent == "KUSTUTA") {
            eemalda_t2ht();
            console.log("Okei");

        } else if (nupp.textContent == "ENTER") {
            console.log(hetkene_rida, järg)
            hetkene_rida++;
        } else {
            nupp.style.backgroundColor = "#333333";
            nupp.style.borderColor = "#333333";
            nupp.style.color = "#6D6D6D";
            lisa_t2ht(nupp.textContent)
        }
    })
    klaviatuuri_rida3.appendChild(nupp)
}

for (let i = 1; i <= 5; i++) {
    let kastike = document.getElementById("kast" + i.toString());
    kastike.textContent = "A";
}