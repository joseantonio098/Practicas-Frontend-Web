async function loadPyodideAndPackages() {
    const pyodide = await loadPyodide();
    return pyodide;
}
  
async function runPythonCode() {
    let pyodide = await loadPyodideAndPackages();
    
    let code = `
        def add(a, b):
            return a + b
        
        result = add(5, 6)
        result
    `;
    
    try {
        let output = await pyodide.runPythonAsync(code);
        document.getElementById('output').innerText = `Result: ${output}`;
    } catch (err) {
        console.error(err);
        document.getElementById('output').innerText = `Error: ${err.message}`;
    }
}
  
loadPyodideAndPackages();
  