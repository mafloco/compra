function calcTotal() {
    cant = document.getElementById('cantidad').value;
    cant = parseInt(cant);
    total = 0;
    total = cant * 200;
    categoria = document.getElementById('categoria').value;
    
    if (categoria == 1) {
        descuento = (total/100)*80;
        total = total-descuento;
    } else if (categoria == 2) {
        descuento = (total/100)*50;
        total = total-descuento;
    } else if (categoria == 3) {
        descuento = (total/100)*15;
        total = total-descuento;
    } else {
        total = cant * 200;
    }

    document.getElementById('cantTotal').innerHTML ="Total a Pagar: " + total + " $";
  }

  function clearForm() {
    document.getElementById('cantTotal').innerHTML = "Total a Pagar: $";
  }