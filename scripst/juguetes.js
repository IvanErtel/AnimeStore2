
fetch('../json/juguetes.json')
  .then(response => response.json())
  .then(data => {
    // Obtén el contenedor donde deseas mostrar los productos
    const contenedorJuguetes = document.getElementById('contenedorJuguetes');
    const contDiv = document.createElement('div');
    contDiv.classList.add('container');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    // Recorre los datos obtenidos del archivo juguetes.json
    // y crea elementos HTML para cada producto
    data.forEach(producto => {
      // Crea un elemento div con la clase "col-md-3"
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-md-3', 'cardCol');

      // Crea un elemento div con la clase "card"
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      // Crea un elemento img con la clase "card-img-top" para la imagen del producto
      const img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = `Producto ${producto.id}`;
      img.classList.add('card-img-top');

      // Crea un elemento div con la clase "card-body" para el cuerpo de la tarjeta
      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.classList.add('card-body');

      // Crea un elemento h3 con la clase "card-title" para el nombre del producto
      const h3 = document.createElement('h3');
      h3.textContent = producto.nombre;
      h3.classList.add('card-title');

      // Crea un elemento p con la clase "card-text" para el precio del producto
      const pPrecio = document.createElement('p');
      pPrecio.textContent = `Precio: $${producto.precio}`;
      pPrecio.classList.add('card-text');

      // Crea un elemento button con la clase "btn" y "btn-primary" para el botón "Agregar al Carrito"
      const btnAgregar = document.createElement('button');
      btnAgregar.textContent = 'Agregar al Carrito';
      btnAgregar.classList.add('btn', 'btn-primary');

      // Agrega los elementos creados como hijos en el orden deseado
      cardBodyDiv.appendChild(h3);
      cardBodyDiv.appendChild(pPrecio);
      cardBodyDiv.appendChild(btnAgregar);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
      rowDiv.appendChild(colDiv);
    });

    // Agrega la fila a la columna
    contDiv.appendChild(rowDiv);

    // Agrega el contenedor al contenedor principal
    contenedorJuguetes.appendChild(contDiv);   
      
  })
  .catch(error => {
    console.error('Error al cargar los datos de juguetes.json:', error);
  });
