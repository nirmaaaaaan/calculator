
function calculate(){
const mass=parseFloat(document.getElementById('mass').value);
const g=parseFloat(document.getElementById('g').value);
const rho=parseFloat(document.getElementById('rho').value);
const S=parseFloat(document.getElementById('area').value);
const Vc=parseFloat(document.getElementById('vc').value);
const Vs=parseFloat(document.getElementById('vs').value);
const span=parseFloat(document.getElementById('span').value);
const chord=parseFloat(document.getElementById('chord').value);

const W=mass*g;
const CL=(2*W)/(rho*Vc*Vc*S);
const CLmax=(2*W)/(rho*Vs*Vs*S);
const WL=mass/S;
const AR=(span*span)/S;
const Re=(rho*Vc*chord)/(1.81e-5);
const Lift=0.5*rho*Vc*Vc*S*CL;

document.getElementById('weight').innerHTML=W.toFixed(2)+' N';
document.getElementById('cl').innerHTML=CL.toFixed(3);
document.getElementById('clmax').innerHTML=CLmax.toFixed(3);
document.getElementById('wl').innerHTML=WL.toFixed(2);
document.getElementById('ar').innerHTML=AR.toFixed(2);
document.getElementById('re').innerHTML=Re.toExponential(3);
document.getElementById('lift').innerHTML=Lift.toFixed(2)+' N';

const airfoil=airfoils[document.getElementById('airfoil').value];
const margin=((airfoil.clmax-CLmax)/CLmax)*100;
document.getElementById('margin').innerHTML=margin.toFixed(1)+'%';
document.getElementById('airfoilResult').innerHTML=(airfoil.clmax>=CLmax?'✅ PASS':'❌ FAIL');
}

function wingAreaCalc(){
const mass=parseFloat(document.getElementById('mass').value);
const g=parseFloat(document.getElementById('g').value);
const rho=parseFloat(document.getElementById('rho').value);
const vs=parseFloat(document.getElementById('vs').value);
const cl=parseFloat(document.getElementById('targetCL').value);
const area=(2*mass*g)/(rho*vs*vs*cl);
document.getElementById('requiredArea').innerHTML=area.toFixed(3)+' m²';
}

function weightCalc(){
const total=(+airframe.value)+(+electronics.value)+(+battery.value)+(+payload.value);
document.getElementById('totalMass').innerHTML=(total/1000).toFixed(2)+' kg';
document.getElementById('totalWeight').innerHTML=((total/1000)*9.81).toFixed(2)+' N';
}
