setInterval(function () {
    fetch("http://localhost:8080/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("suhu").innerHTML = res.suhu_udara;
        document.getElementById("kel_udara").innerHTML = res.kel_udara;
        document.getElementById("kel_tanah").innerHTML = res.kel_tanah;
        document.getElementById("ph").innerHTML = res.ph_tanah;
      });
  }, 1000);