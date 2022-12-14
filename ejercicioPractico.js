/*1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO*/

function calculo(x, z){
        return x < z ? x / z : x * z;
}

/*2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC)*/

function tipo(x){
        return typeof(x);
}

/*3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN*/

function numeros(a, b, c, d, e, f){
        result = a + b;
        result -= c;
        result *= d;
        result /= e;
        result = Math.pow(result, f);
        return result;  
}

/*4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.*/

function extraer(arrai){
        uno = arrai[arrai.length - 3];
        dos = arrai[arrai.length - 2];
        tres = arrai[arrai.length - 1];
        return nuevoArray = [uno, dos, tres];
}

/*5)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO*/

function ordenar(tuArrai){
        return tuArrai.sort().reverse(); //Se agrega .reverse() si es para números
}
/*6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO*/

function remover(a, b){
        let result = a.filter(element => element != b)
        return result;
}

/*7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.*/

function sumarArray(arrai){
        let sum = 0;
        for (i=0;i < arrai.length;i++){
                sum += arrai[i];
        }
        return sum;
}
function promedio(arrai){
        let sum = 0;
        for (i=0;i < arrai.length;i++){
                sum += arrai[i];
        }
        return sum / arrai.length;
}

/*8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO*/

function objects(objeto, string){
        for (const element in objeto){
                if (element == string){
                        return objeto[element];
                }
        }
}

/*9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES.*/

function sumaObj(objeto){
        let sum = 0;
        for (x in objeto){
                sum += objeto[x];
        }
        return sum;
}