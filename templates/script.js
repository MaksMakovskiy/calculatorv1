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
//нне
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const x1 = (-b + sqrtDiscriminant) / (2 * a);
    const x2 = (-b - sqrtDiscriminant) / (2 * a);
        
    if (discriminant < 0) {
        steps += `<p>The equation has no real roots since the discriminant is less than zero.</p>`;
    } else {
        
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

    // Решение неравенства
    if (a > 0) {
        if(discriminant > 0){
        steps += `<p>Since a > 0, the parabola opens upwards.</p>`;
    } else if (discriminant < 0) {
            steps += `<p>Since the discriminant is less than zero, the function is always positive.</p>`;
    } else {
            steps += `<p>The function is positive for x < ${Math.min(x1, x2)} and x > ${Math.max(x1, x2)}.</p>`;
            steps += `<p>The function is negative for ${Math.min(x1, x2)} < x < ${Math.max(x1, x2)}.</p>`;
    }
    } else if (a < 0) {
        if(discriminant>0){
        steps += `<p>Since a < 0, the parabola opens downwards.</p>`;
        } else if (discriminant < 0) {
            steps += `<p>Since the discriminant is less than zero, the function is always negative.</p>`;
        } else {
            steps += `<p>The function is negative for x < ${Math.min(x1, x2)} and x > ${Math.max(x1, x2)}.</p>`;
            steps += `<p>The function is positive for ${Math.min(x1, x2)} < x < ${Math.max(x1, x2)}.</p>`;
        }
    } else {
        if(discriminant>0){
        steps += `<p>The function is linear since a = 0.</p>`;}
        
        if (b !== 0) {
            const x = -c / b;
            steps += `<p>The root of the linear equation is x = ${x}</p>`;
        } else if (c === 0) {
            steps += `<p>The equation is 0 = 0, which is true for all x.</p>`;
        } else {
            steps += `<p>The equation has no solution since it is a constant non-zero value.</p>`;
        }
    }
    
    resultDiv.innerHTML = steps;
    }
