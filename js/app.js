function calculate() {

    const mass = parseFloat(document.getElementById("mass").value);
    const g = parseFloat(document.getElementById("g").value);
    const rho = parseFloat(document.getElementById("rho").value);
    const vc = parseFloat(document.getElementById("vc").value);
    const vs = parseFloat(document.getElementById("vs").value);
    const ar = parseFloat(document.getElementById("arInput").value);

    const selectedAirfoil =
        document.getElementById("airfoil").value;

    const airfoilClmax =
    airfoils[selectedAirfoil].clmax;

const customClmax =
    parseFloat(document.getElementById("customClmax").value);

const clmax =
    isNaN(customClmax)
        ? airfoilClmax
        : customClmax;

    const W = mass * g;

    const S =
        (2 * W) /
        (rho * vs * vs * clmax);

    const CL =
        (2 * W) /
        (rho * vc * vc * S);

    const span =
        Math.sqrt(ar * S);

    const chord =
        S / span;

    const Re =
        (rho * vc * chord) /
        (1.81e-5);

    const WL =
        mass / S;

    const margin =
        ((clmax - CL) / clmax) * 100;

    document.getElementById("weight").innerHTML =
        W.toFixed(2) + " N";

    document.getElementById("areaOut").innerHTML =
        S.toFixed(3) + " m²";

    document.getElementById("spanOut").innerHTML =
        span.toFixed(3) + " m";

    document.getElementById("chordOut").innerHTML =
        chord.toFixed(3) + " m";

    document.getElementById("cl").innerHTML =
        CL.toFixed(3);

    document.getElementById("re").innerHTML =
        Re.toExponential(3);

    document.getElementById("wl").innerHTML =
        WL.toFixed(2) + " kg/m²";

    document.getElementById("margin").innerHTML =
        margin.toFixed(1) + "%";

    document.getElementById("airfoilResult").innerHTML =
        "CLmax = " + clmax.toFixed(2);

    document.getElementById("clmaxUsed").innerHTML =
    clmax.toFixed(2);
}

function weightCalc() {

    const total =
        (+airframe.value) +
        (+electronics.value) +
        (+battery.value) +
        (+payload.value);

    document.getElementById("totalMass").innerHTML =
        (total / 1000).toFixed(2) + " kg";

    document.getElementById("totalWeight").innerHTML =
        ((total / 1000) * 9.81).toFixed(2) + " N";
}
