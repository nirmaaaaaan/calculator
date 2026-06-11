function calculate() {

    const mass = parseFloat(document.getElementById("mass").value);
    const g = parseFloat(document.getElementById("g").value);
    const rho = parseFloat(document.getElementById("rho").value);

    const S = parseFloat(document.getElementById("area").value);

    const Vc = parseFloat(document.getElementById("vc").value);

    const Vs = parseFloat(document.getElementById("vs").value);

    const span = parseFloat(document.getElementById("span").value);

    const chord = parseFloat(document.getElementById("chord").value);

    const W = mass * g;

    const CL = (2 * W) / (rho * Vc * Vc * S);

    const CLmax = (2 * W) / (rho * Vs * Vs * S);

    const wingLoading = mass / S;

    const AR = (span * span) / S;

    const mu = 1.81e-5;

    const Re = (rho * Vc * chord) / mu;

    document.getElementById("weight").innerHTML =
        W.toFixed(2) + " N";

    document.getElementById("cl").innerHTML =
        CL.toFixed(3);

    document.getElementById("clmax").innerHTML =
        CLmax.toFixed(3);

    document.getElementById("wl").innerHTML =
        wingLoading.toFixed(2) + " kg/m²";

    document.getElementById("ar").innerHTML =
        AR.toFixed(2);

    document.getElementById("re").innerHTML =
        Re.toExponential(3);

}
const selectedAirfoil =
document.getElementById("airfoil").value;

const airfoilCLmax =
airfoils[selectedAirfoil];

const result =
document.getElementById("airfoilResult");

if (airfoilCLmax >= CLmax)
{
    const margin =
    ((airfoilCLmax - CLmax) / CLmax * 100);

    result.innerHTML =
    `✅ PASS<br>
    Airfoil CLmax = ${airfoilCLmax}<br>
    Margin = ${margin.toFixed(1)}%`;
}
else
{
    result.innerHTML =
    `❌ FAIL<br>
    Airfoil CLmax = ${airfoilCLmax}<br>
    Required = ${CLmax.toFixed(3)}`;
}