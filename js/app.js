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

    // Cruise CL
    const CL = (2 * W) / (rho * Vc * Vc * S);

    // Required CLmax
    const CLmax = (2 * W) / (rho * Vs * Vs * S);

    // Wing Loading
    const wingLoading = mass / S;

    // Aspect Ratio
    const AR = (span * span) / S;

    // Reynolds Number
    const mu = 1.81e-5;
    const Re = (rho * Vc * chord) / mu;

    // Lift Produced
    const Lift =
        0.5 * rho * Vc * Vc * S * CL;

    // Results
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

    document.getElementById("lift").innerHTML =
        Lift.toFixed(2) + " N";

    // Airfoil Check
    const selectedAirfoil =
        document.getElementById("airfoil").value;

    const airfoilCLmax =
        airfoils[selectedAirfoil];

    const result =
        document.getElementById("airfoilResult");

    const margin =
        ((airfoilCLmax - CLmax) / CLmax) * 100;

    document.getElementById("margin").innerHTML =
        margin.toFixed(1) + "%";

    if (airfoilCLmax >= CLmax) {

        result.innerHTML =
            `✅ PASS<br>
            Airfoil CLmax = ${airfoilCLmax}<br>
            Margin = ${margin.toFixed(1)}%`;

    } else {

        result.innerHTML =
            `❌ FAIL<br>
            Airfoil CLmax = ${airfoilCLmax}<br>
            Required = ${CLmax.toFixed(3)}`;
    }
}


// Wing Area Calculator
function wingAreaCalc() {

    const mass =
        parseFloat(document.getElementById("mass").value);

    const g =
        parseFloat(document.getElementById("g").value);

    const rho =
        parseFloat(document.getElementById("rho").value);

    const Vs =
        parseFloat(document.getElementById("vs").value);

    const targetCL =
        parseFloat(document.getElementById("targetCL").value);

    const W = mass * g;

    const requiredArea =
        (2 * W) /
        (rho * Vs * Vs * targetCL);

    document.getElementById("requiredArea").innerHTML =
        requiredArea.toFixed(3) + " m²";
}

function weightCalc()
{
    const airframe =
    parseFloat(document.getElementById("airframe").value);

    const electronics =
    parseFloat(document.getElementById("electronics").value);

    const battery =
    parseFloat(document.getElementById("battery").value);

    const payload =
    parseFloat(document.getElementById("payload").value);

    const totalGrams =
    airframe +
    electronics +
    battery +
    payload;

    const totalKg =
    totalGrams / 1000;

    const totalWeight =
    totalKg * 9.81;

    document.getElementById("totalMass").innerHTML =
    totalKg.toFixed(2) + " kg";

    document.getElementById("totalWeight").innerHTML =
    totalWeight.toFixed(2) + " N";
}