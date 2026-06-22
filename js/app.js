function calculate(){

const mass=parseFloat(document.getElementById('mass').value);
const g=parseFloat(document.getElementById('g').value);
const rho=parseFloat(document.getElementById('rho').value);
const Vc=parseFloat(document.getElementById('vc').value);
const Vs=parseFloat(document.getElementById('vs').value);
const AR=parseFloat(document.getElementById('arInput').value);

const selectedAirfoil=document.getElementById('airfoil').value;
const airfoil=airfoils[selectedAirfoil];

const CLmax=airfoil.clmax;

const W=mass*g;

/* Wing Area from stall requirement */
const S=(2*W)/(rho*Vs*Vs*CLmax);

/* Cruise CL */
const CL=(2*W)/(rho*Vc*Vc*S);

/* Wingspan */
const span=Math.sqrt(AR*S);

/* Chord */
const chord=S/span;

/* Reynolds */
const Re=(rho*Vc*chord)/(1.81e-5);

/* Wing Loading */
const WL=mass/S;

/* Safety Margin */
const margin=((CLmax-CL)/CLmax)*100;

document.getElementById('weight').innerHTML=
W.toFixed(2)+' N';

document.getElementById('areaOut').innerHTML=
S.toFixed(3)+' m²';

document.getElementById('spanOut').innerHTML=
span.toFixed(3)+' m';

document.getElementById('chordOut').innerHTML=
chord.toFixed(3)+' m';

document.getElementById('cl').innerHTML=
CL.toFixed(3);

document.getElementById('re').innerHTML=
Re.toExponential(3);

document.getElementById('wl').innerHTML=
WL.toFixed(2)+' kg/m²';

document.getElementById('margin').innerHTML=
margin.toFixed(1)+' %';

document.getElementById('airfoilResult').innerHTML=
(airfoil.clmax >= CL)
? '✅ Suitable'
: '❌ Not Suitable';

}

function weightCalc(){

const total=
(+airframe.value)+
(+electronics.value)+
(+battery.value)+
(+payload.value);

document.getElementById('totalMass').innerHTML=
(total/1000).toFixed(2)+' kg';

document.getElementById('totalWeight').innerHTML=
((total/1000)*9.81).toFixed(2)+' N';

}
