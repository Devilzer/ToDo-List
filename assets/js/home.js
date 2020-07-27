
  var cat = document.querySelectorAll("#cattext");
  const datePicker = document.getElementById("datePicker");
  // adding different colors according to category
  for (let i of cat){
      if(i.innerText =="personal"){
          i.style.backgroundColor = "#62760c";
      }
      else if(i.innerText =="work"){
        i.style.backgroundColor = "#fa7d09";
      }
      else if(i.innerText =="wishlist"){
        i.style.backgroundColor = "#092532";
      }
      else if(i.innerText =="shopping"){
        i.style.backgroundColor = "#7c3c21";
      }
  }
  
// limiting date picker form  seleting previous dates
        var d = new Date();
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        var todayDate = [year, month, day].join('-');
        console.log(todayDate);
        datePicker.setAttribute("min", todayDate);
        // $("#date").attr("max", todayDate);
        
          