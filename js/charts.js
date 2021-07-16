var paleo = document.getElementById('paleo');
var paleoChart = new Chart(paleo, {
    type: 'pie',
    data: {
        labels: [
            'Verduras sin almidón',
            'Grasas',
            'Carbohidratos de bajo índice glucémico',
            'Proteínas'
          ],
          datasets: [{
            data: [40, 15, 15, 30],
            backgroundColor: [
              '#6a8c5a',
              '#fac55d',
              '#e8ad85',
              '#f87d6e'
            ],
            hoverOffset: 5
          }]
    }
});

var lowCarbo = document.getElementById('lowCarbo');
var lowCarboChart = new Chart(lowCarbo, {
    type: 'pie',
    data: {
        labels: [
            'Carbohidratos',
            'Proteínas',
            'Grasas'
          ],
          datasets: [{
            data: [30, 50, 20],
            backgroundColor: [
              '#fab069',
              '#f87d6d',
              '#f6e825'
            ],
            hoverOffset: 5
          }]
    }
});

var mediterranean = document.getElementById('mediterranean');
var mediterraneanChart = new Chart(mediterranean, {
    type: 'pie',
    data: {
        labels: [
            'Carnes, dulces',
            'Vegetales y frutas',
            'Cereales integrales, pasta, frijoles, pan integral',
            'Aceite de oliva',
            'Pescado, mariscos, lácteos, huevos'
          ],
          datasets: [{
            data: [5, 30, 35, 10, 20],
            backgroundColor: [
              '#c02b49',
              '#6a8c59',
              '#e8ad85',
              '#f9c65d',
              '#f97d6c'
            ],
            hoverOffset: 5
          }]
    }
});

var vegan = document.getElementById('vegan');
var veganChart = new Chart(vegan, {
    type: 'pie',
    data: {
        labels: [
            'Legumbres',
            'Cereales, pasta, pan integral',
            'Frutas y bayas',
            'Nueces, aceite',
            'Vegetales'
          ],
          datasets: [{
            data: [20, 34, 14, 6, 26],
            backgroundColor: [
              '#f87d6d',
              '#e8ad85',
              '#ffe7c3',
              '#f9c65d',
              '#6a8c59'
            ],
            hoverOffset: 5
          }]
    }
});

var highestObesity = document.getElementById('highestObesity');
var highestObesityChart = new Chart(highestObesity, {
    type: 'bar',
    data: {
        labels: [
            'Kuwait',
            'Estados Unidos',
            'Jordan',
            'Arabia Saudita',
            'Qatar',
            'Libia',
            'Turquia',
            'Egipto',
            'Líbano',
            'Emiratos Árabes Unidos',
            'Nueva Zelanda',
            'Iraq',
            'Fiji',
            'Bahrein',
            'Canada',
            'Australia',
            'Malta',
            'México',
            'Sudafrica',
            'Argentina',
            'Chile',
            'Dominica',
            'Uruguay',
            'Siria',
            'Reino Unido'
        ],
          datasets: [{
            data: [37.9, 36.2, 35.5, 35.4, 35.1, 32.5, 32.1, 32, 32, 31.7, 30.8, 30.4, 30.2, 29.8, 29.4, 29, 28.9, 28.9, 28.3, 28.3, 28, 27.9, 27.9, 27.8, 27.8],
            backgroundColor: [
              '#c02b49'
            ],
            hoverOffset: 5
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

var lowestObesity = document.getElementById('lowestObesity');
var lowestObesityChart = new Chart(lowestObesity, {
    type: 'bar',
    data: {
        labels: [
            'Vietnam',
            'Bangladesh',
            'India',
            'Cambodia',
            'Nepal',
            'Japón',
            'Etiopía',
            'Corea del Sur',
            'Eritrea',
            'Sri Lanka',
            'Uganda',
            'Laos',
            'Madagascar',
            'Burundi',
            'Afghanistán',
            'Níger',
            'Burkina Faso',
            'Rwanda',
            'Burma',
            'Malawi',
            'Chad',
            'Singapur',
            'China',
            'Filipinas',
            'Bhutan'
        ],
          datasets: [{
            data: [2.1, 3.6, 3.9, 3.9, 4.1, 4.3, 4.5, 4.7, 5, 5.2, 5.3, 5.3, 5.3, 5.4, 5.5, 5.5, 5.6, 5.8, 5.8, 5.8, 6.1, 6.1, 6.2, 6.4, 6.4],
            backgroundColor: [
              '#f87d6d'
            ],
            hoverOffset: 5
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

var koriaUsers = document.getElementById('koriaUsers');
var koriaUsersChart = new Chart(koriaUsers, {
    type: 'line',
    data: {
        labels: [
            'Marzo 2020',
            'Abril 2020',
            'Mayo 2020',
            'Junio 2020',
            'Julio 2020',
            'Agosto 2020',
            'Septiembre 2020',
            'Octubre 2020',
            'Noviembre 2020',
            'Diciembre 2020',
            'Enero 2021',
            'Febrero 2021',
            'Marzo 2021',
            'Abril 2021',
            'Mayo 2021',
            'Junio 2021',
            'Julio 2021'
        ],
          datasets: [{
            data: [1200, 3600, 5800, 8050, 11400, 14000, 18600, 23850, 28140, 35110, 39150, 43580, 45690, 47700, 49650, 50800, 53800],
            backgroundColor: [
              '#f87d6d'
            ],
            hoverOffset: 5,
            fill: true,
            backgroundColor: '#ff305a',
            borderColor: '#c02b49',
            tension: 0.2
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});