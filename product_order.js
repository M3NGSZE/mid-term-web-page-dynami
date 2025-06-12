function calculateOrder() {
    const productName = document.getElementById("productName").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const unitPrice = parseFloat(document.getElementById("unitPrice").value);

    const totalAmount = quantity * unitPrice;

    let discountRate = 0;
    if (totalAmount >= 500) {
        discountRate = 0.30;
    } else if (totalAmount >= 300) {
        discountRate = 0.20;
    } else if (totalAmount >= 200) {
        discountRate = 0.15;
    } else if (totalAmount >= 100) {
        discountRate = 0.10;
    } else if (totalAmount >= 50) {
        discountRate = 0.05;
    }

    const discountAmount = totalAmount * discountRate;
    const paidAmount = totalAmount - discountAmount;

    document.getElementById("output").innerHTML = `
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Unit Price:</strong> ${unitPrice}</p>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
        <p><strong>Discount:</strong> <span class="text-red-600">${discountAmount.toFixed(2)}$ , ${(discountRate * 100).toFixed(0)}%</span></p>
        <p><strong>Paid Amount:</strong> <span class="text-red-600">${paidAmount.toFixed(2)} $</span></p>
    `;
}