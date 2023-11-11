function saludo(){
    alert("BIENVENIDO USUARIO ");
}
function SUMA(){
    //DECLARAMOS LAS VARIABLES NECESARIAS
    let A = 0;
    let B = 0;
    let SUMA = 0;
    // SOLICITAR LAS VARIABLES
    alert("Este adgoritmo realiza la suma de dos valores ingresados")
    A =parseInt(prompt("ingrese el primer valor a sumar"));
    B =parseInt(prompt("ingrese el primer valor a sumar"));
    
    SUMA = A + B;
    // MOSTRAMOS RESULTADO
    alert("La respuesta de la suma es" + SUMA +" ,las mejores" )
}
function BASICAS(){
    //DECLARAMOS LAS VARIABLES
    let A = 0;
    let B = 0;
    let SUMA = 0;
    let D = 0;
    let E = 0;
    let RESTAR = 0;
    let L = 0;
    let M = 0;
    let MULTIPLICAR = 0;
    let H = 0;
    let J = 0;
    let DIVISION = 0;
    //SOLICITAR LAS VARIABLES
    alert("Este algoritmo es de matematicas")
    A =parseInt(prompt("Ingrese el primer valor a sumar"));
    B =parseInt(prompt("Ingrese el segundo valor a sumar"));

    SUMA = A + B;
    alert("La respuesta de la suma es" + SUMA)

    D =parseInt(prompt("Ingrese el primer valor de la resta"));
    E =parseInt(prompt("Ingrese el segundo valor de la resta"));

    RESTA = D - E;
    
    alert("La respuesta de la resta es" + RESTA) 

    L =parseInt(prompt("Ingrese el primer valor de la multiplicacion"));
    M =parseInt(prompt("Ingrese el segundo valor de la multiplicacion"));

    MULTIPLICAR = L * M;

    alert("La respuesta de la multipliacion es" + MULTIPLICAR)

    H =parseInt(prompt("Ingrese el primer valor de la divicion"));
    J =parseInt(prompt("Ingrese el segundo valor de la divicion"));

    DIVISION = H / J;
    
    alert("La respuesta de la divicion es" + DIVISION)
}

function CUADRADO() {
     //DECLARAMOS VARIABLE
     let A =0;
     let CUADRADO = 0;

     //SOLICITAR DATOS
     alert("En este algoritmo encontraremos el valor del cuadrado");

     A =parseInt(prompt("Ingrese el numero para saber el cuadrado"));

     CUADRADO = A * A;
     //MOSTRAMOS RESULTADOS
     alert("El numero del cuadrado de" + A+ "es: " + CUADRADO)

}

function TRIANGULO() {
    //DECLARAR VARIABLES
    let BASE = 0;
    let ALTURA = 0;
    let AREA = 0;
    // SOLICITAR DATOS
    alert("Este algoritmo encontraremos el area de un triangulo");

    BASE =parseInt(prompt("Ingrese la base del triangulo"));
    ALTURA =parseInt(prompt("Ingrese la altura del triangulo"));

    AREA = (BASE * ALTURA)/2;

    //MOSTRAR RESULTADOS
    alert("El are del triangulo es:" + AREA);
    
}

function NUMEROMAYOR(){
    let A = 0;
    let B = 0;

    alert("En este algoritmo te dara a conoser los numeros mayores y menores");

    A =parseInt(prompt("Ingrese el primer valor"));
    B =parseInt(prompt("Ingrese el segundo valor"));

    if (A == B){
        alert("Los valores ingresados son iguales");
    }
    else if(A > B){
        alert(A + "Es mayor que " + B);
    }
    else{
        alert(B + "Es mayor que " + A)
    }
}

function MEDIDAS() {
    let A = 0;
    let PIES = 0;
    let PULGADAS = 0;
    let KILOMETROS = 0;
    
    alert ("Este algotirmo servira para conocer las medidas en kilometros pulgas y pies");

    A = parseInt(prompt("Ingrese un numero que quiera"));

    KILOMETROS = A/1000;
    PIES = A * 3,281;
    PULGADAS = A * 39,37;

    alert("El metro ingresado es :" + A + "m\n" + "A continuacion se le dara a conocer la diferencia de las converciones"+ "\n"
    + "kilometros:" + KILOMETROS + "\n"
    + "pies:" + PIES + "\n"
    + "pulgadas:" + PULGADAS );

    
 }

