const certificates = [
    { name: 'GIONELA JERALDY MANRIQUE FARFAN', dni: '70413408', link: 'https://drive.google.com/file/d/1g44rJchK-3jTPGmT8t-0uwoig7vEzkBp/view?usp=sharing'},
    { name: 'CARLOS RICARDO NOVOA FARFAN', dni: '75251508', link: 'https://drive.google.com/file/d/1l6RAFzn7KqnRgIvdzXYGWNLnFZVgJNv_/view?usp=sharing'},
    { name: 'DORIS FARFAN GUZMAN', dni: '23978505', link: 'https://drive.google.com/file/d/1ThUfP7kbLoY8AA-d5cTNLn7DY3KH9_i_/view?usp=sharing'},
    { name: 'PIA FERNANDA GUEVARA OSORIO', dni: '76571063', link: 'https://drive.google.com/file/d/1ezDRJJDRapG3k_hxch0BJX581NFHp0rD/view?usp=sharing'},
    { name: 'ANDRÉS GUSTAVO INFANTAS SOTO', dni: '72031164', link: 'https://drive.google.com/file/d/1Y31wX1bhWWsAM1RvGSwV1stewppCbxHO/view?usp=sharing'},
    { name: 'RANDU VINCENT DIAZ SALVA', dni: '73025738', link: 'https://drive.google.com/file/d/1ZgBlozMKInC_R_4riaze6BnoKUgEo-GZ/view?usp=sharing'},
    { name: 'SITKA LIVA SOLANO', dni: '74699744', link: 'https://drive.google.com/file/d/1UCtdh62AxCwuBOEWfAjjA7rUrm2pa6YL/view?usp=sharing'},
    { name: 'SOL ABIGAIL ROMERO VILLASANTE', dni: '73173734', link: 'https://drive.google.com/file/d/1fJWAbHd7WnbVisxylWGUQuiLIjaGRc78/view?usp=sharing'},
    { name: 'FABRICIO HUAMAN VALENZUELA', dni: '73312363', link: 'https://drive.google.com/file/d/1CMsugjy11YEIdohH20_fsZRpJ9w5ADgH/view?usp=sharing'},
    { name: 'WILIANS ANTHONY BACA ORCON', dni: '70061770', link: 'https://drive.google.com/file/d/1RpnRnL5HSD36MEByzhlnoFvR0yFjyvYN/view?usp=sharing'},
    { name: 'CINTHIA CANDIA CANDIA', dni: '76257514', link: 'https://drive.google.com/file/d/1RyV9nfLZ8llIPGjla9AggzLyWM5x6kxz/view?usp=sharing'},
    { name: 'ADELA LETICIA AUCAPURI VALLENAS', dni: '70457932', link: 'https://drive.google.com/file/d/1rkoddmdOShpxjXhJVV5MaogY-PdQTo1S/view?usp=sharing'},
    { name: 'JAIRO OMAR TINCUSI QUISPE', dni: '73317983', link: 'https://drive.google.com/file/d/1losl9rrWi_vsRO4ySR1zNgEdcfT-bOR3/view?usp=sharing'},
    { name: 'MIDDUAR ARTURO MATHEUS TAPIA', dni: '76692938', link: 'https://drive.google.com/file/d/1PD4_GW1a5rs_BoYG6kE7CCYCrFtpcGXL/view?usp=sharing'},
    { name: 'MITZURY MARITZA MONICA MATHEUS TAPIA', dni: '76641985', link: 'https://drive.google.com/file/d/1TEg_GqPo0csFqIUK2doaCuZbyyTc33LQ/view?usp=sharing'},
    { name: 'DANIELA CONDORI MAXI', dni: '72638100', link: 'https://drive.google.com/file/d/192LPbbTjr03rA-UpC5T9hlIMK9pP7XKE/view?usp=sharing'},
    { name: 'EDUAR RUBEN CCANSAYA PACCORI', dni: '70457932', link: 'https://drive.google.com/file/d/1Yt5NHrHu58dI3YXdTU20EGZppHgQenr8/view?usp=sharing'},
    { name: 'MILAGROS OLIMPIA FERNÁNDEZ QUISPE', dni: '72557528', link: 'https://drive.google.com/file/d/1KRSsbERA1ibwixoJoqYQ9jgprnEfXNBM/view?usp=sharing'},
    { name: 'BETT YENI CONDORI ILLA', dni: '79217619', link: 'https://drive.google.com/file/d/1LOVoS_peg9dG40BqnL2YlVHoL2U7nMNT/view?usp=sharing'},
    { name: 'FLOR ALEXANDRA GONZÁLEZ MAMANI', dni: '76688594', link: 'https://drive.google.com/file/d/1hdcu7DxN9ulbF3zH_v3O1Nz7B3EWPQmW/view?usp=sharing'},
    { name: 'ROMINA ANDROMEDA HUILLCANINA YUCRA', dni: '74165924', link: 'https://drive.google.com/file/d/1J_cS01ls0KFb24sIaLktfpJArxnzJCC1/view?usp=sharing'},
    { name: 'REYNALDO ANDRES CARREÑO APAZA', dni: '74647823', link: 'https://drive.google.com/file/d/1Acmvd10J7cQ9DpVn75FJhDFNJ6npU4jL/view?usp=sharing'},
    { name: 'ARIANA GIANELLA LLERENA JIMENEZ', dni: '72128520', link: 'https://drive.google.com/file/d/1wZ8Ab6nf73Qv3d5MjdhwQG_md6DqqTtZ/view?usp=sharing'},
    { name: 'KIMBERLY LEONELA PONCE MORALES', dni: '72964802', link: 'https://drive.google.com/file/d/1vCnSnFUkQ7xxOI_uT21kyAlWvY_4Cu44/view?usp=sharing'},
    { name: 'JOSELYN VERITH VALENCIA VILLAFUERTE', dni: '71597355', link: 'https://drive.google.com/file/d/1LR5EwRajpjqOej-P_RXGlHPrBw-coGSP/view?usp=sharing'},
    { name: 'PONCE FERNANDEZ BACA MANUEL ABRAHAM', dni: '72716682', link: 'https://drive.google.com/file/d/1-Oz5y8XKqAMdK2_QPIbisLAby-mc0qka/view?usp=sharing'},
    { name: 'GUZMÁN PACHECO ESTHER', dni: '23998314', link: 'https://drive.google.com/file/d/1ooWPXu9wLVwy6n6USK84aSUt7fhedl54/view?usp=sharing'},
    { name: 'HOLGUIN HERRERA MELISA BETYS', dni: '43109012', link: 'https://drive.google.com/file/d/1dzpsTGqTcjHYzqKBvb6U4Av4v0jN-Uq2/view?usp=sharing'},
    { name: 'SALAS OLIVERA CLEIDY GLORIA', dni: '45907329', link: 'https://drive.google.com/file/d/1JQkNEpKMc4gyyrSBgQTG_I1rMmbf8O5v/view?usp=sharing'},
    { name: 'RUIZ DELGADO, CARMEN GIULEANA', dni: '72686518', link: '' },
    { name: 'PÉREZ CHOQUENAIRA, CAROLAY', dni: '71058143', link: '' },
    { name: 'CHAMBI CCALLOHUANCA, NICOL SAMANTA ', dni: '77676976', link: '' },
    { name: 'ARQQUE VALDERRAMA, YENY MELITZA ', dni: '72905376', link: '' },
    { name: 'INFANTAS SOTO, ANDRÉS GUSTAVO', dni: '72031164', link: '' },
    { name: 'RAMOS ORTIZ DE ORUE, ANGIE MILAGROS', dni: '73975527', link: '' },
    { name: 'CAJIGAS MOREANO, KEVIN GABRIEL', dni: '70584346', link: '' },
    { name: 'USCA QUISPE, LIZ SHARMELY', dni: '70583248', link: '' },
    { name: 'VALERO QUISPE, YULIET JADE', dni: '77244171', link: '' },
    { name: 'ADELIA HUACHACA, GUIZADO', dni: '47913967', link: '' },
    { name: 'TAPIA ACUÑA, MIJAIL', dni: '46198986', link: '' },
    { name: 'ALCCA ZELA, ERICK', dni: '42955593', link: '' },
    { name: 'CORDOVA CANTORO, VIOLETA', dni: '72712951', link: '' },
    { name: 'YUPANQUI CARBAJAL, DANIEL EDUARDO ', dni: '72364865', link: '' },
    { name: 'BACA ARRIOLA, KUKULY NEMESIA', dni: '02858080', link: '' },
    { name: 'BENAVIDES PALOMINO, CARLOS ALBERTO', dni: '23994029', link: '' },
    { name: 'CASTRO PONCE DE LEÓN, RICARDO', dni: '23818383', link: '' },
    { name: 'HUMPIRE CASTRO, ROY ANDY', dni: '72639015', link: '' },
    { name: 'PONCE FERNANDEZ BACA, MANUEL ABRAHAM', dni: '72716682', link: '' },
    { name: 'GUZMÁN PACHECO, ESTHER ', dni: '23998314', link: '' },
    { name: 'CALDERON GONZALES, WERNER', dni: '41834778', link: '' },
    { name: 'GUTIERREZ CARLOTTO, ED ', dni: '46086133', link: '' },
    { name: 'CANAHUIRE MONTUFAR, ABRAHAM EDGARD', dni: '23961090', link: '' },
    { name: 'HOLGUIN HERRERA, MELISA BETYS', dni: '43109012', link: '' },
    { name: 'ASTETE CALDERON, GABRIELA', dni: '70458417', link: '' },
    { name: 'QUISPE LUCANA, HILBERT EDUARDO ', dni: '71514971', link: '' },
];

function loadTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    certificates.forEach(cert => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = cert.name;
        row.appendChild(nameCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Descargar';
        button.dataset.dni = cert.dni;
        button.dataset.link = cert.link;
        button.onclick = function() {
            const inputDni = prompt('Ingrese su DNI para descargar el certificado:');
            if (inputDni === null) {
                return; // Si el usuario cancela, no hace nada
            }
            if (inputDni.trim() === '') {
                alert('El campo DNI no puede estar vacío.');
                return;
            }
            if (inputDni === this.dataset.dni) {
                window.open(this.dataset.link, '_blank');
            } else {
                alert('DNI incorrecto. No tienes permiso para descargar este certificado.');
            }
        };
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCertificates = certificates.filter(cert => cert.name.toLowerCase().includes(searchTerm));
    
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    filteredCertificates.forEach(cert => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = cert.name;
        row.appendChild(nameCell);

        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Descargar';
        button.dataset.dni = cert.dni;
        button.dataset.link = cert.link;
        button.onclick = function() {
            const inputDni = prompt('Ingrese su DNI para descargar el certificado:');
            if (inputDni === null) {
                return; // Si el usuario cancela, no hace nada
            }
            if (inputDni.trim() === '') {
                alert('El campo DNI no puede estar vacío.');
                return;
            }
            if (inputDni === this.dataset.dni) {
                window.open(this.dataset.link, '_blank');
            } else {
                alert('DNI incorrecto. No tienes permiso para descargar este certificado.');
            }
        };
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
});

// Cargar la tabla al iniciar
loadTable();

