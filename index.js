<script src="jquery-3.3.1.slim.js" type="text/javascript"></script>
    <script type="text/javascript">
        var imgs =  [0,1,2,3,4];
        const cursor =["./izq.jpg","der.jpg"];
       
        $(document).ready(function(){
            $("#cursor1").html("<img src="+cursor[0]+">");
            $("#cursor2").html("<img src="+cursor[1]+">");
            $("#img1").html("<img src=./"+imgs[0]+".png>");
            $("#img2").html("<img src=./"+imgs[1]+".png>");
            $("#img3").html("<img src=./"+imgs[2]+".png>");
            $("#img4").html("<img src=./"+imgs[3]+".png>");
            $("#img5").html("<img src=./"+imgs[4]+".png>");
            $(".amplified").html("<img src=./"+imgs[2]+".png>");
           
            $("#cursor2").click(function(){
                for (let i=0; i<imgs.length;i++){
                    if(imgs[i]==20){
                        imgs[i]=0;
                    }else{
                        imgs[i]++;
                    }
                }
                $("#img1").html("<img src=./"+imgs[0]+".png>");
                $("#img2").html("<img src=./"+imgs[1]+".png>");
                $("#img3").html("<img src=./"+imgs[2]+".png>");
                $("#img4").html("<img src=./"+imgs[3]+".png>");
                $("#img5").html("<img src=./"+imgs[4]+".png>");
                $(".amplified").html("<img src=./"+imgs[2]+".png>");
            });
            
            $("#cursor1").click(function(){
                for (var i=0; i<imgs.length;i++){
                    if(imgs[i]==0){
                        imgs[i]=20;
                    }else{
                        imgs[i]--;
                    }
                }
                $("#img1").html("<img src=./"+imgs[0]+".png>");
                $("#img2").html("<img src=./"+imgs[1]+".png>");
                $("#img3").html("<img src=./"+imgs[2]+".png>");
                $("#img4").html("<img src=./"+imgs[3]+".png>");
                $("#img5").html("<img src=./"+imgs[4]+".png>");
                $(".amplified").html("<img src=./"+imgs[2]+".png>");
            });
            $("#img4").click(function(){
                for (let i=0; i<imgs.length;i++){
                    if(imgs[i]==20){
                        imgs[i]=0;
                    }else{
                        imgs[i]++;
                    }
                }
                $("#img1").html("<img src=./"+imgs[0]+".png>");
                $("#img2").html("<img src=./"+imgs[1]+".png>");
                $("#img3").html("<img src=./"+imgs[2]+".png>");
                $("#img4").html("<img src=./"+imgs[3]+".png>");
                $("#img5").html("<img src=./"+imgs[4]+".png>");
                $(".amplified").html("<img src=./"+imgs[2]+".png>");
            });
            $("#img2").click(function(){
                for (var i=0; i<imgs.length;i++){
                    if(imgs[i]==0){
                        imgs[i]=20;
                    }else{
                        imgs[i]--;
                    }
                }
                $("#img1").html("<img src=./"+imgs[0]+".png>");
                $("#img2").html("<img src=./"+imgs[1]+".png>");
                $("#img3").html("<img src=./"+imgs[2]+".png>");
                $("#img4").html("<img src=./"+imgs[3]+".png>");
                $("#img5").html("<img src=./"+imgs[4]+".png>");
                $(".amplified").html("<img src=./"+imgs[2]+".png>");
            });
            $("#img1").click(function(){
                for(let j=0;j<2;j++){
                    for (var i=0; i<imgs.length;i++){
                        if(imgs[i]==0){
                            imgs[i]=20;
                        }else{
                            imgs[i]--;
                        }
                    }
                }
                $("#img1").html("<img src=./"+imgs[0]+".png>");
                $("#img2").html("<img src=./"+imgs[1]+".png>");
                $("#img3").html("<img src=./"+imgs[2]+".png>");
                $("#img4").html("<img src=./"+imgs[3]+".png>");
                $("#img5").html("<img src=./"+imgs[4]+".png>");
                $(".amplified").html("<img src=./"+imgs[2]+".png>");
            });
            $("#img5").click(function(){
                for(let j=0;j<2;j++){
                    for (var i=0; i<imgs.length;i++){
                        if(imgs[i]==20){
                            imgs[i]=0;
                        }else{
                            imgs[i]++;
                        }
                    }
                }
                $("#img1").html("<img src=./"+imgs[0]+".png>");
                $("#img2").html("<img src=./"+imgs[1]+".png>");
                $("#img3").html("<img src=./"+imgs[2]+".png>");
                $("#img4").html("<img src=./"+imgs[3]+".png>");
                $("#img5").html("<img src=./"+imgs[4]+".png>");
                $(".amplified").html("<img src=./"+imgs[2]+".png>");
            });

        });
        
    </script>