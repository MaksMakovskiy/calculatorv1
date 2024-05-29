function solveEquation() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerHTML = "<p>Please enter valid coefficients.</p>";
        return;
    }
    
    let steps = `<p>Solving the equation: ${a}x² + ${b}x + ${c} = 0</p>`;
    
    const discriminant = b * b - 4 * a * c;
    steps += `<p>Calculate the discriminant: Δ = b² - 4ac</p>`;
    steps += `<p>Δ = ${b}² - 4 * ${a} * ${c}</p>`;
    steps += `<p>Δ = ${discriminant}</p>`;
    
    if (discriminant < 0) {
        steps += `<p>The equation has no real roots since the discriminant is less than zero.</p>`;
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDiscriminant) / (2 * a);
        const x2 = (-b - sqrtDiscriminant) / (2 * a);
        
        steps += `<p>Calculate the square root of the discriminant: √Δ = ${sqrtDiscriminant}</p>`;
        steps += `<p>Calculate the roots using the quadratic formula: x = (-b ± √Δ) / 2a</p>`;
        steps += `<p>x₁ = (${-b} + ${sqrtDiscriminant}) / ${2 * a}</p>`;
        steps += `<p>x₁ = ${x1}</p>`;
        steps += `<p>x₂ = (${-b} - ${sqrtDiscriminant}) / ${2 * a}</p>`;
        steps += `<p>x₂ = ${x2}</p>`;
        
        if (discriminant === 0) {
            steps += `<p>The equation has one real root: x = ${x1}</p>`;
        } else {
            steps += `<p>The equation has two real roots: x₁ = ${x1}, x₂ = ${x2}</p>`;
        }
    }
    
    resultDiv.innerHTML = steps;
}