function TEMPERATURAS() {
   let GradoCentigrado = 0;
   let fahrenheit = 0;

   alert("Este codigo lo covierte de celsius");

   GradoCentigrado = parseInt(prompt("Ingrese los grados celsius:"));

   fahrenheit = (GradoCentigrado * 9/5 ) + 32;

   alert("La conversion de °C:" + GradoCentigrado + " a grados fahrenheit es: " + fahrenheit);

}

function NOTAS() {

    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;

    alert("en esta algoritmo podra observar sus propias notas y se dara cuenta si lograra a pasar ")

    nota1 =parseInt(prompt("ingrese la primera nota"));
    nota2 =parseInt(prompt("ingrese la segunda nota"));
    nota3 =parseInt(prompt("ingrese la tercera nota"));
    nota4 =parseInt(prompt("ingrese la cuarta nota"));
    nota5 =parseInt(prompt("ingrese la quinta nota"));
    
    promedio = (nota1 + nota2 +nota3 + nota4 + nota5) /5;
    
    if(promedio >65){
        alert("su nota promedio es:" + promedio + "usted aprobo la asigantura");
    } 
    else if(promedio ==65){
        alert("su nota promedio es:" + promedio + "usted aporbo  con una nota minima la asigantura");
    }
    else{
        alert("su nota promedio es:" + promedio + "usted reprobo la asigantura");
    }
    
}

function DESCUENTO(){

    let pesofruta = 0;
    let totalApagar = 0;
    let precio = 0;

    alert("Con este algoritmo usted sabra el descuento que se aplicara a su producto de compra")

    precio =parseInt(prompt("Ingrese el valor de su compra"));
    pesofruta =parseInt(prompt("Ingrese el numero de Kilos"));

    if(pesofruta >=10){
        totalApagar = precio - (precio * (20/100));
        alert("Se le aplicara un descuento del 20% \n El total a pagar es:" + totalApagar);
    }
    else if (pesofruta > 6 && pesofruta <10){
        totalApagar =precio - (precio * (15/100));
        alert("Se le aplicara un descuento del 15% \n El total a pagar es:" + totalApagar);
    }
    else if (pesofruta > 3 &&pesofruta <5){
        totalApagar = precio - (precio * (10/100));
        alert("Se le aplicara un descuento del 10% \n El total a pagar es:" + totalApagar);
    }
    else {
        alert("Usted no recibira ningun descuento en la compra" /n ,"El total a pagar es:" + precio)
    }

}

function PARESIMPARES(){
    let numero = 0;

    alert("Con este algoritmo usted podra observar los numeros pares e impares ")

    numero =parseInt(prompt("Ingrese un numero "));

    if(numero % 2 == -0){
    alert("El numero " + numero + "Es par");
    }
    else{
        alert("El numero" + numero + "Es impar");
    }
    numero =parseInt(prompt("Ingrese otro numero que quieras saber "))
    }


    function SALARIO(){
        let horatrabajo = 0;
        let salarioRecibido = 0;
        let salariosemanal = 0;
        let horaextra = 0;

        alert("Este algoritmo podemos observar el salario ganada por hora semana y extras")

        horatrabajo =parseInt(prompt("ingrese las horas de trabajo"));

        if(horatrabajo == 0){
            alert("Usted no a trabajado esta semana")
        }
        else if(horatrabajo <= 40 || horatrabajo == 40){
            salarioRecibido = salariosemanal * horatrabajo;
            alert("usted ha trabajado las 40 horas o menos de las 40 horas en total \n Usted recibira: $" + salarioRecibido);
        }
        else{
            horaextra = parseInt(prompt("cuantas horas extras a trabajado en la semana"));
            salarioRecibido = 650000 + (40000 * horaextra);
            alert("usted trabaja" + horaextra + "horas extras esta semana  \n ustede recibira: $" + salarioRecibido);
        }
    }

    function NUMEROSMENORES(){
        let numA = 0;
        let numB = 0;
        let numC = 0;

        alert("En este algoritmo observaremos entre tres numeroes cual es el menor ")
    
        numA =parseInt(prompt("Ingrese el primer numero"));
        numB =parseInt(prompt("Ingrese el segundo numero"));
        numC =parseInt(prompt("Ingrese el tercer numero"));

        if(numA < numB && numA < numC){
            alert("El numero menor es " + numA);
        }
        else if(numB < numA && numB < numC){
            alert("El numero menor es " + numB);
        }
        else if(numA == numB && numB == numC){
            alert("los numeros son iguales  " + numA + "a:"+ numB + "y" + numC);
        }
        else{
            alert("El numero menor es " + numC)
        }
        }
        
    




