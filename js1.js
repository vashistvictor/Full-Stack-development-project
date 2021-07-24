<script type="text/javascript">
        var id=0;
        var width=200;
        var height=200;
        function fn1()
        {
            id=setInterval(expand,50);
        }
        function fn2()
        {
            clearInterval(id);
            id=setInterval(shrink,50);
        }
        function expand()
        {
            var img=document.getElementById("i30");
            if(width<218)
            {
                width=width+5;
                height=height+5;
                img.style.width=width;
                img.style.height=height;
            }
            else
            {
                clearInterval(id);
            }
        }
        function shrink()
        {
            var img=document.getElementById("i30");
            if(width>200)
            {
                width=width-5;
                height=height-5;
                img.style.width=width;
                img.style.height=height;
            }
            else
            {
                clearInterval(id);
            }
        }
        function fn3()
        {
            id=setInterval(expand2,50);
        }
        function fn4()
        {
            clearInterval(id);
            id=setInterval(shrink2,50);
        }
        function expand2()
        {
            var img=document.getElementById("i31");
            if(width<218)
            {
                width=width+5;
                height=height+5;
                img.style.width=width;
                img.style.height=height;
            }
            else
            {
                clearInterval(id);
            }
        }
        function shrink2()
        {
            var img=document.getElementById("i31");
            if(width>200)
            {
                width=width-5;
                height=height-5;
                img.style.width=width;
                img.style.height=height;
            }
            else
            {
                clearInterval(id);
            }
        }
        var id2=0;
        var wid2=337;
        function fn5()
        {
            id2=setInterval(expand3,50);
        }
        function fn6()
        {
            clearInterval(id2);
            id2=setInterval(shrink3,50);
        }
        function expand3()
        {
            var img=document.getElementById("i40");
            if(wid2<360)
            {
                wid2=wid2+5;
                img.style.width=wid2;
            }
            else
            {
                clearInterval(id2);
            }
        }
        function shrink3()
        {
            var img=document.getElementById("i40");
            if(wid2>337)
            {
                wid2=wid2-5;
                img.style.width=wid2;
            }
            else
            {
                clearInterval(id2);
            }
        }
        var id3=0;
        var wid3=337;
        function fn7()
        {
            id3=setInterval(expand7,50);
        }
        function fn8()
        {
            clearInterval(id3);
            id3=setInterval(shrink7,50);
        }
        function expand7()
        {
            var img=document.getElementById("i41");
            if(wid3<360)
            {
                wid3=wid3+5;
                img.style.width=wid3;
            }
            else
            {
                clearInterval(id3);
            }
        }
        function shrink7()
        {
            var img=document.getElementById("i41");
            if(wid3>337)
            {
                wid3=wid3-5;
                img.style.width=wid3;
            }
            else
            {
                clearInterval(id3);
            }
        }
        var id4=0;
        var wid4=337;
        function fn9()
        {
            id4=setInterval(expand9,50);
        }
        function fn10()
        {
            clearInterval(id4);
            id4=setInterval(shrink9,50);
        }
        function expand9()
        {
            var img=document.getElementById("i42");
            if(wid4<360)
            {
                wid4=wid4+5;
                img.style.width=wid4;
            }
            else
            {
                clearInterval(id4);
            }
        }
        function shrink9()
        {
            var img=document.getElementById("i42");
            if(wid4>337)
            {
                wid4=wid4-5;
                img.style.width=wid4;
            }
            else
            {
                clearInterval(id4);
            }
        }
        var id5=0;
        var wid5=337;
        function fn11()
        {
            id5=setInterval(expand11,50);
        }
        function fn12()
        {
            clearInterval(id5);
            id5=setInterval(shrink11,50);
        }
        function expand11()
        {
            var img=document.getElementById("i43");
            if(wid5<360)
            {
                wid5=wid5+5;
                img.style.width=wid5;
            }
            else
            {
                clearInterval(id5);
            }
        }
        function shrink11()
        {
            var img=document.getElementById("i43");
            if(wid5>337)
            {
                wid5=wid5-5;
                img.style.width=wid5;
            }
            else
            {
                clearInterval(id5);
            }
        }
        function fn20()
        {
            var v1 = document.getElementById("ip1").value;
            var re1 = /^[a-z A-Z 0-9]+$/;
            if(re1.test(v1))
            {
                document.getElementById("lb1").innerHTML="Valid Username";
                document.getElementById("lb1").style.visibility="visible";
                document.getElementById("lb1").style.color="green";
            }
            else
            {
                document.getElementById("lb1").innerHTML="Invalid Username";
                document.getElementById("lb1").style.visibility="visible";
                document.getElementById("lb1").style.color="red";
            }
            var v2 = document.getElementById("ip2").value;
            var re2 = /^([a-z A-Z 0-9@#$%&*]+)$/;
            if(re2.test(v2))
            {
                document.getElementById("lb2").innerHTML="Valid Password";
                document.getElementById("lb2").style.visibility="visible";
                document.getElementById("lb2").style.color="green";
            }
            else
            {
                document.getElementById("lb2").innerHTML="Invalid Password";
                document.getElementById("lb2").style.visibility="visible";
                document.getElementById("lb2").style.color="red";
            }
        }
    </script>