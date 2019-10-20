function myFunction() {
                // ********************** 3 raghami va takhsise an be table ***********************
                var rd3_B =[""];       // adade 3 raghamie tasadofi
                var rd3_S =[""];       // adade  ta 8 motenazer ba adade 3 raghamie tasadofi
                var i;
                for (i = 1; i < 21; i++)
                {
                    
                    rd3_B[1] = "-";
                    rd3_S[1] = "-";    
                    document.getElementById("rd3_B[1]").innerHTML = rd3_B[1];
                    document.getElementById("rd3_S[1]").innerHTML = rd3_S[1];  
                    
                    rd3_B[i] = 000 + Math.floor(Math.random() * 999);
                    rd3_S[i] = Math.ceil(rd3_B[i]/125) 
                    
                    var i1 = "rd3_B[" + i + "]";
                    var i2 = "rd3_S[" + i + "]";
                    document.getElementById(i1).innerHTML = rd3_B[i];
                    document.getElementById(i2).innerHTML = rd3_S[i];
                     
                }

                // ********************** 2 raghami va takhsise an be table ***********************

                var rd2_B =[""];       // adade 2 raghamie tasadofi
                var rd2_S =[""];       // adade ta 6 motenazer ba adade 2 raghamie tasadofi
                var j;
                for (j = 1; j < 21; j++)
                {
                    rd2_B[j] = 00 + Math.floor(Math.random() * 99);
                    rd2_S[j] = Math.ceil(rd2_B[j]/16.66) 
                    
                    var j1 = "rd2_B[" + j + "]";
                    var j2 = "rd2_S[" + j + "]";
                    document.getElementById(j1).innerHTML = rd2_B[j];
                    document.getElementById(j2).innerHTML = rd2_S[j];
                }

                var items = [
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""]
                ];

                k = 1;
                var i;
                for (i = 1; i < 21; i++)
                {
                    //********************************* soton 1 **********************************
                    var k1 = "items[" + i + "][1]";
                    items[i][1] = rd3_S[i];
                    document.getElementById(k1).innerHTML = items[i][1];
                    document.getElementById("items[1][1]").innerHTML = "-";

                    //********************************* soton 2 **********************************                    
                    items[1][2] = 0 ;   
                    items[2][2] = rd3_S[2];
                    items[3][2] = items[2][2] + rd3_S[3];
                    items[4][2] = items[3][2] + rd3_S[4];
                    items[5][2] = items[4][2] + rd3_S[5];
                    items[6][2] = items[5][2] + rd3_S[6];
                    items[7][2] = items[6][2] + rd3_S[7];
                    items[8][2] = items[7][2] + rd3_S[8];
                    items[9][2] = items[8][2] + rd3_S[9];
                    items[10][2] = items[9][2] + rd3_S[10]; 
                    items[11][2] = items[10][2] + rd3_S[11]; 
                    items[12][2] = items[11][2] + rd3_S[12]; 
                    items[13][2] = items[12][2] + rd3_S[13]; 
                    items[14][2] = items[13][2] + rd3_S[14]; 
                    items[15][2] = items[14][2] + rd3_S[15]; 
                    items[16][2] = items[15][2] + rd3_S[16]; 
                    items[17][2] = items[16][2] + rd3_S[17]; 
                    items[18][2] = items[17][2] + rd3_S[18]; 

                    var k2 = "items[" + i + "][2]";
                    document.getElementById(k2).innerHTML = items[i][2];

                    //********************************* soton 3 **********************************

                    var k3 = "items[" + i + "][3]";
                    items[i][3] = rd2_S[i]
                    document.getElementById(k3).innerHTML = items[i][3];

                    //********************************* soton 4 *********************** ? ***********
                    items[1][4] = 0;
                    document.getElementById("items[1][4]").innerHTML = items[1][4];

                    //********************************* soton 5 *********************** ? ***********
                    items[1][5] = 0;
                    document.getElementById("items[1][5]").innerHTML = items[1][5];

                    //********************************* soton 6 *********************** ? ***********
                    items[1][6] = items[1][3];
                    document.getElementById("items[1][6]").innerHTML = items[1][6];

                    //********************************* soton 7 *********************** ? ***********
                    items[1][7] = items[1][3];
                    document.getElementById("items[1][7]").innerHTML = items[1][7];


                    //********************************* soton 7 *********************** ? ***********
                    items[1][8] = 0;
                    document.getElementById("items[1][8]").innerHTML = items[1][8];



                    j = i+1;
                    if(items[i+1][2] > items[i][6]){
                        items[i+1][4] = items[i+1][2];
                        var k4 = "items[" + j + "][4]";
                        document.getElementById(k4).innerHTML = items[i+1][4];

                        items[i+1][5] = 0;
                        var k5 = "items[" + j + "][5]";
                        document.getElementById(k5).innerHTML = items[i+1][5];

                        items[i+1][6] = rd2_S[i+1] + items[i+1][4];     // 3 + 4
                        var k6 = "items[" + j + "][6]";
                        document.getElementById(k6).innerHTML = items[i+1][6];

                        items[i+1][7] = rd2_S[i+1] + items[i+1][5];     // 3 + 5
                        var k7 = "items[" + j + "][7]";
                        document.getElementById(k7).innerHTML = items[i+1][7];
                        
                        items[i+1][8] = items[i+1][2] - items[i][6];     // 2 - 6
                        var k8 = "items[" + j + "][8]";
                        document.getElementById(k8).innerHTML = items[i+1][8];
                    }
                    if(items[i+1][2] < items[i][6]){

                        items[i+1][4] = items[i][6];
                        var k4 = "items[" + j + "][4]";
                        document.getElementById(k4).innerHTML = items[i+1][4];
                        
                        items[i+1][5] = items[i][6] - items[i+1][2]  ;
                        var k5 = "items[" + j + "][5]";
                        document.getElementById(k5).innerHTML = items[i+1][5];

                        items[i+1][6] = rd2_S[i+1] + items[i+1][4];     // 3 + 4
                        var k6 = "items[" + j + "][6]";
                        document.getElementById(k6).innerHTML = items[i+1][6];

                        items[i+1][7] = rd2_S[i+1] + items[i+1][5];     // 3 + 5
                        var k7 = "items[" + j + "][7]";
                        document.getElementById(k7).innerHTML = items[i+1][7];

                        items[i+1][8] = 0;     
                        var k8 = "items[" + j + "][8]";
                        document.getElementById(k8).innerHTML = items[i+1][8];
                    }

                    if(items[i+1][2] == items[i][6]){
                        items[i+1][4] = items[i][6];
                        var k4 = "items[" + j + "][4]";
                        document.getElementById(k4).innerHTML = items[i+1][4];

                        items[i+1][5] = 0  ;
                        var k5 = "items[" + j + "][5]";
                        document.getElementById(k5).innerHTML = items[i+1][5];

                        items[i+1][6] = rd2_S[i+1] + items[i+1][4];     // 3 + 4
                        var k6 = "items[" + j + "][6]";
                        document.getElementById(k6).innerHTML = items[i+1][6];

                        items[i+1][7] = rd2_S[i+1] + items[i+1][5];     // 3 + 5
                        var k7 = "items[" + j + "][7]";
                        document.getElementById(k7).innerHTML = items[i+1][7];

                        items[i+1][8] = 0;     
                        var k8 = "items[" + j + "][8]";
                        document.getElementById(k8).innerHTML = items[i+1][8];
                    }
                }
           }
