    var images = [
        "https://tse1.mm.bing.net/th?id=OIP.6ZiUNEtw3bJ9o7Fer1KvNgHaE8&pid=Api&P=0", 
        "http://s2.glbimg.com/RmnxOIW3MYk1soDp1JSCpABwDdw=/e.glbimg.com/og/ed/f/original/2016/07/04/abracopai.jpg",
        "https://static.quizur.com/i/b/57c8b972f11970.9090661457c8b972de1967.74592732.jpg",
        "https://static.hering.com.br/sys_master/images/h6f/ha5/9606853722142.jpg?name=C32E-LUSEJ-C1"

    ];

    var names = ["Álbum de Família", "Mãe", "Pai", "Irmã", "Irmão"];


    var i = 0;
    function update()
    {
        i++;
        var numbersFamilyArray = 4 
        if(i > numbersFamilyArray)
        {
            i = 0;
        }

        var updatedImage = images[i];
        var updatedName = names[i];
        document.getElementById("familyMemberImage").src = updatedImage;
        document.getElementById("familyMemberName").innerHTML = updatedName;


    }
