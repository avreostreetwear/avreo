function comprarProducto(producto) {
    document.getElementById('product-name').value = producto;
    document.getElementById('form-section').style.display = 'block';
}

document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let productName = document.getElementById('product-name').value;
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let floor = document.getElementById('floor').value;
    let door = document.getElementById('door').value;

    // Aquí se integraría el sistema de pago

    alert('Compra realizada con éxito para ' + productName);

    // Aquí se enviaría una notificación al administrador (por ejemplo, un correo electrónico)
});
