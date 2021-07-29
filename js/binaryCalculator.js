document.getElementById('btn0').innerHTML = 0;
document.getElementById('btn1').innerHTML = 1;

document.getElementById('btn0').addEventListener('click',function(){
    document.getElementById('res').innerHTML += 0;
});

document.getElementById('btn1').addEventListener('click',function(){
    document.getElementById('res').innerHTML += 1;
});

document.getElementById('btnClr').addEventListener('click',function(){
    document.getElementById('res').innerHTML = '';
});

document.getElementById('btnSum').addEventListener('click',function(){
    document.getElementById('res').innerHTML += '+';
});

document.getElementById('btnSub').addEventListener('click',function(){
    document.getElementById('res').innerHTML += '-';
});

document.getElementById('btnMul').addEventListener('click',function(){
    document.getElementById('res').innerHTML += '*';
});

document.getElementById('btnDiv').addEventListener('click',function(){
    document.getElementById('res').innerHTML += '/';
});

document.getElementById('btnEql').addEventListener('click',function(){
    // console.log(document.getElementById('res').innerHTML);
    const res = document.getElementById('res').innerHTML;
    let binary = [];
    let powFirst = 0;
    let decimalFirst = 0;
    let resultFirst = 0;
    let powSecond = 0;
    let decimalSecond = 0;
    let resultSecond = 0;
    let total = 0;
    let hasilBagi = 0;
    let binaryResult = [];

    for(let i = 0; i < res.length; i++)
    {
        if(res[i] == '+')
        {
            //Split buat ngilangin tanda +
            binary = res.split('+');
            //Dapetin pangkat
            powFirst = binary[0].length-1;
            for(let i = 0; i < binary[0].length; i++)
            {
                //Convert biner ke desimal
                decimalFirst = (binary[0][i]*Math.pow(2,powFirst));
                //Hitung hasil convert
                resultFirst = resultFirst + decimalFirst;
                //Kurangin pangkat
                powFirst = powFirst - 1;
            }
            //Masukin hasil convert
            total = total + resultFirst;

            powSecond = binary[1].length-1;
            for(let j = 0; j < binary[1].length; j++)
            {
                decimalSecond = (binary[1][j]*Math.pow(2,powSecond));
                resultSecond = resultSecond + decimalSecond;
                powSecond = powSecond - 1;
            }
            //Masukkan hasil perhitungan desimal
            total = total + resultSecond;
            //Bagi hasil perhitungan
            hasilBagi = Math.floor(total / 2);
            //Masukin hasil perhitungan ke array
            binaryResult.push(total % 2);
            do{
                binaryResult.push(hasilBagi % 2);
                //Hitung hasilBagi
                hasilBagi = Math.floor(hasilBagi/2);
            }while(hasilBagi > 0)
            binaryResult = binaryResult.reverse();
            document.getElementById('res').innerHTML = binaryResult.join('');
        }
        else if(res[i] == '-')
        {
            binary = res.split('-');
            //Dapetin pangkat
            powFirst = binary[0].length-1;
            for(let i = 0; i < binary[0].length; i++)
            {
                //Convert biner ke desimal
                decimalFirst = (binary[0][i]*Math.pow(2,powFirst));
                //Hitung hasil convert
                resultFirst = resultFirst + decimalFirst;
                //Kurangin pangkat
                powFirst = powFirst - 1;
            }
            //Masukin hasil convert
            total = total + resultFirst;

            powSecond = binary[1].length-1;
            for(let j = 0; j < binary[1].length; j++)
            {
                decimalSecond = (binary[1][j]*Math.pow(2,powSecond));
                resultSecond = resultSecond + decimalSecond;
                powSecond = powSecond - 1;
            }
            //Masukkan hasil perhitungan desimal
            total = total - resultSecond;
            //Bagi hasil perhitungan
            hasilBagi = Math.floor(total / 2);
            //Masukin hasil perhitungan ke array
            binaryResult.push(total % 2);
            do{
                binaryResult.push(hasilBagi % 2);
                //Hitung hasilBagi
                hasilBagi = Math.floor(hasilBagi/2);
            }while(hasilBagi > 0)
            binaryResult = binaryResult.reverse();
            document.getElementById('res').innerHTML = binaryResult.join('');
        }
        else if(res[i] == '*')
        {
            binary = res.split('*');
            //Dapetin pangkat
            powFirst = binary[0].length-1;
            for(let i = 0; i < binary[0].length; i++)
            {
                //Convert biner ke desimal
                decimalFirst = (binary[0][i]*Math.pow(2,powFirst));
                //Hitung hasil convert
                resultFirst = resultFirst + decimalFirst;
                //Kurangin pangkat
                powFirst = powFirst - 1;
            }
            //Masukin hasil convert
            total = total + resultFirst;

            powSecond = binary[1].length-1;
            for(let j = 0; j < binary[1].length; j++)
            {
                decimalSecond = (binary[1][j]*Math.pow(2,powSecond));
                resultSecond = resultSecond + decimalSecond;
                powSecond = powSecond - 1;
            }
            //Masukkan hasil perhitungan desimal
            total = total * resultSecond;
            //Bagi hasil perhitungan
            hasilBagi = Math.floor(total / 2);
            //Masukin hasil perhitungan ke array
            binaryResult.push(total % 2);
            do{
                binaryResult.push(hasilBagi % 2);
                //Hitung hasilBagi
                hasilBagi = Math.floor(hasilBagi/2);
            }while(hasilBagi > 0)
            binaryResult = binaryResult.reverse();
            document.getElementById('res').innerHTML = binaryResult.join('');
        }
        else if(res[i] == '/')
        {
            binary = res.split('/');
            //Dapetin pangkat
            powFirst = binary[0].length-1;
            for(let i = 0; i < binary[0].length; i++)
            {
                //Convert biner ke desimal
                decimalFirst = (binary[0][i]*Math.pow(2,powFirst));
                //Hitung hasil convert
                resultFirst = resultFirst + decimalFirst;
                //Kurangin pangkat
                powFirst = powFirst - 1;
            }
            //Masukin hasil convert
            total = total + resultFirst;

            powSecond = binary[1].length-1;
            for(let j = 0; j < binary[1].length; j++)
            {
                decimalSecond = (binary[1][j]*Math.pow(2,powSecond));
                resultSecond = resultSecond + decimalSecond;
                powSecond = powSecond - 1;
            }
            //Masukkan hasil perhitungan desimal
            total = total / resultSecond;
            //Bagi hasil perhitungan
            hasilBagi = Math.floor(total / 2);
            //Masukin hasil perhitungan ke array
            binaryResult.push(total % 2);
            do{
                binaryResult.push(hasilBagi % 2);
                //Hitung hasilBagi
                hasilBagi = Math.floor(hasilBagi/2);
            }while(hasilBagi > 0)
            binaryResult = binaryResult.reverse();
            document.getElementById('res').innerHTML = binaryResult.join('');
        }
    }
});