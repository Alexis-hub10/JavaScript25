function mostrarDatos(){
  var letra= document.getElementById("letra").value;
  var num=document.getElementById("n1").value
  
  var entero=parseInt(num);
  var flotante=parseFloat(num);
  var datos="Caracter: "+ letra+ "<br>Cadena: "+letra+num+ "<br>"
  alert(datos);
} 

function contenedores(){
	var no;
	no=prompt("Ingresa la cantidad de veces que quieres repetir el article");

	no=parseInt(no);

	if(no<=7){
		for(var i=1;i<=no;i++){
			document.write('<article class="menor">Article numero '+i+'</article>');
			//document.write('<article class="menor" style=  background-color:#10375c">'+'<FONT COLOR="#f3c623">Caja '+n+'</FONT>'+'<article>');
			
		}
	}
	else{
		for(var i=1;i<=no;i++){
			document.write('<article class="mayor">Article numero '+i+'</article>');

			//document.write('<article class="mayor" style="background-color:#f3c623">'+'<FONT COLOR="#10375c">Caja '+n+'</FONT>'+'<article>');
			
		}
	}
    }

    function sw (vote) {
			var x=parseInt(vote.zona.value);
			switch (x) {
				case 1 :
				document.getElementById("mensaje").innerHTML="Muchas gracias por su voto a la zona Norte!";				
					break;
					case 2 :
					document.getElementById("mensaje").innerHTML="Muchas gracias por su voto a la zona Centro!";					
					break;
					case 3 :
					document.getElementById("mensaje").innerHTML="Muchas gracias por su vot0 a la zona Sur!";
					break;
				default:
				window.alert("Usted no ha seleccionado la zona");
					break;
			}
		}

		//Suma
		function Suma(){
			var x=0;
			do{
				var n =parseInt(prompt("Ingrese un número a sumar (Se agregaran consecutivamente)", 0)); 
				if (n>=1) {
					var x=x+n;
				}
				else{
					break;
				}
				
			}
			while (n >=1) {
				
			}
			document.getElementById("resultadoSuma").innerHTML="El total de la suma es: "+ x;
		}

		  function opcSeleccionado(){
			var articulos=document.getElementsByTagName("article");
		
			for(var i=0;i<articulos.length;i++){
			 articulos[i].style.display="none";
			}
			var valor=document.getElementById("temas").value;
			document.getElementById(valor).style.display="block";
		}



		//if else case 1
	function leerNumeros(){
		var num1=parseInt(document.getElementById("n1").value);
		var num2=parseInt(document.getElementById("n2").value);
		var num3=parseInt(document.getElementById("n3").value);
		
		if(num1>num2 && num2>num3){
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num1},${num2},${num3}`;
		}
		else if(num1>num3 &&num3>num2){
		}
		else if(num2>num1 && num1>num3)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num2},${num1},${num3}`;
		}
		else if(num2>num3 && num3>num1)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num2},${num3},${num1}`;
		}
		else if(num3>num1 && num1>num2)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num3},${num1},${num2}`;
		}
		else if(num3>num2 && num2>num1)		{
			document.getElementById("resultado").innerHTML=`Orden de mayor a menor ${num3},${num2},${num1}`;
		}				
	}

	// if else case 2
	function leerImporte(){
		var num1=parseInt(document.getElementById("n4").value);
		var res;
		if(num1>=15000)
		 resultado=num1*1.15;
		else
		 resultado=num1*1.10;

		 document.getElementById("resultado").innerHTML=`El importe neto es:${resultado}`
	}

  //if else case 3
  function leerSalario(){
	  var n1=parseInt(document.getElementById("n5").value);
	  var res;

	  if(n1>=10)
	  res=40000*1.10;
	  else if(n1<10 &&n1>5)
	  res=40000*1.07;
	  else if(n1<5 &&n1>3)
	  res=40000*1.07;
	  else if(n1<3)
	  res=40000*1.05;

	  document.getElementById("resultado").innerHTML=`El salario anual de antiguedad de ${n1} años es de:${res}`;
  }

  // While y for
 function mostrarImpares(){
	  var res="";
	  for(var i=1;i<=100;i++){
		  if(i%2==0){
		  }
		  else
		res+=""+i+", ";
	  }
	  document.getElementById("resultado").innerHTML=res;
	}


	function leerAstericos(){
		var n1=parseInt(document.getElementById("n1").value);
		res="";
		for(i=1;i<=n1;i++){
			res+="*"+"";
		}
		alert(res);
		document.getElementById("resultado").innerHTML=n1+" astericos: "+res;
	}
	
	function mostrarTablas(){
		var res=""
		for(var i=1;i<=10;i++){
          for(var j=1;j<=10;j++){
			  res+=" "+i+" * "+j+" ="+i*j+"<br>";
			  
			  }
			
		  }
		document.getElementById("resultado").innerHTML=res;
	}

	var o=0
	function Boton() {
		if(o==0){
			document.getElementById("email").style.display="none";
			document.getElementById("pass").style.display="none";
			document.getElementById("ssub").style.display="none";
			o=1
			document.getElementById("ocultar").value="Mostrar";
		}
		else{
			document.getElementById("email").style.display="inline";
			document.getElementById("pass").style.display="inline";
			document.getElementById("sub").style.display="inline";
			o=0;
			document.getElementById("ocultar").value="Ocultar";
		}
	}


	
	function a() {
		var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];
	   // document.getElementById("a").innerHTML = persona;
	  persona.pop();
	  document.getElementById("resultado").innerHTML = persona;
       
	}


	function b() {
		var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];
	  persona.shift();
	  document.getElementById("resultado").innerHTML = persona;
       
	}

	

function d() {
	var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];
  persona.unshift(" Alexis");
  document.getElementById("resultado").innerHTML = persona;
}




function e() {
	var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];

  persona.splice(2, 0, " Carlos", " Ame");
  document.getElementById("resultado").innerHTML = persona;
}


function f(){
var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];
document.getElementById("f").innerHTML =
"La primer persona es: " + persona[0];
delete persona[0];


}


function g() {
	var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];

  persona.reverse();
  document.getElementById("resultado").innerHTML = persona;
}

function i() {
	var a = ["Alexis", " Rafael"];
	var b = [" Angel", " Migue", " Carlos"];
	var c = a.concat(b); 
	document.getElementById("resultado").innerHTML = c;
  }

  function j() {
	var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];
	x.innerHTML = persona.join();
  }

  function k() {
	var persona = ["Alexis", " Rafael", " Angel", " Miguel", " Carlos"];
	document.getElementById("resultado").innerHTML = persona.length;
  }
