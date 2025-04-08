// Configuração dos gráficos
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se estamos na página de dados
  if(document.getElementById('graficoRastro')) {
    // Dados de exemplo
    const data = {
      labels: ['Alimentação', 'Transporte', 'Energia', 'Consumo', 'Resíduos'],
      datasets: [{
        label: 'Pegada Ecológica Média',
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#2d6a4f',
          '#40916c',
          '#52b788',
          '#74c69d',
          '#95d5b2'
        ],
        borderWidth: 1
      }]
    };

    // Configuração do gráfico
    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.raw}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Porcentagem do Impacto'
            }
          }
        }
      },
    };

    // Criar gráfico
    const ctx = document.getElementById('graficoRastro').getContext('2d');
    const myChart = new Chart(ctx, config);

    // Controles do gráfico
    document.querySelectorAll('.graph-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelector('.graph-btn.active').classList.remove('active');
        this.classList.add('active');
        
        myChart.config.type = this.dataset.type;
        myChart.update();
      });
    });
  }

  // Menu mobile para todas as páginas
  const menuToggle = document.querySelector('.menu-toggle');
  if(menuToggle) {
    menuToggle.addEventListener('click', function() {
      document.querySelector('.menu').classList.toggle('active');
    });
  }
});
